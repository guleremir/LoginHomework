import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogin = false;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  login(email: string, password: string): Observable<any> {
    let reverseStr = '';
    for (let i = 0; i < password.length; i++) {
      reverseStr = password.charAt(i) + reverseStr;
    }
    if (email === reverseStr && email != "") {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      return of({ success: true, message: 'Giriş başarılı', token: 'mockToken' });
    } else {
      return of({ success: false, message: 'Hata', token: null });
    }
  }

  logout(){
    localStorage.clear();
  }

}