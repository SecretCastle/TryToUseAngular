import {  Component, OnInit } from '@angular/core'
import { Hero } from '../public/hero'
import { HeroService } from '../services/hero.service'
import { Router } from '@angular/router'
import { Location } from '@angular/common'

@Component({
    selector:'my-heros',
    templateUrl:'./hero.component.html',
    styles:[
        `
        ul{
            margin:0;
            padding:0;
        }
        li{
            list-style:none;
        }
        li span{
            display:block;
            padding:5px 0;
        }
        li span:hover{
            color:#f00;
            cursor:pointer;
        }
        `
    ]
})

export class HeroComponent implements OnInit{
    title = 'Hello World'
    selectedHero : Hero 
    heros: Hero[]

    constructor(
        private heroService:HeroService,
        private route:Router,
        private location:Location
    ){}

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getHerosByPromise()
    }

    getHeros(){
        this.heros = this.heroService.getHero()
    }

    getHerosByPromise(){
        this.heroService.getHeroByPromise().then(res=>{
            if(res){
                this.heros = res
            }
        })
        
    }

    onSelected(hero:Hero) : void{
        console.log('selected',hero);
        this.route.navigate(['/detail',hero.id])
    }
}

