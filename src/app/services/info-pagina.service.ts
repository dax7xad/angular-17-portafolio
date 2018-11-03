import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IInfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  // https://angular-html-5301e.firebaseio.com/equipo.json

  info: IInfoPagina = {};
  equipo: any[] = [];
  cargada = false;

  constructor(private http: HttpClient) {
    this.getInfo();
    this.getInfoEquipo();
  }

  private getInfo(): void {
    // Leer el archivo Json
    this.http.get('assets/data/data-pagina.json')
      .subscribe((response: IInfoPagina) => {
        this.cargada = true;
        this.info = response;
      });
  }

  private getInfoEquipo(): void {
    // Leer el archivo Json
    this.http.get('https://angular-html-5301e.firebaseio.com/equipo.json')
      .subscribe((response: any[]) => {
        console.log(response);
        this.equipo = response;
      });
  }
}
