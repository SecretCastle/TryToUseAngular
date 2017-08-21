import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector:'my-app',
    template:`
        <div>
            <app-title [subTitle]="subtitle"></app-title>
            <div>Lazy Load</div>
            <nav>
                <a routerLink="contact" routerLinkActive="active">contact</a>
                <a routerLink="hero" routerLinkActive="active">hero</a>
                <a routerLink="list" routerLinkActive="active">list</a>
            </nav>
            <router-outlet></router-outlet>
        </div>
    `
})

export class AppComponent implements OnInit {
    title = "Hello World"
    subtitle = "HAHA"
    constructor(){ }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }
}