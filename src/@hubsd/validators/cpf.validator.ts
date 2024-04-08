import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CpfValidator {
  static valid(): ValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) {
        return null;
      }

      const cpf = control.value.replace(/[^\d]+/g, '');

      if (cpf.length !== 11 || CpfValidator.validCpf(control.value)) {
        control.setErrors({ invalidCpf: false });
        return null;
      }

      control.setErrors({ invalidCpf: true });

      return {
        invalidCpf: true,
        message: 'O CPF é inválido.',
      };
    };
  }
  static validCpf(cpf: string): boolean {
    let sum = 0;
    let remainder: number;

    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(9, 10))) {
      return false;
    }

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    return remainder === parseInt(cpf.substring(10, 11));
  }
}
