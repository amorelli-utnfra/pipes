import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuariosService } from './services/usuarios.service';
import { Usuario } from './modelos/usuario';
import { CurrencyPipe, DatePipe, LowerCasePipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NombrePipe } from './pipes/nombre.pipe';
import { FiltroPipe } from './pipes/filtro.pipe';
import { GeneroPipe } from './pipes/genero.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule, DatePipe, CurrencyPipe, LowerCasePipe, NombrePipe, FiltroPipe, GeneroPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'pipes';
  usuarios: Usuario[] = [];
  busqueda = '';

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.usuariosService.getUsuarios()
    .subscribe(response => {
      this.usuarios = response.results;
    });
  }
}
