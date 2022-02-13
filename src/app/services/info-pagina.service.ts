import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppData } from '../interfaces/app-data';
import { ProductData } from '../interfaces/product-data';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {
  constructor( private http: HttpClient) {
  }

  getData(): Observable<AppData> {
    return this.http.get("assets/data/app-data.json")
  }

  getEquipo(): Observable<ProductData>{
    return this.http.get("https://pixe-portfolio-55dca-default-rtdb.europe-west1.firebasedatabase.app/equipo.json")
  }
}
