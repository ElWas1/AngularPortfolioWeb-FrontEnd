import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  imagenBanner: string = "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/03/programacion-javascript-2640901.jpg?tf=3840x"
  imagenBannerAlt: string = "Banner"

  pfpPortfolio: string = "https://github.com/ElWas1/AngularPortfolioWeb-FrontEnd/blob/main/src/assets/PFP_WebPortfolio.png?raw=true"
  pfpPortfolioAlt: string = "Foto de perfil"

  constructor() { }

  ngOnInit(): void {
  }

}
