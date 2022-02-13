import { Component } from '@angular/core';
import { ProductData } from './interfaces/product-data';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pixePorfolio';


  constructor () {

  }
  ngOnInit() {
    
  }
}
