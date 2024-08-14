import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-content.component.html',
  styleUrls: ['./faq-content.component.css'],
})
export class FaqContentComponent {
  faqs = [
    {
      question: 'Lorem Ipsum ?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      isOpen: false,
    },
    {
      question: 'Lorem Ipsum ?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      isOpen: false,
    },
    {
      question: 'What is Lorem Ipsum?',
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      isOpen: false,
    },
    {
      question: 'Why do we use it?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.',
      isOpen: false,
    },
    {
      question: 'Where does it come from?',
      answer:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      isOpen: false,
    },
    {
      question: 'Where can I get some?',
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      isOpen: false,
    },
    {
      question: 'Why is Lorem Ipsum used in design?',
      answer:
        'Lorem Ipsum is used in design to avoid the distraction of readable content when looking at its layout. It helps designers focus on the visual elements and design of a project without being influenced by the content itself.',
      isOpen: false,
    },
    {
      question: 'What are the benefits of using Lorem Ipsum?',
      answer:
        'Using Lorem Ipsum allows designers to focus on design elements without being distracted by content. It also provides a more neutral and standard placeholder text that is useful for creating a visual impression of the final design.',
      isOpen: false,
    },
  ];

  toggle(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
