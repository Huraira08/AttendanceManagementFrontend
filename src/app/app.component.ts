import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { LoginPageComponent } from './modules/auth/login-page/login-page.component';
import { RegisterPageComponent } from './modules/auth/register-page/register-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Attendy';
  showSidebar!: boolean;

  constructor(public authService: AuthService,
    private router: Router
  ){}

  toggleSidebar(component: Component){
    if(component instanceof LoginPageComponent || component instanceof RegisterPageComponent
      || !this.authService.isAdmin()
    ){
      this.showSidebar = false;
    }else{
      this.showSidebar = true;
    }
  }

  logout(){
    this.router.navigate(['/auth/login'])
  }
}
