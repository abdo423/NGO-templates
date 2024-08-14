import { Routes } from '@angular/router';
import { LandingPageTwoComponent } from './Pages/landing-page-two/landing-page-two.component';
import { AboutSectionTwoComponent } from './Pages/about-section-two/about-section-two.component';
import { FaqContentTwoComponent } from './Pages/faq-two/faq-content-two/faq-content-two.component';
import { TermsAndCondationsComponent } from './Pages/terms-and-condations/terms-and-condations.component';
import { DonationCardHolderTwoComponent } from './Pages/donation-card-holder-two/donation-card-holder-two.component';
import { DonationDetailsTwoComponent } from './Pages/donation-details-two/donation-details-two.component';
import { ContactUsTwoComponent } from './Pages/contact-us-two/contact-us-two.component';
import { GalleryTwoComponent } from './Pages/gallery-two/gallery-two.component';
import { FaqTwoComponent } from './Pages/faq-two/faq-two.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { DocumentPageComponent } from './Pages/document-page/document-page.component';


export const routes: Routes = [
    {path: '', component: LandingPageTwoComponent},
    {path:'about', component:AboutSectionTwoComponent },
    {path:'FAQ',component: FaqTwoComponent},
    {path:'Terms',component:TermsAndCondationsComponent},
    {path:'charities',component:DonationCardHolderTwoComponent},
    {path:'donate/:id',component:DonationDetailsTwoComponent},
    {path:'contact-us',component:ContactUsTwoComponent},
    {path:'Gallery',component:GalleryTwoComponent},
    {path:'Docs',component:DocumentPageComponent},
    {path:'**',component:NotFoundPageComponent}
];
