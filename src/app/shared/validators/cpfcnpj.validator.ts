import {AbstractControl} from '@angular/forms';

export function ValidateCPFCNPJ(control: AbstractControl) {
  const unmaskNumbers = num => {
    num = num.match(/\d+/g);
    if (num) return num.join('');
    return '';
  };

  if (!control.value) {
    return null;
  }

  const cpfCnpj = unmaskNumbers(control.value);

  const isValidDigit = (d1, d2, index) =>
    String(d1[index]) === String(d2[index]);

  const getS = (numCnpj) => numCnpj.length - 2;

  const getR = (t) =>
    ( t < 2 )
      ? 0
      : 11 - t;

  const getP = (p) =>
    ( p < 2 )
      ? 9
      : p;

  const getData = (numCnpj, s) => [
    numCnpj.substr(0, s), 0, s - 7
  ];

  const getSomeData = (t, b, s, p, i) => [
    t + ( b.charAt(s - i) * p ), getP(--p)
  ];

  const getValidationDigit = (numCnpj) => [
    getDigit(numCnpj), getDigit(numCnpj, true)
  ];

  const getDigit = (numCnpj, second = false) => {

    let s = ( !second ) ? getS(numCnpj) : getS(numCnpj) + 1;
    let [b, t, p] = getData(numCnpj, s);

    for (let i = s; i > 0; i--) {
      [t, p] = getSomeData(t, b, s, p, i);
    }

    return getR(t % 11)
  };

  const isInvalidCNPJ = (numCnpj) =>
    ( numCnpj.length !== 14 || isRepeatingChars(numCnpj) );

  const validateCnpj = (DV, digits = []) =>
    ( digits.length === 2 ) &&
    ( isValidDigit(digits, DV, 0) &&
      isValidDigit(digits, DV, 1) );

  const isValidCNPJ = (numCnpj) =>
    validateCnpj(numCnpj.substr(getS(numCnpj)), getValidationDigit(numCnpj));


  const validateCNPJ = (numCnpj) => NOT(isInvalidCNPJ(numCnpj)) &&
    isValidCNPJ(numCnpj);


  const mod11 = (num) => num % 11;
  const NOT = (x) => !x;
  const isEqual = (a) => (b) => b === a;
  const mergeDigits = (num1, num2) => `${num1}${num2}`;
  const getTwoLastDigits = (cpf) => `${cpf[9]}${cpf[10]}`;
  const getCpfNumeral = (cpf) => cpf.substr(0, 9).split('');

  const isRepeatingChars = (str) =>
    str.split('').every((elem) => elem === str[0]);

  const toSumOfProducts = (multiplier) => (result, num, i) =>
    result + ( num * multiplier-- );

  const getSumOfProducts = (list, multiplier) =>
    list.reduce(toSumOfProducts(multiplier), 0);

  const getValidationDigitCPF = (multiplier) => (cpf) =>
    getDigitCPF(mod11(getSumOfProducts(cpf, multiplier)));

  const getDigitCPF = (num) =>
    ( num > 1 )
      ? 11 - num
      : 0;

  const isRepeatingNumbersCpf = isRepeatingChars;

  const isValidCPF = (cpf) => {
    const CPF = getCpfNumeral(cpf);
    const firstDigit = getValidationDigitCPF(10)(CPF);
    const secondDigit = getValidationDigitCPF(11)(CPF.concat(firstDigit));

    return isEqual(getTwoLastDigits(cpf))
    (mergeDigits(firstDigit, secondDigit))
  };

  const validateCPF = (CPF) => NOT(isRepeatingNumbersCpf(CPF)) && isValidCPF(CPF);


  if (cpfCnpj.length === 11 && validateCPF(cpfCnpj)) {
    return null;
  }

  if (cpfCnpj.length === 14 && validateCNPJ(cpfCnpj)) {
    return null;
  }

  return {cpf: true};
}
