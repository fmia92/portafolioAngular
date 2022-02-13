import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from '../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string

  constructor(public infoPagina: InfoPaginaService, private router: Router) { }

  ngOnInit(): void {
    this.infoPagina.getData().subscribe((res) => {
      this.title = res.titulo
    })
  }

  buscarProducto(q: string) {
    if(q.length < 1) return;

    this.router.navigate(['/search', q])
  }

}
