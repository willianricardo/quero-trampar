import {Component, OnInit} from '@angular/core';
import {ServicoService} from '../../servico.service';
import {CoreService} from '../../../core/core.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../auth/auth.service';
import {Erro} from '../../../shared/models/erro.model';
import {ConsultaCepService} from '../../../shared/services/consulta-cep.service';

@Component({
  selector: 'app-servico-edit',
  templateUrl: './servico-edit.component.html',
  styleUrls: ['./servico-edit.component.css']
})
export class ServicoEditComponent implements OnInit {

  getServicoSubscription: Subscription;
  formulario: FormGroup;
  uid = null;
  erro: Erro;

  constructor(private servicoService: ServicoService,
              protected authService: AuthService,
              protected coreService: CoreService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private cepService: ConsultaCepService) {
    const data = new Date().toISOString().substring(0, 10);
    this.formulario = this.formBuilder.group({
      uid: [''],
      titulo: ['', [Validators.required]],
      status: ['disponivel'],
      valor: [0, [Validators.min(0)]],
      descricao: ['', [Validators.required]],
      categorias: this.formBuilder.array([]),
      dataCadastro: [data],
      dataPrevisao: [data],
      dataCancelamento: [''],
      dataConclusao: [''],
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
      candidatos: [null],
      usuario: ['']
    });
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.uid = params['id'];
          if (this.uid) {
            this.getServicoSubscription = this.getServico(this.uid);
          }
        }
      );
  }

  private getServico(id) {
    return this.servicoService
      .getServico(id)
      .subscribe(servico => {

          this.formulario.patchValue({
            uid: servico.$key
          });

          if (servico.$exists()) {
            if (!this.authService.isAdministrator()){
              if (!this.authService.isMe(servico.usuario) ||
                servico.status === 'cancelado' ||
                servico.status === 'finalizado') {
                this.router.navigate(['/servicos', this.uid]);
              }
            }

            this.formulario.patchValue(servico);

            if (servico.categorias) {
              const categorias = <FormArray>this.formulario.get('categorias');
              categorias.controls = servico.categorias.map(categoria =>
                this.adicionaControlCategoria(categoria.uid, categoria.descricao)
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

  excluirCategoria(index) {
    const categorias = <FormArray>this.formulario.controls['categorias'];
    categorias.removeAt(index)
  }

  adicionarCategoria(categoria) {
    categoria = JSON.parse(categoria);

    if (!categoria.uid) {
      return;
    }

    const control = <FormArray>this.formulario.controls['categorias'];
    control.push(this.adicionaControlCategoria(categoria.uid, categoria.descricao));
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
        if (dados[curr]) {
          acc[campos[curr]] = dados[curr];
        }

        return acc;
      }, {});

    this.formulario.patchValue({endereco});
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
      case 'titulo':
        return 'Titulo';
      case 'descricao':
        return 'Descrição';
      case 'valor':
        return 'Valor';
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
      case 'min':
        return 'Não pode ser negativo';
    }
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

  isValid() {
    this.erro = null;

    if (!this.formulario.get('categorias').value.length) {
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

  onSubmit() {

    if (this.isValid()) {
      if (this.uid) {

        this.servicoService
          .updateServico(
            this.formulario.value
          );
        this.router.navigate(['/servicos', this.uid]);
      } else {
        this.formulario.value.usuario = this.authService.currentUser.uid;
        this.servicoService
          .setServico(
            this.formulario.value
          ).then(success => {
            this.router.navigate(['/servicos', success.key]);
          }
        );
      }
    }
  }

  onReset() {
    if (this.uid) {
      this.router.navigate(['/servicos', this.uid]);
    } else {
      this.router.navigate(['/servicos']);
    }
  }
}
