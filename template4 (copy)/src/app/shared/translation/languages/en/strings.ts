

import { aboutUs } from "./aboutUs";
import { achivmentsSection } from "./achivments";
import { catalog } from "./catalog";
import { contactFormText } from "./contactUs";
import { documents } from "./Documents";
import { faqs } from "./faqs";
import { featureContent } from "./features";
import { footerContent } from "./footer";
import { gallery } from "./gallery";
import { heroContent } from "./hero";
import { navbar } from "./navbar";
import { teamSection } from "./ourTeams";
import { product } from "./product";
import { timelineItems } from "./steps";
import { privacyPolicyContent } from "./termAndCondations";




export const translation = {

  navbar: navbar,
  aboutUs: aboutUs,
   contactUs:contactFormText ,

  // // donationsDetailsSection:blogPostContent,
   catalog:catalog,
  faq: faqs,
   hero: heroContent,
   achivmentsSection: achivmentsSection,
   footer: footerContent,
   featuresSection: featureContent,
   steps:timelineItems,

   gallery : gallery,
  // errorPage: {
  //   mainTitle: 'Not Found',
  //   subTitle: 'Page not found',
  //   desc: 'Sorry, we couldn’t find the page you’re looking for.',
  //   action1: 'Go back home',
  //   action2: 'Contact support',
  // },
   product:product,
   TermsAndCondations:privacyPolicyContent,
   documents:documents,
   ourTeam:teamSection,
}