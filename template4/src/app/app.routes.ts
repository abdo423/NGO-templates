import { Routes } from '@angular/router';
import { LandingPageComponent } from './Pages/LandingPages/landing-page/landing-page.component';
import { ContactUsPageComponent } from './Pages/ContactUs/contact-us-page/contact-us-page.component';
import { CatalogComponent } from './Pages/CatalogPage/catalog/catalog.component';
import { ProductComponent } from './Pages/ProductPage/product/product.component';
import { FaqComponent } from './Pages/faqPage/faq/faq.component';
import { TermsAndCondationsComponent } from './Pages/terms-and-condations/terms-and-condations.component';
import { AboutPageComponent } from './Pages/abouts/about-page/about-page.component';
import { GalleryPageComponent } from './Pages/Gallery/gallery-page/gallery-page.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { DocumentPageComponent } from './Pages/Document/document-page/document-page.component';



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
     { path: '**', component: NotFoundPageComponent }
];
