import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {


  constructor(
    private router : Router
  ) {}

  redirectTo(){
    this.router.navigate(['/']);
  }

}
