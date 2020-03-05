import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {
  usuario: any = {
    nombrecompleto: {nombre: 'fernando', apellido: 'herrera'},
    correo: 'fernando.herrera85@gmail.com',
    pasatiempos: ['correr', 'dormir', 'comer']
  };

  forma: FormGroup;

  constructor() {
    console.log(this.usuario);

    this.forma = new FormGroup({
      nombrecompleto: new FormGroup({
        nombre: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: new FormControl('', [Validators.required, this.noHerrera])
      }),
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
      ]),
      pasatiempos: new FormArray([
        new FormControl('correr', Validators.required)
      ]),
      password1: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required)
    });

    // this.forma.setValue(this.usuario);
    this.forma.controls['password2'].setValidators([Validators.required, this.noIgual]);

  }

  guardarCambios() {
    console.log(this.forma);
    this.forma.reset({
      nombrecompleto: {
        nombre: '',
        apellido: ''
      },
      correo: ''
    });
  }

  agregarPasatiempo() {
    (this.forma.controls.pasatiempos as FormArray).push(
      new FormControl('dormir', Validators.required)
    );
  }

  noHerrera(control?: FormControl): { [s: string]: boolean } {
    if (control.value === 'herrera') {
      return {
        noherrera: true
      };
    }

    return null;
  }

  noIgual(control?: FormControl): { [s: string]: boolean } {
    if (control.value !== this.forma.controls['password1'].value) {
      return {
        noherrera: true
      };
    }

    return null;
  }

}
