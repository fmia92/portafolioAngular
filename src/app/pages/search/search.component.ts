import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsData } from 'src/app/interfaces/products-data';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, public productService: ProductosService) { }

  //productos: ProductsData[] = [];

  //productosFiltrados: ProductsData[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params.q)
    })

    /*this.productService.cargarProductos().subscribe((res) => {
      this.productos = res
    })*/
  }
  /*buscarProducto(q: string){
    this.productosFiltrados = this.productos.filter(producto => {
      return true
    })
  }*/

}
