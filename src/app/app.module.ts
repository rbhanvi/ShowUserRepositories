import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

import { RepoService } from './services/repo.service'

import { AppComponent } from './app.component';
import { UserreposComponent } from './components/userrepos/userrepos.component';

@NgModule({
  declarations: [
    AppComponent,
    UserreposComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
    
  ],
  providers: [RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
