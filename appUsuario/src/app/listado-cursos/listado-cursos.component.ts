import { Component, OnInit } from '@angular/core';
import { CursoService } from 'app/curso.service';
import { ICurso } from 'app/i-curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.css']
})

export class ListadoCursosComponent implements OnInit {

  private listado: ICurso[] = []

  constructor(private cursoService: CursoService, private ruteador: Router) { }

  ngOnInit() {
    this.listado = this.cursoService.listado()
  }

  editar(id: number){
    this.ruteador.navigate(["cursos", "edicion", id])
  }

}
