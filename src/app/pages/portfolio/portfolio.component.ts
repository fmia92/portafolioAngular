import { Component, OnInit } from '@angular/core';
import { ProductsData } from 'src/app/interfaces/products-data';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  productos: ProductsData;
  cargando = true;

  constructor(public productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.cargarProductos().subscribe((res) => {
      this.productos = res

      setTimeout(() => {
        this.cargando = false;
  
      },);
    })
  }

}
