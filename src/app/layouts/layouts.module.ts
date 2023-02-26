import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { IconsModule } from '../shared/icons/icons.module';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ClientComponent } from './client/client.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
// Add these two
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
// Export this function
export function playerFactory(): any {  
  return import('lottie-web');
}
@NgModule({
  declarations: [
    HeroComponent,
    AboutComponent,
    HomeComponent,
    ServicesComponent,
    ReviewsComponent,
    ClientComponent,
    MarketingComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    IconsModule,
    CarouselModule,
    LottieModule.forRoot({ player: playerFactory })
  ]
})
export class LayoutsModule { }
