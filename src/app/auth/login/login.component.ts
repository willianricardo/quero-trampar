import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  loginEmail() {
    if (this.formulario.valid) {

      this.authService
        .loginEmail(
          this.formulario.get('email').value,
          this.formulario.get('senha').value
        );

    } else {
      Object.keys(this.formulario.controls).forEach(campo => {
        this.formulario.get(campo).markAsTouched();
      })
    }
  }

  loginFacebook() {
    this.authService
      .loginFacebook();
  }

  loginGoogle() {
    this.authService
      .loginGoogle();
  }

  loginGitHub() {
    this.authService
      .loginGitHub();
  }

  loginTwitter() {
    this.authService
      .loginTwitter();
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
