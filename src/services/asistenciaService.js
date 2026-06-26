import { db } from '../database/database';



export function registrarAsistencia(asistencia) {

    db.runSync(

        `
        INSERT INTO asistencias
        (
            sesionId,
            atletaId,
            estado,
            fechaRegistro
        )

        VALUES
        (
            ?,
            ?,
            ?,
            ?
        )
        `,

        [
            asistencia.sesionId,
            asistencia.atletaId,
            asistencia.estado,
            asistencia.fechaRegistro
        ]

    );

}



export function obtenerAsistenciasPorSesion(sesionId) {

    return db.getAllSync(

        `
        SELECT *

        FROM asistencias

        WHERE sesionId = ?
        `,

        [sesionId]

    );

}