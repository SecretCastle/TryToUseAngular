import { Component , OnInit } from '@angular/core'

@Component({
    selector:'my-app',
    template:`
        <a routerLink = "/dashboard">DashBoard</a>
        <a routerLink = "/hero">点我有惊喜</a>
        <router-outlet></router-outlet>
    `
})

export class AppComponent {}