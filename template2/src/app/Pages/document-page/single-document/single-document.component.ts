import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-document',
  standalone: true,
  imports: [],
  templateUrl: './single-document.component.html',
  styleUrl: './single-document.component.css'
})
export class SingleDocumentComponent {
@Input() document: any;
}
