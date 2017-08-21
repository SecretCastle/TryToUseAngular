import { Injectable } from '@angular/core'
import { HEROS } from './mock-hero'
import { Hero } from '../public/hero'

@Injectable()
export class HeroService {
    getHero(): Hero[]{
        return HEROS
    }

    getHeroByPromise() : Promise<Hero[]> {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(HEROS)
            },0)
        })
    }

    getHeroById(id:number):Promise<Hero>{
        return  this.getHeroByPromise()
                .then(heroes => heroes.find(hero => hero.id === id));
    }
}