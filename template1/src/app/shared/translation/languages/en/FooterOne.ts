import { RouterLink } from "@angular/router";

export const footerContent = {
    logoSrc: 'assets/image/footer-logo.png',
    donateText: 'Donate and help others people around the world',
    socialLinks: [
      { href: '#', iconClass: 'fab fa-facebook-f' },
      { href: '#', iconClass: 'fab fa-twitter' },
      { href: '#', iconClass: 'fab fa-linkedin' }
    ],
    quickLinks: [
      { href: '#', text: 'Charity Ratings' },
      { href: '#', text: 'Top-Rated Charities' },
      { href: '#', text: 'Top Compensation' },
      { href: '#', text: 'High Asset Charities' }
    ],
    companyLinks: [
      { routerLink: '/about', text: 'About Us' },
      { href: '#', text: 'Journalists / Media' },
      { routerLink:'/contact-us', text: 'Contact Us' },
      { routerLink: '/Gallery', text: 'Gallery' }
    ],
    legalLinks: [
      { routerLink: '/FAQ', href: '#', text: 'FAQ' },
      { routerLink : '/Terms', text: 'Terms & Conditions' }
    ],
  
  sectionTitles: {
    quickLinks: 'Quick links',
    company: 'Company',
    legal: 'Legal',
  },
  
  };
  