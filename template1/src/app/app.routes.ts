import { Routes } from '@angular/router';
import { AboutSectionOneComponent } from './Pages/about-section-one/about-section-one.component';
import { FaqOneComponent } from './Pages/faq-one/faq-one.component';
import { TermsAndCondationsComponent } from './Pages/terms-and-condations/terms-and-condations.component';



import { DonationHolderComponent } from './Pages/donation-holder/donation-holder.component';
import { DonationDetailsComponent } from './Pages/donation-details/donation-details.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { DocumentPageComponent } from './Pages/document-page/document-page.component';
import { ContactUsOneComponent } from './Pages/contact-us-one/contact-us-one.component';
import { GalleryOneComponent } from './Pages/gallery-one/gallery-one.component';
import { LandingPageOneComponent } from './Pages/landing-page-one/landing-page-one.component';


export const routes: Routes = [
    //en routes
    {path: '', component: LandingPageOneComponent},
    {path:'about', component:AboutSectionOneComponent },
    {path:'FAQ',component: FaqOneComponent},
    {path:'Terms',component:TermsAndCondationsComponent},
    {path:'charities',component:DonationHolderComponent},
    {path:'donate/:id',component:DonationDetailsComponent},
    {path:'contact-us',component:ContactUsOneComponent},
    {path:'Gallery',component:GalleryOneComponent},
    {path:'Docs',component:DocumentPageComponent},
    //ar routes
    {path: 'ar', component: LandingPageOneComponent},
    {path:'ar/about', component:AboutSectionOneComponent },
    {path:'ar/FAQ',component: FaqOneComponent},
    {path:'ar/Terms',component:TermsAndCondationsComponent},
    {path:'ar/charities',component:DonationHolderComponent},
    {path:'ar/donate/:id',component:DonationDetailsComponent},
    {path:'ar/contact-us',component:ContactUsOneComponent},
    {path:'ar/Gallery',component:GalleryOneComponent},
    {path:'ar/Docs',component:DocumentPageComponent},
    //404
    {path: 'ar/**', component:NotFoundPageComponent},
    {path: '**', component:NotFoundPageComponent},

];
