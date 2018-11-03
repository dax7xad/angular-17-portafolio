import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducto } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = false;
  productos: IProducto[] = [];

  constructor(private http: HttpClient) {
    this.loading = false;
    this.getproductos();
  }

  private getproductos(): void {
    // Leer el archivo Json
    const URL = 'https://angular-html-5301e.firebaseio.com/';
    this.http.get(`${URL}productos_idx.json`)
      .subscribe((response: IProducto[]) => {
        console.log(response);
        this.productos = response;
        this.loading = true;
      });
  }
}
