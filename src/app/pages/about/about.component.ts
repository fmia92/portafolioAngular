import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  equipo: any = []
  
  constructor(public infoPagina: InfoPaginaService) { }

  ngOnInit() {
    this.infoPagina.getEquipo().subscribe((res) => {
      this.equipo = res;
    })
  }

}
