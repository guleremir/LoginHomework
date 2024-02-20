import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  login() {
    this.loginService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log(response);
        if (response.success) {
          this.router.navigate(['/calculator']);
        } else {
          this.router.navigate(['/error']);
        }
      }
    })
  }

}
