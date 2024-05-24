import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { LoginPageComponent } from './modules/auth/login-page/login-page.component';
import { RegisterPageComponent } from './modules/auth/register-page/register-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Attendy';
  showSidebar!: boolean;

  constructor(private authService: AuthService){}

  toggleSidebar(component: Component){
    if(component instanceof LoginPageComponent || component instanceof RegisterPageComponent
      
    ){
      this.showSidebar = false;
    }else{
      this.showSidebar = true;
    }
  }
}
