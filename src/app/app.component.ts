import { Component } from '@angular/core';
import { AsgardeoAuthService, Hooks } from '@asgardeo/auth-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'asgardeo-angular-sample-app';
  isAuthenticated = false;

  public constructor(private auth: AsgardeoAuthService) {
    auth.on(Hooks.SignIn, () => {
      this.isAuthenticated = true;
    });
   }

  public login() {
    this.auth.signIn();
  }
}
