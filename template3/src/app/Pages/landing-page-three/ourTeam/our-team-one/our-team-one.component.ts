import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team-one',
  standalone: true,
  imports: [],
  templateUrl: './our-team-one.component.html',
  styleUrl: './our-team-one.component.css'
})
export class OurTeamOneComponent {
 teamMembers = [
  {
    name: "Joe Antonio",
    position: "Founder CEO",
    imageSrc: "/assets/image/avatar1.png",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Sarah Daeva",
    position: "Marketing",
    imageSrc: "/assets/image/avatar3.png",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Daniel Emo",
    position: "Sales manager",
    imageSrc: "assets/image/avatar2.png",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    "name": "Michael Smith",
    "position": "Chief Technology Officer",
    "imageSrc": "/assets/image/avatar4.png",
    "socialLinks": {
      "twitter": "#",
      "facebook": "#",
      "instagram": "#",
      "linkedin": "#"
    }
  }
];

}
