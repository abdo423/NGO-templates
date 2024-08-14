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