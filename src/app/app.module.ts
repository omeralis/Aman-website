import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './shared/component/menu/menu.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeroComponent } from './layouts/hero/hero.component';
import { AboutComponent } from './layouts/about/about.component';
import { HomeComponent } from './layouts/home/home.component';
import { ServicesComponent } from './layouts/services/services.component';
import { ReviewsComponent } from './layouts/reviews/reviews.component';
import { ClientComponent } from './layouts/client/client.component';
import { MarketingComponent } from './layouts/marketing/marketing.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { IconsModule } from './shared/icons/icons.module';
import { NgParticlesModule } from 'ng-particles';
import { OurGalleryComponent } from './layouts/our-gallery/our-gallery.component';
import { OurServicesComponent } from './layouts/our-services/our-services/our-services.component';
import { MediaServicesComponent } from './layouts/our-services/media-services/media-services.component';
import { EventManagementServicesComponent } from './layouts/our-services/event-management-services/event-management-services.component';
import { WebsiteServicesComponent } from './layouts/our-services/website-services/website-services.component';
import { DigitalMarketingServicesComponent } from './layouts/our-services/digital-marketing-services/digital-marketing-services.component';
import { GraphicDesignServicesComponent } from './layouts/our-services/graphic-design-services/graphic-design-services.component';
import { StartUpServicesComponent } from './layouts/our-services/start-up-services/start-up-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HeroComponent,
    AboutComponent,
    HomeComponent,
    ServicesComponent,
    ReviewsComponent,
    ClientComponent,
    MarketingComponent,
    ContactComponent,
    OurGalleryComponent,
    OurServicesComponent,
    MediaServicesComponent,
    EventManagementServicesComponent,
    WebsiteServicesComponent,
    DigitalMarketingServicesComponent,
    GraphicDesignServicesComponent,
    StartUpServicesComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModalModule,
    CarouselModule,
    IconsModule,
    NgParticlesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}