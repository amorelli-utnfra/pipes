import { Usuario } from "./usuario";

export interface UsuariosResponse {
    results: Usuario[];
    info: {
      seed: string;
      results: number;
      page: number;
      version: string;
    };
  }