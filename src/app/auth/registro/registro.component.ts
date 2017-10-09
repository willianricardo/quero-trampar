import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {

  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  registroEmail() {
    if (this.formulario.valid) {

      this.authService
        .registroEmail(
          this.formulario.get('email').value,
          this.formulario.get('senha').value
        );

    } else {
      Object.keys(this.formulario.controls).forEach(campo => {
        this.formulario.get(campo).markAsTouched();
      })
    }
  }

  isValid(campo: string) {
    return this.formulario.get(campo).valid && this.isTouched(campo);
  }

  isInvalid(campo: string) {
    return !this.formulario.get(campo).valid && this.isTouched(campo);
  }

  isTouched(campo: string) {
    return this.formulario.get(campo).touched;
  }

  aplicaCssErro(campo: string) {
    return {
      'is-valid': this.isValid(campo),
      'is-invalid': this.isInvalid(campo)
    }
  }

}
