import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.loginForm = this.formBuilder.group({
      role: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [false],
    })
  }

  login(){
    console.log(this.loginForm.value);
  }
}
