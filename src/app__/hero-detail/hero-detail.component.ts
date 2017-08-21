import { Component, OnInit , Input } from '@angular/core';
import { Hero } from '../public/hero'
import { ActivatedRoute , ParamMap } from '@angular/router' 
import { Location } from '@angular/common'
import { HeroService } from '../services/hero.service'
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero : Hero
  constructor(
    private route: ActivatedRoute,
    private location:Location,
    private heroService : HeroService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHeroById(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  goBack(){
      this.location.back()
  }
}
