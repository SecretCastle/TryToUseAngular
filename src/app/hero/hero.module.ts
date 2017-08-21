import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { HeroRoutingModule } from './hero-routing.module'

@NgModule({
  imports: [
    CommonModule,
    HeroRoutingModule
  ],
  declarations: [
    HeroComponent
  ]
})
export class HeroModule { }
