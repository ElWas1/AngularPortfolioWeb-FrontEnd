import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoAP: string = "https://desa.argentinaprograma.inti.gob.ar/pluginfile.php/1/theme_moove/logo/1660276176/APLogo-20-20.png"
  logoAPAlt: string = "Argentina Programa"
  hrefAP: string = "https://www.argentina.gob.ar/economia/conocimiento/argentina-programa"

  logoLinkedIn: string = "https://i.pinimg.com/564x/0c/54/79/0c5479e1eeca3d119c2f9bbb90ce80a6.jpg"
  logoLinkedInAlt: string = "LinkedIn"
  hrefLinkedIn: string = "https://www.linkedin.com/in/valentino-conti-5574b5245"

  logoInstagram: string = "https://cdn.freebiesupply.com/images/large/2x/instagram-logo-white-on-black.png"
  logoInstagramAlt: string = "Instagram"
  hrefInstagram: string = "https://www.instagram.com/tino_contii/"

  loginBoton: string = "Login"
  inicioBoton: string = "Inicio"

  constructor() { }

  ngOnInit(): void {
  }

}
