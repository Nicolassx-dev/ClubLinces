import * as SQLite from 'expo-sqlite';


export const db = SQLite.openDatabaseSync('linces.db');



export function crearTablas() {

    db.execSync(`

        CREATE TABLE IF NOT EXISTS atletas (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            codigo TEXT,
            nombre TEXT,
            apellido TEXT,
            fechaNacimiento TEXT,
            categoria TEXT,
            disciplina TEXT,
            grupo TEXT,
            activo INTEGER

        );

    `);

}





export function insertarAtleta(
    nombre,
    apellido,
    fechaNacimiento,
    disciplina,
    grupo
) {


    const resultado = db.runSync(

        `
        INSERT INTO atletas
        (
            nombre,
            apellido,
            fechaNacimiento,
            categoria,
            disciplina,
            grupo,
            activo
        )

        VALUES
        (
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?
        )

        `,

        [

            nombre,

            apellido,

            fechaNacimiento,

            "Pendiente",

            disciplina,

            grupo,

            1

        ]

    );



    const id = resultado.lastInsertRowId;



    db.runSync(

        `
        UPDATE atletas

        SET codigo = ?

        WHERE id = ?

        `,

        [

            "ATL-" + String(id).padStart(3,"0"),

            id

        ]

    );


}





export function obtenerAtletas() {


    return db.getAllSync(

        `
        SELECT *

        FROM atletas

        WHERE activo = 1

        `

    );


}