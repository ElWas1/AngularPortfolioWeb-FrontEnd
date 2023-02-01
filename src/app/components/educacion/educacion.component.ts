import { Component, OnInit } from '@angular/core';
import { SectionItemComponent } from '../section-item/section-item.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addSectionItem: SectionItemComponent = new SectionItemComponent;

}
