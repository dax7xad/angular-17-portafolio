import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IInfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: IInfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient ) {
    // console.log('pagina cargada ...');
    // Leer el archivo Json
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (response: IInfoPagina) => {
        this.cargada = true;
        this.info = response;
    });

  }
}
