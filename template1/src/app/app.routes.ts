import { Routes } from '@angular/router';
import { LandingPageOneComponent } from './Pages/LandingPages/landing-page-one/landing-page-one.component';
import { AboutSectionOneComponent } from './Pages/abouts/about-section-one/about-section-one.component';
import { FaqOneComponent } from './Pages/Faqs/faq-one/faq-one.component';
import { TermsAndCondationsComponent } from './Pages/terms-and-condations/terms-and-condations.component';

import { ContactUsOneComponent } from './Pages/ContactUs/contact-us-one/contact-us-one.component';
import { GalleryOneComponent } from './Pages/Gallery/gallery-one/gallery-one.component';
import { DonationHolderComponent } from './Pages/Donation/donation-holder/donation-holder.component';
import { DonationDetailsComponent } from './Pages/donation-details/donation-details.component';


export const routes: Routes = [
    {path: '', component: LandingPageOneComponent},
    {path:'about', component:AboutSectionOneComponent },
    {path:'FAQ',component: FaqOneComponent},
    {path:'Terms',component:TermsAndCondationsComponent},
    {path:'charities',component:DonationHolderComponent},
    {path:'donate/:id',component:DonationDetailsComponent},
    {path:'contact-us',component:ContactUsOneComponent},
    {path:'Gallery',component:GalleryOneComponent}
];
