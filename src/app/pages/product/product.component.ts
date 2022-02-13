import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductItemData } from 'src/app/interfaces/product-item-data';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  producto: ProductItemData;
  productId: string;

  constructor(private route: ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe((parametros) => {
      this.productoService.getProducto(parametros.id).subscribe((res) => {
        this.producto = res;
        this.productId = parametros.id;
        console.log(this.producto)
      })
    })
  }

}
