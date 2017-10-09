import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UsuarioService} from '../../usuario/usuario.service';
import {AuthService} from '../../auth/auth.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';
import {CoreService} from '../../core/core.service';
import {ValidateCPFCNPJ} from '../../shared/validators/cpfcnpj.validator';
import {ConsultaCepService} from '../../shared/services/consulta-cep.service';
import {Erro} from '../../shared/models/erro.model';

@Component({
  selector: 'app-perfil-edit',
  templateUrl: './perfil-edit.component.html',
  styleUrls: ['./perfil-edit.component.css']
})
export class PerfilEditComponent implements OnInit, OnDestroy {

  @ViewChild('foneInput') foneInput: ElementRef;
  @ViewChild('urlInput') urlInput: ElementRef;

  getUsuarioSubscription: Subscription;
  currentUserChanged: Subscription;
  formulario: FormGroup;

  erro: Erro;

  constructor(private usuarioService: UsuarioService,
              protected authService: AuthService,
              protected coreService: CoreService,
              private formBuilder: FormBuilder,
              private router: Router,
              private cepService: ConsultaCepService) {

    this.formulario = this.formBuilder.group({
      uid: [''],
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      foto: [''],
      autonomo: [false],
      cpf: ['', [ValidateCPFCNPJ]],
      descricao: [''],
      categorias: this.formBuilder.array([]),
      dataCadastro: [Date.now()],
      ativo: [true],
      aceitaCartao: [false],
      chats: [null],
      fones: this.formBuilder.array([]),
      links: this.formBuilder.array([]),
      observacao: [''],
      endereco: this.formBuilder.group({
        rua: [''],
        complemento: [''],
        numero: [''],
        bairro: [''],
        cidade: [''],
        ibge: [''],
        cep: [''],
        estado: [''],
        maps: this.formBuilder.group({
          lat: [0],
          lng: [0]
        })
      }),
      avaliacoes: [null],
      servicosInscritos: [null],
      servicosDisponibilizados: [null],
      favoritos: [null]
    });


  }

  ngOnInit() {
    if (this.authService.currentUser) {
      this.getUsuarioSubscription = this.getUsuario(this.authService.currentUser);
    } else {
      this.currentUserChanged = this.authService.currentUserChanged.subscribe(currentUser => {
        this.getUsuarioSubscription = this.getUsuario(currentUser);
      });
    }
  }

  ngOnDestroy() {
    if (this.currentUserChanged) {
      this.currentUserChanged.unsubscribe();

      if (this.getUsuarioSubscription) {
        this.getUsuarioSubscription.unsubscribe();
      }
    }
  }

  private getUsuario(currentUser) {
    return this.usuarioService
      .getUsuario(currentUser.uid).subscribe(usuario => {

          this.formulario.patchValue({
            uid: usuario.$key,
            nome: currentUser.displayName,
            email: currentUser.email,
            foto: currentUser.photoURL
          });


          if (usuario.$exists()) {

            if (!usuario.favoritos) {
              usuario.favoritos = null
            }

            if (!usuario.servicosInscritos) {
              usuario.servicosInscritos = null
            }

            this.formulario.patchValue(usuario);

            if (usuario.categorias) {
              const categorias = <FormArray>this.formulario.get('categorias');
              categorias.controls = usuario.categorias.map(categoria =>
                this.adicionaControlCategoria(categoria.uid, categoria.descricao)
              );
            }

            if (usuario.fones) {
              const fones = <FormArray>this.formulario.controls['fones'];
              fones.controls = usuario.fones.map(fone =>
                this.adicionaControlFone(fone)
              );
            }

            if (usuario.links) {
              const links = <FormArray>this.formulario.get('links');
              links.controls = usuario.links.map(link =>
                this.adicionaControlLink(link.tipo, link.url, link.nome)
              );
            }
          }
        }
      );
  }

  adicionaControlCategoria(uid, descricao) {
    return this.formBuilder.group({
      uid: [uid],
      descricao: [descricao]
    })
  }

  adicionaControlLink(tipo, url, nome) {
    return this.formBuilder.group({
      tipo: [tipo],
      url: [url],
      nome: [nome]
    })
  }

  adicionaControlFone(fone) {
    return this.formBuilder.control(fone);
  }

  excluirCategoria(index) {
    const categorias = <FormArray>this.formulario.controls['categorias'];
    categorias.removeAt(index)
  }

  excluirFone(index) {
    const fones = <FormArray>this.formulario.controls['fones'];
    fones.removeAt(index)
  }

