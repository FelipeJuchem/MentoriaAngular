import { AbstractControl } from '@angular/forms';

export function CpfValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  const invalid = { cpf: true };
  const cpf = control.value.replace();

  if (cpf == null) {
    return invalid;
  }
  if (cpf.length != 11) {
      return invalid;
  }
  if ((cpf == '00000000000') ||
      (cpf == '11111111111') ||
      (cpf == '22222222222') ||
      (cpf == '33333333333') ||
      (cpf == '44444444444') ||
      (cpf == '55555555555') ||
      (cpf == '66666666666') ||
      (cpf == '77777777777') ||
      (cpf == '88888888888') ||
      (cpf == '99999999999')) {
      return invalid;
  }
  let numero: number = 0;
  let caracter: string = '';
  let numeros: string = '0123456789';
  let j: number = 10;
  let somatorio: number = 0;
  let resto: number = 0;
  let digito1: number = 0;
  let digito2: number = 0;
  let cpfAux: string = '';
  cpfAux = cpf.substring(0, 9);
  for (let i: number = 0; i < 9; i++) {
    caracter = cpfAux.charAt(i);
    if (numeros.search(caracter) == -1) {
        return invalid;
    }
    numero = Number(caracter);
    somatorio = somatorio + (numero * j);
    j--;
  }
  resto = somatorio % 11;
  digito1 = 11 - resto;
  if (digito1 > 9) {
      digito1 = 0;
  }
  j = 11;
  somatorio = 0;
  cpfAux = cpfAux + digito1;
  for (let i: number = 0; i < 10; i++) {
      caracter = cpfAux.charAt(i);
      numero = Number(caracter);
      somatorio = somatorio + (numero * j);
      j--;
  }
  resto = somatorio % 11;
  digito2 = 11 - resto;
  if (digito2 > 9) {
      digito2 = 0;
  }
  cpfAux = cpfAux + digito2;
  if (cpf != cpfAux) {
      return invalid;
  }

  return null;

}
