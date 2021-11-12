import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsgardeoAuthModule } from '@asgardeo/auth-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AsgardeoAuthModule.forRoot({
      signInRedirectURL: 'http://localhost:4200/',
      signOutRedirectURL: 'http://localhost:4200/',
      clientID: '<client-id>>',
      serverOrigin: 'https://api.asgardeo.io/t/<tenant>',
      scope: ['openid', 'profile'],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
