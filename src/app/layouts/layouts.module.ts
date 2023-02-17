import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { IconsModule } from '../shared/icons/icons.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HeroComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    IconsModule,
  ]
})
export class LayoutsModule { }
