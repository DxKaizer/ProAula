import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { error } from 'console';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit{
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  constructor(
    private toastr: ToastrService,
    private _userServices: UserService,
    private router: Router,
    private _errorService: ErrorService
    
  ) { 

  }
  
  ngOnInit(): void {
      
  }

  addUser() {
    // Validamos que el usuario ingrese valores
    if (this.username == '' || this.password == '' || this.confirmPassword == '') {
      this.toastr.error('debe completar los campos', 'Error!');
      return;
    }


    //validamos que los passwords sean iguales
    if (this.password != this.confirmPassword) {
      this.toastr.error('Las passwords no ingresadas son distintas', 'Error!');
      return;
    }

    //Creamos el Objeto

    const user: User = {
      username: this.username,
      password: this.password
    }

    this.loading = true;
    this._userServices.signIn(user).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(`El usuario ${this.username} fue registrado con exito`, 'Usuario registrado');
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })
  }

}
