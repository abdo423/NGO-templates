import { Component } from '@angular/core';
import { SingleDocumentComponent } from './single-document/single-document.component';

@Component({
  selector: 'app-document-page',
  standalone: true,
  imports: [SingleDocumentComponent],
  templateUrl: './document-page.component.html',
  styleUrl: './document-page.component.css'
})
export class DocumentPageComponent {
   documents = [
    {
      id: 1,
      title: "Document Title 1",
      publishedOn: "Jan 10, 2024",
      description: "Brief description of the document content.",
      imageUrl: "https://dummyimage.com/300x400",
      downloadLink: "#"
    },
    {
      id: 2,
      title: "Document Title 2",
      publishedOn: "Feb 5, 2024",
      description: "Another brief description of a different document.",
      imageUrl: "https://dummyimage.com/300x400",
      downloadLink: "#"
    },
    {
      id: 3,
      title: "Document Title 3",
      publishedOn: "Mar 20, 2024",
      description: "A short description for yet another document.",
      imageUrl: "https://dummyimage.com/300x400",
      downloadLink: "#"
    }
  ];
  
}
