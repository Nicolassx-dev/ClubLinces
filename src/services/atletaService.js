import { db } from '../database/database';


export function insertarAtleta(atleta){

    db.runSync(
        `
        INSERT INTO atletas
        (
        codigo,
        nombre,
        apellido,
        fechaNacimiento,
        categoria,
        disciplina,
        grupo,
        activo
        )

        VALUES (?,?,?,?,?,?,?,?)

        `,
        [
            atleta.codigo,
            atleta.nombre,
            atleta.apellido,
            atleta.fechaNacimiento,
            atleta.categoria,
            atleta.disciplina,
            atleta.grupo,
            1
        ]
    );

}



export function obtenerAtletas(){

    return db.getAllSync(
        `
        SELECT * 
        FROM atletas
        WHERE activo = 1
        `
    );

}