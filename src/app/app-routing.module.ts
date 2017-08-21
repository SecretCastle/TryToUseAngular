import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule ,PreloadAllModules } from '@angular/router'

export const routes: Routes = [
    { path: '', redirectTo: 'contact', pathMatch: 'full'},
    { path: 'hero', loadChildren: 'app/hero/hero.module#HeroModule' },
    { path: 'list', loadChildren: 'app/list/list.module#ListModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {}