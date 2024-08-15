import { Routes } from '@angular/router';

import { ContactUsPageComponent } from './Pages/contact-us-page/contact-us-page.component';
import { ProductComponent } from './Pages/product/product.component';

import { TermsAndCondationsComponent } from './Pages/terms-and-condations/terms-and-condations.component';

import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { DocumentPageComponent } from './Pages/document-page/document-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { CatalogComponent } from './Pages/catalog/catalog.component';
import { FaqComponent } from './Pages/faq/faq.component';
import { GalleryPageComponent } from './Pages/gallery-page/gallery-page.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';




export const routes: Routes = [
    { path: '', component: LandingPageComponent, data: { showLayout: true } },
    { path: 'about', component: AboutPageComponent, data: { showLayout: true } },
    { path: 'FAQ', component: FaqComponent, data: { showLayout: true } },
    { path: 'Terms', component: TermsAndCondationsComponent, data: { showLayout: true } },
    { path: 'charities', component: CatalogComponent, data: { showLayout: true } },
    { path: 'donate/:id', component: ProductComponent, data: { showLayout: true } },
    { path: 'contact-us', component: ContactUsPageComponent, data: { showLayout: true } },
    { path: 'Gallery', component: GalleryPageComponent, data: { showLayout: true } },
    { path: 'Doc', component: DocumentPageComponent, data: { showLayout: true } },
    { path: '**', component: NotFoundPageComponent, data: { showLayout: false } }
  ];