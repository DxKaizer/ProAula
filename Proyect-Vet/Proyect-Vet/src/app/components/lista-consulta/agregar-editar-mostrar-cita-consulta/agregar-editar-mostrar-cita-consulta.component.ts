import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuerylistService } from '../../../services/Consultas.Service';
import { querylist } from '../../../interfaces/Querylist';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient

@Component({
  selector: 'app-agregar-editar-mostrar-cita-consulta',
  templateUrl: './agregar-editar-mostrar-cita-consulta.component.html',
  styleUrls: ['./agregar-editar-mostrar-cita-consulta.component.css']
})
export class AgregarEditarMostrarCitaConsultaComponent implements OnInit {
  form: FormGroup;
  Id: number;
  operacion: string = 'Ingrese ';

  constructor(
    private fb: FormBuilder,
    private _Querye: QuerylistService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute,
    private http: HttpClient // Inyecta HttpClient
  ) {
    this.form = this.fb.group({
      Nombre: ['', Validators.required],
      Especie: ['', Validators.required],
      Sexo: ['', Validators.required],
      Raza: ['', Validators.required],
      FechaNacimiento: ['', Validators.required],
      Edad: ['', Validators.required],
      Propietario: ['', Validators.required],
      Cedula: ['', Validators.required],
      Celular: ['', Validators.required],
      Direccion: ['', Validators.required],
      Correo: ['', Validators.required],
      ValorConsulta: ['', Validators.required],
      FechaCita: ['', Validators.required],
      HoraCita: ['', Validators.required]
    });
    this.Id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.Id !== 0) {
      this.operacion = 'Edite ';
      this._Querye.getConsulta(this.Id).subscribe((data: querylist) => {
        this.form.patchValue(data);
      });
    }
  }

  addCita() {
    const listQuery: querylist = this.form.value;

    if (this.Id !== 0) {
      listQuery.ID = this.Id;
      this._Querye.updateConsulta(this.Id, listQuery).subscribe(() => {
        this.toastr.info(`La consulta de ${listQuery.Nombre} fue editada con éxito`, 'Consulta Editada');
        this.router.navigate(['/ListaConsulta']);
      });
    } else {
      this._Querye.saveConsulta(listQuery).subscribe(() => {
        this.toastr.success(`La consulta de ${listQuery.Nombre} fue registrada con éxito`, 'Consulta Registrada');
        this.router.navigate(['/ListaConsulta']);
      });
    }
  }

  envioCorreo() {
    const nombre = this.form.value.Propietario;
    const fecha = this.form.value.FechaCita;

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
