import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ConsultaCepService {
  constructor(private http: Http) {
  }

  consultaCEP(cep) {
    cep = cep.replace(/\D/g, '');

    if (cep) {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        return this.http
          .get(`//viacep.com.br/ws/${cep}/json`)
      }
    }
  }
}
