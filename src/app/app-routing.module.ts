import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';


const routes: Routes = [
  // { path: '', loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule) },
  { path: '',redirectTo: 'home', pathMatch: 'full' , },
  { path: 'home', component: HomeComponent }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
