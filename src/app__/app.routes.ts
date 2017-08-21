import { RouterModule } from '@angular/router'
import { HeroComponent } from './hero/hero.component'
import { AppComponent } from './app.component'
import { DashBoardComponent } from './dash-board/dash-board.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'

export default  [
    {
        path:'hero',
        component:HeroComponent
    },
    {
        path:'dashboard',
        component:DashBoardComponent
    },
    {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
    },
    {
        path:'detail/:id',
        component:HeroDetailComponent
    }
]