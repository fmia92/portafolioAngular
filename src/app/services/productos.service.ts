import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsData } from '../interfaces/products-data';
import { ProductItemData } from '../interfaces/product-item-data';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  cargarProductos(): Observable<ProductsData> {
    return this.http.get("https://pixe-portfolio-55dca-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json")
  }

  getProducto(id: string): Observable<ProductItemData> {
    return this.http.get(`https://pixe-portfolio-55dca-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`)
  }

  
}
