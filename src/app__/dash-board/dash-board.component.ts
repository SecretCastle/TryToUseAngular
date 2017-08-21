import { Component, OnInit } from '@angular/core'
import { Hero } from '../public/hero'
import { HeroService } from '../services/hero.service'
 


@Component({
  selector: 'dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  herso : Hero[] = []

  constructor(
    private heroService : HeroService,
    
  ) { }

  ngOnInit() {
    this.getHerosByTopFour()

  }

  getHerosByTopFour(){
    this.heroService.getHeroByPromise().then(res=>{
      this.herso = res.slice(0,3)
    })
  }
}
