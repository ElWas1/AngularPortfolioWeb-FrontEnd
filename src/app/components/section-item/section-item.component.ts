import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-item',
  templateUrl: './section-item.component.html',
  styleUrls: ['./section-item.component.css']
})
export class SectionItemComponent implements OnInit {

  tituloItem: string = "a"
  srcImagenItem: string = ""
  altImagenItem: string = ""
  descripcionItem: string = "a"

  constructor() { }

  ngOnInit(): void {
  }

}
