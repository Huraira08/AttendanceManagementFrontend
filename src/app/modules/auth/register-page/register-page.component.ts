import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.registerForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [false],
    })
  }

  register(){
    console.log(this.registerForm.value);
  }
}
