import { Routes } from '@angular/router';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { AboutComponent } from './Pages/about/about.component';
import { TermsAndCondationsComponent } from './Pages/terms-and-condations/terms-and-condations.component';
import { catalogComponent } from './Pages/Catalog/catalog.component';
import { productComponent } from './Pages/Product/product.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { GalleryComponent } from './Pages/gallery/gallery.component';
import { FaqComponent } from './Pages/Faq/faq-two.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { DocumentPageComponent } from './Pages/document-page/document-page.component';


export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path:'about', component:AboutComponent },
    {path:'FAQ',component: FaqComponent},
    {path:'Terms',component:TermsAndCondationsComponent},
    {path:'charities',component:catalogComponent},
    {path:'donate/:id',component:productComponent},
    {path:'contact-us',component:ContactUsComponent},
    {path:'Gallery',component:GalleryComponent},
    {path:'Docs',component:DocumentPageComponent},
    {path:'**',component:NotFoundPageComponent}
];
