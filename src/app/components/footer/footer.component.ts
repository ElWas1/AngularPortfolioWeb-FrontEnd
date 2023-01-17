import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  desarrollador: string = "Valentino Conti"
  anoDesarrollo: number = 2023

  constructor() { }

  ngOnInit(): void {
  }

}
