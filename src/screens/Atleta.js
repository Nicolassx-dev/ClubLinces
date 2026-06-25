import { useState, useEffect } from 'react';

import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';


import {
    insertarAtleta,
    obtenerAtletas
} from '../database/database';





export default function Atleta() {



    const [nombre, setNombre] = useState("");

    const [apellido, setApellido] = useState("");

    const [fechaNacimiento, setFechaNacimiento] = useState("");

    const [disciplina, setDisciplina] = useState("");

    const [grupo, setGrupo] = useState("");



    const [atletas, setAtletas] = useState([]);





    useEffect(() => {


        setAtletas(
            obtenerAtletas()
        );


    }, []);







    function guardar() {


        insertarAtleta(

            nombre,

            apellido,

            fechaNacimiento,

            disciplina,

            grupo

        );



        setAtletas(

            obtenerAtletas()

        );



        setNombre("");

        setApellido("");

        setFechaNacimiento("");

        setDisciplina("");

        setGrupo("");


    }








    return (


        <View>



            <Text>
                Registrar Atleta
            </Text>





            <TextInput

                placeholder="Nombre"

                value={nombre}

                onChangeText={setNombre}

            />





            <TextInput

                placeholder="Apellido"

                value={apellido}

                onChangeText={setApellido}

            />





            <TextInput

                placeholder="Fecha nacimiento AAAA-MM-DD"

                value={fechaNacimiento}

                onChangeText={setFechaNacimiento}

            />





            <TextInput

                placeholder="Disciplina"

                value={disciplina}

                onChangeText={setDisciplina}

            />





            <TextInput

                placeholder="Grupo"

                value={grupo}

                onChangeText={setGrupo}

            />





            <Button

                title="Guardar"

                onPress={guardar}

            />







            <Text>

                Lista de atletas

            </Text>






            {

                atletas.map((a) => (


                    <Text key={a.id}>


                        {a.codigo} -

                        {a.nombre}

                        {" "}

                        {a.apellido}


                    </Text>


                ))

            }





        </View>


    );


}