import { Routes } from '@angular/router';

import { AboutUsSectionThreeComponent } from './Pages/about-section-three/about-section-three.component';
import { TermsAndCondationsComponent } from './Pages/terms-and-condations/terms-and-condations.component';
import { ContactUsThreeComponent } from './Pages/ContactUs/contact-us-three/contact-us-three.component';
import { GalleryThreeComponent } from './Pages/gallery-three/gallery-three.component';
import { FaqComponent } from './Pages/faqPage/faq/faq.component';
import { CatalogComponent } from './Pages/catalog/catalog.component';
import { ProductComponent } from './Pages/product/product.component';
import { DocumentPageComponent } from './Pages/document-page/document-page.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { LandingPageThreeComponent } from './Pages/landing-page-three/landing-page-three.component';


export const routes: Routes = [
    {path: '', component: LandingPageThreeComponent},
    {path:'about', component:AboutUsSectionThreeComponent },
    {path:'FAQ',component: FaqComponent},
    {path:'Terms',component:TermsAndCondationsComponent},
     {path:'charities',component:CatalogComponent},
    {path:'donate/:id',component:ProductComponent},
    {path:'contact-us',component:ContactUsThreeComponent},
    {path:'Gallery',component:GalleryThreeComponent},
    {path: 'Docs',component: DocumentPageComponent},
    {path: '**', component:NotFoundPageComponent},
];
