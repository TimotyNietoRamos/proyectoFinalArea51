import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //fecha = new Date()
  private usuarioLogueado: boolean = false 

  constructor(private auth: AuthService){}

  ngOnInit(){
    this.usuarioLogueado = this.auth.estaAutenticado()

    this.auth.cambioEstado
      .subscribe(
        (estado: boolean) => {
          this.usuarioLogueado = estado
        }
      )
  }

  logout(): void {
    this.auth.logout()
  }
  
}
