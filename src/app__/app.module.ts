import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import {RouterModule} from '@angular/router'
import { HttpModule } from '@angular/http'

//components
import { AppComponent } from './app.component'
import { HeroComponent } from './hero/hero.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { DashBoardComponent } from './dash-board/dash-board.component'

//services
import { HeroService } from './services/hero.service'

//router
import Router from './app.routes'

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(Router),
        HttpModule
    ],

    bootstrap:[
        AppComponent
    ],
    declarations:[
        AppComponent,
        HeroComponent,
        HeroDetailComponent,
        DashBoardComponent
    ],
    providers:[
        HeroService
    ]
})

export class AppModule {}