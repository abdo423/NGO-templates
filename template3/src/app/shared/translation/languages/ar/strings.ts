
import { catalog } from "./catalog";
import { contactUs } from "./contactUs";
import { footer } from "./footer";
import { heroContent } from "./hero";
import { navItems } from "./navbar";
import { privacyPolicyContent } from "./termAndCondations";
import { documents } from "./Documents";
import { services } from "./features";
import { aboutUs } from "./aboutUs";

import { teamMembers } from "./ourTeam";
import { faqs } from "./faq";
import { gallery } from "./gallery";
import { blogContent } from "./product";



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