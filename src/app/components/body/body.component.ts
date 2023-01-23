import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  imagenBanner: string = "https://github.com/ElWas1/AngularPortfolioWeb-FrontEnd/blob/main/src/resources/BannerWebPortfolio.png?raw=true"
  imagenBannerAlt: string = "Banner"

  constructor() { }

  ngOnInit(): void {
  }

}
