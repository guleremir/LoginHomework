import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {


  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/'])
  }


}
