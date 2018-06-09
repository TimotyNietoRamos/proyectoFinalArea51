import { Injectable } from '@angular/core'; 
import { ICurso } from 'app/i-curso'; // importo el interface  ICurso

@Injectable()
export class CursoService { // exportando mi clase exportado servicio → CursoService
  private cursos: ICurso[] = [ // declaro un arreglo privado → 'cursos'
    {idCurso: 1, titulo: "Javascript"}, // objeto como propiedades del arreglo
    {idCurso: 2, titulo: "Angular"},
    {idCurso: 3, titulo: "Node"},
    {idCurso: 4, titulo: "css"},
    {idCurso: 5, titulo: "js"}
  ] 

  constructor() { }

  //declaro metodos:  listado, insercion, actualizacion, eliminacion, detalle
  listado():ICurso[] {
    return this.cursos.slice()
  }

  insercion(curso: ICurso): boolean {
    this.cursos.push(curso) // me retorna el arreglo y agrego con push 

    return true
  }

  actualizacion(curso: ICurso): boolean {
    const posicion = this.cursos.findIndex(item => item.idCurso == curso.idCurso)

    this.cursos[posicion] = curso

    return true
  }

  eliminacion(id: number): boolean {
    const posicion = this.cursos.findIndex(item => item.idCurso == id)

    this.cursos.splice(posicion, 1)

    return true
  }

  detalle(id: number): ICurso {
    const posicion = this.cursos.findIndex(item => item.idCurso == id)

    return this.cursos[posicion]
  }

}
