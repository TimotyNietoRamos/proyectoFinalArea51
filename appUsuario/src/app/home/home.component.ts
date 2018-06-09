import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private auth: AuthService, private ruteador: Router) { }

  ngOnInit() {
    /*if(!this.auth.estaAutenticado()) {
      this.ruteador.navigate([""])
    }*/
  }

}
