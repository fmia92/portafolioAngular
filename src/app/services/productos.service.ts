import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductData } from '../interfaces/product-data';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  cargarProductos(): Observable<ProductData> {
    return this.http.get("https://pixe-portfolio-55dca-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json")
    
  
  }
}
