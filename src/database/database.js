import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseSync('linces.db');

export function crearTablas() {

    db.execSync(`

        CREATE TABLE IF NOT EXISTS atletas(

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            nombre TEXT,

            apellido TEXT,

            fechaNacimiento TEXT,

            categoria TEXT,

            disciplina TEXT,

            grupo TEXT,

            activo INTEGER

        );

        CREATE TABLE IF NOT EXISTS sesiones(

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            fecha TEXT,

            horaInicio TEXT,

            horaFin TEXT,

            lugar TEXT,

            grupo TEXT,

            descripcion TEXT,

            estado TEXT,

            motivo TEXT

        );

        CREATE TABLE IF NOT EXISTS asistencias(

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            sesionId INTEGER,

            atletaId INTEGER,

            estado TEXT,

            fechaRegistro TEXT

        );
        
        CREATE TABLE IF NOT EXISTS rendimientos(

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            atletaId INTEGER,

            sesionId INTEGER,

            disciplina TEXT,

            resultado REAL,

            fecha TEXT,
            
            marcaPersonal INTEGER

        );
    `);

    

}