  excluirLink(index) {
    const links = <FormArray>this.formulario.controls['links'];
    links.removeAt(index)
  }

  adicionarCategoria(categoria) {
    categoria = JSON.parse(categoria);

    if (!categoria.uid) {
      return;
    }

    const control = <FormArray>this.formulario.controls['categorias'];
    control.push(this.adicionaControlCategoria(categoria.uid, categoria.descricao));
  }

  adicionarLink(link) {
    let url = this.urlInput.nativeElement.value;
    link = JSON.parse(link);

    if (!url) {
      return;
    }

    const re = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/i;

    if (re.test(url)) {
      const control = <FormArray>this.formulario.controls['links'];
      control.push(this.adicionaControlLink(link.tipo, url, link.nome));
      this.urlInput.nativeElement.value = '';
    }
  }

  adicionarFone() {
    let fone = this.foneInput.nativeElement.value;
    fone = this.coreService.unmaskNumbers(fone);

    if (!fone) {
      return;
    }

    const re = RegExp('^[0-9]{10}|[0-9]{11}$');

    if (re.test(fone)) {
      const control = <FormArray>this.formulario.controls['fones'];
      control.push(this.adicionaControlFone(fone));

      this.foneInput.nativeElement.value = '';
    }
  }


  isValid() {
    this.erro = null;

    if (this.profissionalNaoPossuiCategoria()) {
      const erro = {
        campo: 'categorias',
        erros: ['required']
      };

      this.adicionaErro(erro);
    }

    if (!this.formulario.valid) {
      this.verificaErrosForm(this.formulario);
      this.verificaValidacoesForm(this.formulario);
    }


    return !this.erro;
  }

  private adicionaErro(erro: { campo: string, erros: string[] }) {
    if (!this.erro) {
      this.erro = new Erro();

      this.erro.cabecalho = 'Atenção';
      this.erro.descricao = 'Verifique corrija os campos destacados como invalidos!';
      this.erro.itens = [];
    }

    this.erro.itens.push(erro);
  }

  private profissionalNaoPossuiCategoria() {
    return this.formulario.get('autonomo').value && !this.formulario.get('categorias').value.length;
  }

  consultaCEP() {
    let cep = this.formulario.get('endereco.cep').value;
    this.cepService.consultaCEP(cep)
      .subscribe(dados => this.populaDadosForm(dados.json()));
  }

  populaDadosForm(dados) {
    const campos = {
      logradouro: 'rua',
      cep: 'cep',
      ibge: 'ibge',
      complemento: 'complemento',
      bairro: 'bairro',
      localidade: 'cidade',
      uf: 'estado'
    };

    const endereco = Object.keys(dados)
      .reduce((acc, curr) => {
        if (dados[curr] && campos[curr]) {
          acc[campos[curr]] = dados[curr];
        }

        return acc;
      }, {});

    this.formulario.patchValue({endereco});
  }

  onSubmit() {
    if (this.isValid()) {

      console.log(this.formulario);
      this.formulario.get('cpf')
        .setValue(this.coreService.unmaskNumbers(this.formulario.get('cpf').value));

      this.usuarioService
        .setUsuario(
          this.formulario.value
        ).then(
        () => {
          this.authService.currentUser.updateProfile({
            displayName: this.formulario.value.nome,
            photoURL: this.formulario.value.foto
          });
        }
      );

      this.router.navigate(['/perfil']);
    }
  }

  verificaErrosForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);

      if (controle.errors) {
        const erro = {
          campo: campo,
          erros: Object.keys(controle.errors).map(erro => erro)
        };
        this.adicionaErro(erro);
      }

      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  verificaValidTouched(campo: string) {

    return (
      !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }

  aplicaCssErro(campo: string) {
    return {
      'is-invalid': this.verificaValidTouched(campo)
    };
  }

  getDescricaoCampo(campo) {
    switch (campo) {
      case 'nome':
        return 'Nome';
      case 'cpf':
        return 'CPF/CNPJ';
      case 'email':
        return 'E-Mail';
      case 'categorias':
        return 'Áreas de Atuação';
    }
  }

  getDescricaoErro(erro) {
    switch (erro) {
      case 'required':
        return 'É obrigatório';
      case 'pattern':
        return 'Não está em um formato válido';
      case 'cpf':
        return 'CPF/CNPJ inválido';
      case 'email':
        return 'E-Mail inválido';
    }
  }

  onReset() {
    this.router.navigate(['/perfil']);
  }

}
