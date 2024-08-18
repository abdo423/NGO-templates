import { aboutUs } from "./aboutUs";
import { catalog } from "./catalog";
import { contactUs } from "./contactUs";
import { documents } from "./Documents";
import { faqs } from "./faq";
import { services } from "./features";
import { footer } from "./footer";
import { gallery } from "./gallery";
import { heroContent } from "./hero";
import { navItems } from "./navbar";
import { teamMembers } from "./ourTeam";
import { blogContent } from "./product";
import { privacyPolicyContent } from "./termAndCondations";



export const translation = {

  navbar: navItems,
  aboutUs: aboutUs,
  contactUs:contactUs ,

  // donationsDetailsSection:blogPostContent,
  catalog:catalog,
  faq: faqs,
  hero: heroContent,
  // achivmentsSection: achivmentsOne,
  footer: footer,
  featuresSection: services,
  gallery : gallery,
  errorPage: {
    mainTitle: 'Not Found',
    subTitle: 'Page not found',
    desc: 'Sorry, we couldn’t find the page you’re looking for.',
    action1: 'Go back home',
    action2: 'Contact support',
  },
  product:blogContent,
  TermsAndCondations:privacyPolicyContent,
  documents:documents,
  ourTeam:teamMembers,
}