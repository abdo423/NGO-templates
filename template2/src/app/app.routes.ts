import { Routes } from '@angular/router';
import { LandingPageTwoComponent } from './Pages/LandingPages/landing-page-two/landing-page-two.component';
import { AboutSectionTwoComponent } from './Pages/abouts/about-section-two/about-section-two.component';
import { FaqContentTwoComponent } from './Pages/Faqs/faqContent/faq-content-two/faq-content-two.component';
import { TermsAndCondationsComponent } from './Pages/terms-and-condations/terms-and-condations.component';
import { DonationCardHolderTwoComponent } from './Pages/Donation/Donation-2/donation-card-holder-two/donation-card-holder-two.component';
import { DonationDetailsTwoComponent } from './Pages/DonationDetails/donation-details-two/donation-details-two.component';
import { ContactUsTwoComponent } from './Pages/ContactUs/contact-us-two/contact-us-two.component';
import { GalleryTwoComponent } from './Pages/Gallery/gallery-two/gallery-two.component';
import { FaqTwoComponent } from './Pages/Faqs/faq-two/faq-two.component';


export const routes: Routes = [
    {path: '', component: LandingPageTwoComponent},
    {path:'about', component:AboutSectionTwoComponent },
    {path:'FAQ',component: FaqTwoComponent},
    {path:'Terms',component:TermsAndCondationsComponent},
    {path:'charities',component:DonationCardHolderTwoComponent},
    {path:'donate/:id',component:DonationDetailsTwoComponent},
    {path:'contact-us',component:ContactUsTwoComponent},
    {path:'Gallery',component:GalleryTwoComponent}
];
