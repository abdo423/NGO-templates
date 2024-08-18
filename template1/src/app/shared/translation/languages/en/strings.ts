
import { aboutUsContent } from "./aboutUsOne";
import { achivmentsOne } from "./achivmentsOne";
import { CONTACT_FORM_TEXT } from "./ContactUsOne";
import { donationCards } from "./DonationCardOne";
import { blogPostContent } from "./DonationDetails";
import { faqContent } from "./FaqOne";
import { footerContent } from "./FooterOne";
import { HeroOne } from "./HeroOne";
import { NavOne } from "./NavOne";
import { FeaturesOne } from "./FeaturesOne";
import { galleryItems } from "./GalleryOne";
import { voluntersSection } from "./volunters";
import { TermsAndCondationsComponent } from "../../../../Pages/terms-and-condations/terms-and-condations.component";
import { privacyPolicyContent } from "./termAndCondations";
import { documents } from "./Documents";

export const translation = {
  home: 'Home',
  about: 'About',
  aboutUs: 'About Us',
  contact: 'Contact',
  contactUs: 'Contact Us',
  gellary: 'Gellary',
  docs: 'Documents',
  faq: 'FAQ',
  catalog: 'Catalog',
  product: 'Product',
  ltDonate: 'Latest to donate',
  policy: 'Privacy Policy',
  action: 'Action',
  navbar: NavOne,
  aboutSection: aboutUsContent,
  contactSection:CONTACT_FORM_TEXT ,
  ctaSection: {
    title: "What Are You Looking For? Get Started Now!",
    desc: "We provide a wide range of services to help you get started with your business.",
    action: "Started",
  },
  docsSection: {
    title: 'Brilliant Toolkit to Build Nextgen Website Faster.',
    desc: 'The main ‘thrust\' is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables led by subject matter experts. The main ‘thrust\' is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel.',
    action: "Know More",
  },
  donationsDetailsSection:blogPostContent,
  donationCard:donationCards,
  faqSection: faqContent,
  offersSection: {
    mainTitle: 'Offers',
    subTitle: 'What We Offer',
    desc: 'We are here to help you',
    action: 'Learn More',
    offers: [
      {
        title: 'Offer 1',
        desc: 'Description 1'
      },
      {
        title: 'Offer 2',
        desc: 'Description 2'
      },
      {
        title: 'Offer 3',
        desc: 'Description 3'
      },
    ]
  },
  heroSection: HeroOne,
  achivmentsSection: achivmentsOne,
  footerSection: footerContent,
  featuresSection: FeaturesOne,
  gallerySection : galleryItems,
  errorPage: {
    mainTitle: 'Not Found',
    subTitle: 'Page not found',
    desc: 'Sorry, we couldn’t find the page you’re looking for.',
    action1: 'Go back home',
    action2: 'Contact support',
  },
  voluntersSection: voluntersSection,
  TermsAndCondations:privacyPolicyContent,
  documents:documents,
}