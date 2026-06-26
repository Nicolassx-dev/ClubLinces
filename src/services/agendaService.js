import { db } from '../database/database';



export function insertarSesion(sesion){


    db.runSync(

        `
        INSERT INTO sesiones
        (
            fecha,
            horaInicio,
            horaFin,
            lugar,
            grupo,
            descripcion,
            estado
        )


        VALUES(?,?,?,?,?,?,?)

        `,


        [

            sesion.fecha,

            sesion.horaInicio,

            sesion.horaFin,

            sesion.lugar,

            sesion.grupo,

            sesion.descripcion,

            "ACTIVO"

        ]

    );


}





export function obtenerSesiones(){


    return db.getAllSync(

        `
        SELECT *
        FROM sesiones
        ORDER BY fecha ASC, horaInicio ASC

        `

    );


}





export function actualizarSesion(
    id,
    sesion
){


    db.runSync(

        `
        UPDATE sesiones

        SET

        fecha=?,

        horaInicio=?,

        horaFin=?,

        lugar=?,

        grupo=?,

        descripcion=?


        WHERE id=?

        `,


        [

            sesion.fecha,

            sesion.horaInicio,

            sesion.horaFin,

            sesion.lugar,

            sesion.grupo,

            sesion.descripcion,

            id

        ]

    );


}


export function cancelarSesion(id, motivo){


    db.runSync(

        `
        UPDATE sesiones

        SET

        estado = ?,

        motivo = ?

        WHERE id = ?

        `,

        [

            "CANCELADA",

            motivo,

            id

        ]

    );


}