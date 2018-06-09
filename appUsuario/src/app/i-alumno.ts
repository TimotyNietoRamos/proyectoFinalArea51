import { ICurso } from "app/i-curso";


// exporto la interface alumno → IAlumno
export interface IAlumno {
    idAlumno?: number,
    nombreCompleto: string,
    edad: number,
    idCurso?: number,
    datosCurso?: ICurso
}
