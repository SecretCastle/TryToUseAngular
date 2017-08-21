import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule  ,Routes } from '@angular/router'
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title/title.component';

//demo module

import { UserService } from './servie/user/user.service';
import { ContactModule } from './contact/contact.module'

import { AppRoutingModule } from './app-routing.module'

@NgModule({
    declarations: [
        AppComponent,
        HighlightDirective,
        TitleComponent,
    ],
    imports: [ 
        ContactModule,
        CommonModule,
        BrowserModule ,
        AppRoutingModule
    ],
    providers: [
        UserService
    ],
    bootstrap:[
        AppComponent
    ]
})
export class AppModule {}