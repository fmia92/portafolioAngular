import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anyo: number = new Date().getFullYear()
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  title: string;
  email: string;

  constructor(public infoPagina: InfoPaginaService) { }

  ngOnInit(): void {
    this.infoPagina.getData().subscribe((res) => {
      this.facebookUrl = res.facebook
      this.twitterUrl = res.twitter
      this.instagramUrl = res.instagram
      this.title = res.titulo
      this.email = res.email
    })
  }

}
