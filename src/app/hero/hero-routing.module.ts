import { NgModule }            from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';

import {HeroComponent} from './hero.component'

const routes: Routes = [

  { path: 'Hero',    component: HeroComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule {}