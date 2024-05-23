import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { querylistEs } from '../../../interfaces/QueryListEs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConsultasEsService } from '../../../services/consultas-es.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agregar-editar-mostrar-cita-consulta-es',
  templateUrl: './agregar-editar-mostrar-cita-consulta-es.component.html',
  styleUrl: './agregar-editar-mostrar-cita-consulta-es.component.css'
})
export class AgregarEditarMostrarCitaConsultaEsComponent {

  form: FormGroup;
  Id: number;
  operacion: string = 'Ingrese ';


  constructor(private fb: FormBuilder,
    private _Querye: ConsultasEsService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute,
    private http: HttpClient ) {
      this.form = this.fb.group({
        MedicoResponsable: ['', Validators.required],
        Fecha: ['', Validators.required],
        NombrePropietario: ['', Validators.required],
        Direccion: ['', Validators.required],
        Telefono: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
        Correo: ['', [Validators.required, Validators.email]],
        NombreMascota: ['', Validators.required],
        FechaNacimiento: ['', Validators.required],
        FechaIngresoMascota: ['', Validators.required],
        Hora: ['', Validators.required],
        Vacunas: [''],
        MotivoPresentacion: [''],
        MotivoConsulta: [''],
        InformacionImportanteMascota: ['']
      });
      this.Id = Number(aRouter.snapshot.paramMap.get('id'));
    }



  ngOnInit(): void {
    if (this.Id !== 0) {
      this.operacion = 'Edite ';
      this._Querye.getConsulta(this.Id).subscribe((data: querylistEs) => {
        this.form.patchValue(data);
      });
    }
  }

  addCita() {
    const listQueryEs: querylistEs = this.form.value;

    if (this.Id !== 0) {
      listQueryEs.ID = this.Id;
      this._Querye.updateConsulta(this.Id, listQueryEs).subscribe(() => {
        this.toastr.info(`La consulta de ${listQueryEs.NombrePropietario} fue editada con éxito`, 'Consulta Editada');
        this.router.navigate(['/ListaConsultaEs']);
      });
    } else {
      this._Querye.saveConsulta(listQueryEs).subscribe(() => {
        this.toastr.success(`La consulta de ${listQueryEs.NombrePropietario} fue registrada con éxito`, 'Consulta Registrada');
        this.router.navigate(['/ListaConsultaEs']);
      });
    }
  }

  envioCorreo() {
    const nombre = this.form.value.NombrePropietario;
    const fecha = this.form.value.Fecha;

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
