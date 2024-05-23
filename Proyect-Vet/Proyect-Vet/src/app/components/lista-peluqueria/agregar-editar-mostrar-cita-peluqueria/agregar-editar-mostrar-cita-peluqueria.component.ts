import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { peluqueria } from '../../../interfaces/QueryListPelu';
import { PeluqueriaService } from '../../../services/peluqueria.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agregar-editar-mostrar-cita-peluqueria',
  templateUrl: './agregar-editar-mostrar-cita-peluqueria.component.html',
  styleUrls: ['./agregar-editar-mostrar-cita-peluqueria.component.css']
})
export class AgregarEditarMostrarCitaPeluqueriaComponent implements OnInit {
  form: FormGroup;
  Id: number;
  operacion: string = 'Ingrese ';
 

  constructor(private fb: FormBuilder,
              private _Querye: PeluqueriaService,
              private router: Router,
              private toastr: ToastrService,
              private aRouter: ActivatedRoute,
              private http: HttpClient) {
    this.form = this.fb.group({
      FechaEntrada: ['', Validators.required],
      Hora: ['', Validators.required],
      NombreAnimal: ['', Validators.required],
      NombreDueno: ['', Validators.required],
      Especie: ['', Validators.required],
      Raza: ['', Validators.required],
      Color: ['', Validators.required],
      Telefono: ['', Validators.required],
      PeluqueroResponsable: ['', Validators.required],
      Observaciones: ['', Validators.required],
      TipoBano: ['', Validators.required],
      Valor: ['', Validators.required],
      HoraSalida: ['', Validators.required],
    });
    this.Id = Number(this.aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.Id !== 0) {
      this.operacion = 'Edite ';
      this._Querye.getConsulta(this.Id).subscribe((data: peluqueria) => {
        this.form.patchValue(data);
      });
    }
  }

  addCita() {
    if (this.form.valid) {
      const listQuery: peluqueria = this.form.value;

      if (this.Id !== 0) {
        listQuery.ID = this.Id;
        this._Querye.updateConsulta(this.Id, listQuery).subscribe(() => {
          this.toastr.info(`La consulta de ${listQuery.NombreDueno} fue editada con éxito`, 'Consulta Editada');
          this.router.navigate(['/ListaPeluqueria']);
        });
      } else {
        this._Querye.saveConsulta(listQuery).subscribe(() => {
          this.toastr.success(`La consulta de ${listQuery.NombreDueno} fue registrada con éxito`, 'Consulta Registrada');
          this.router.navigate(['/ListaPeluqueria']);
        });
      }
    } else {
      this.toastr.error('Por favor complete todos los campos requeridos', 'Formulario Incompleto');
    }
  }


  envioCorreo() {
    const nombre = this.form.value.NombreDueno;
    const fecha = this.form.value.FechaEntrada;

    const mensaje = `Este es un mensaje de confirmación para ${nombre} para el día ${fecha}.`;

    const params = {
      email: this.form.value.Correo,
      mensaje: mensaje,
      nombre: nombre, 
      fecha: fecha 
    };

    console.log(params);
    this.http.post('http://localhost:3000/envio', params).subscribe((resp: any) => {
      console.log(resp);
    });
  }
}
