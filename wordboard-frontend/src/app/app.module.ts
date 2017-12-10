import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from './/app-routing.module';
import { PostService } from './post.service';
import { MainComponent } from './main/main.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SocialLoginModule, AuthServiceConfig } from 'angular4-social-login';
import { FacebookLoginProvider } from 'angular4-social-login';
import { MarkdownModule } from 'angular2-markdown';

let config = new AuthServiceConfig([
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider("877555685738925")
    }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    PostComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    NgbModule.forRoot(),
    MarkdownModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    SocialLoginModule.initialize(config)
  ],
  providers: [PostService, {provide: AuthServiceConfig, useFactory: provideConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
