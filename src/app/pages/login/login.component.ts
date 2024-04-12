import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() userName: string;

  constructor(private router: Router){
    
  }

  login(){
    sessionStorage.setItem('Usuario',this.userName);
    this.router.navigate(['/home']);
  }
}
