import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuariosResponse } from '../modelos/usuarios-response';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get<UsuariosResponse>('https://randomuser.me/api/?page=1&results=10');
  }
}
