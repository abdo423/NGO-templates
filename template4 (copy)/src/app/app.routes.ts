import { Routes } from '@angular/router';
import { ContactUsPageComponent } from './Pages/contact-us-page/contact-us-page.component';

import { ProductComponent } from './Pages/product/product.component';
import { FaqComponent } from './Pages/faq/faq.component';

import { GalleryPageComponent } from './Pages/gallery-page/gallery-page.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { CatalogComponent } from './Pages/catalog/catalog.component';

import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { TermsAndCondationsComponent } from './Pages/terms-and-condations /terms-and-condations.component';
import { DocumentPageComponent } from './Pages/document-page /document-page.component';



export const routes: Routes = [
    {path: '', component: LandingPageComponent},
     {path:'about', component:AboutPageComponent },
    {path:'FAQ',component: FaqComponent},
    {path:'Terms',component:TermsAndCondationsComponent},
     {path:'charities',component:CatalogComponent},
    {path:'donate/:id',component:ProductComponent},
     {path:'contact-us',component:ContactUsPageComponent},
     {path:'Gallery',component:GalleryPageComponent},
     {path:'Doc',component:DocumentPageComponent},
     //ar
     {path: 'ar', component: LandingPageComponent},
     {path:'ar/about', component:AboutPageComponent },
     {path:'ar/FAQ',component: FaqComponent},
     {path:'ar/Terms',component:TermsAndCondationsComponent},
     {path:'ar/charities',component:CatalogComponent},
     {path:'ar/donate/:id',component:ProductComponent},
     {path:'ar/contact-us',component:ContactUsPageComponent},
     {path:'ar/Gallery',component:GalleryPageComponent},
     {path:'ar/Doc',component:DocumentPageComponent},
     //404
     { path: '**', component: NotFoundPageComponent },
     { path: '**', component: NotFoundPageComponent }
];
