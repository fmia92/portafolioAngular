import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string

  constructor(public infoPagina: InfoPaginaService) { }

  ngOnInit(): void {
    this.infoPagina.getData().subscribe((res) => {
      this.title = res.titulo
    })
  }

}
