import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { OurGalleryComponent } from './layouts/our-gallery/our-gallery.component';
import { DigitalMarketingServicesComponent } from './layouts/our-services/digital-marketing-services/digital-marketing-services.component';
import { EventManagementServicesComponent } from './layouts/our-services/event-management-services/event-management-services.component';
import { GraphicDesignServicesComponent } from './layouts/our-services/graphic-design-services/graphic-design-services.component';
import { MediaServicesComponent } from './layouts/our-services/media-services/media-services.component';
import { OurServicesComponent } from './layouts/our-services/our-services/our-services.component';
import { StartUpServicesComponent } from './layouts/our-services/start-up-services/start-up-services.component';
import { WebsiteServicesComponent } from './layouts/our-services/website-services/website-services.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', },
  { path: 'home', component: HomeComponent },
  { path: 'our-gallery', component: OurGalleryComponent },
  { path: 'our-services', component: OurServicesComponent },
  { path: 'our-media', component: MediaServicesComponent },
  { path: 'our-event-management', component: EventManagementServicesComponent },
  { path: 'our-website', component: WebsiteServicesComponent },
  { path: 'our-digital-marketing', component: DigitalMarketingServicesComponent },
  { path: 'our-graphic-design', component: GraphicDesignServicesComponent },
  { path: 'our-start-up', component: StartUpServicesComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes , { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
