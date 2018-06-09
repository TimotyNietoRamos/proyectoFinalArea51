import { Injectable, EventEmitter } from '@angular/core';
import { IUsuario } from 'app/i-usuario'; // importo el interface del usuario
import { Router } from '@angular/router'; // importo el router

@Injectable()
export class AuthService { // exporto mi clase exportadora serivcio → AuthService

  private usuarios: IUsuario[] = [
    { idUsuario: 2, correo: "cristal200@gmail.com", contrasena: "123456", rol: "operador" }
  ]

  private estadoUsuario: boolean = false

  cambioEstado = new EventEmitter<boolean>()

  constructor(private ruteador: Router) { }

  // declaro un metodo que metere en los componentes// metiendo servicio
  login(usuario: IUsuario): string {
    const usuarioEncontrado = this.usuarios.find(elem => {
      if(elem.correo.toLowerCase().trim()===usuario.correo.toLowerCase().trim()) {
        return true
      }

      return false
    })

    if(usuarioEncontrado) {
      localStorage.setItem("logueado", JSON.stringify(usuarioEncontrado))
      //this.estadoUsuario = true
      this.cambioEstado.emit(true)
    }

    return usuarioEncontrado ? "" : "Correo y/o contraseña no válidos"

   }

   // declaro los sgtes metodos:
  logout() { 
    localStorage.clear()
    this.cambioEstado.emit(false)
    this.ruteador.navigate([""])
  }
 
  estaAutenticado(): boolean { 
    if(localStorage.getItem("logueado")) {
      return true
    }
    return false
  }

  rolUsuario(): string {
    const usuario: string = localStorage.getItem("logueado")

    return JSON.parse(usuario).rol
  }

}
