

import { achivmentsSection } from "./achivments";
import { documents } from "./Documents";
import { featureContent } from "./features";
import { footerContent } from "./footer";
import { gallery } from "./gallery";
import { heroContent } from "./hero";
import { navbar } from "./navbar";
import { teamSection } from "./ourTeams";
import { timelineItems } from "./steps";
import { privacyPolicyContent } from "./termAndCondations";




export const translation = {

  navbar: navbar,
  // aboutUs: aboutUs,
  // contactUs:contactUs ,

  // // donationsDetailsSection:blogPostContent,
  // catalog:catalog,
  // faq: faqs,
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
  // product:blogContent,
   TermsAndCondations:privacyPolicyContent,
   documents:documents,
   ourTeam:teamSection,
}