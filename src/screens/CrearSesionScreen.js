import { useState } from 'react';

import {
    View,
    Text,
    TextInput,
    Button,
    Alert
} from 'react-native';

import {
    insertarSesion
} from '../services/agendaService';



export default function CrearSesionScreen({ navigation }) {


    const [fecha, setFecha] = useState("");

    const [horaInicio, setHoraInicio] = useState("");

    const [horaFin, setHoraFin] = useState("");

    const [lugar, setLugar] = useState("");

    const [grupo, setGrupo] = useState("");

    const [descripcion, setDescripcion] = useState("");



    function guardar() {


        if (

            fecha === "" ||

            horaInicio === "" ||

            horaFin === "" ||

            lugar === "" ||

            grupo === "" ||

            descripcion === ""

        ) {

            Alert.alert(

                "Campos incompletos",

                "Debe completar todos los campos."

            );

            return;

        }



        insertarSesion({

            fecha,

            horaInicio,

            horaFin,

            lugar,

            grupo,

            descripcion

        });

        Alert.alert(
            "Éxito",
            "Sesión guardada correctamente"
        );


        navigation.goBack();

    }



    return (

        <View
            style={{
                flex: 1,
                padding: 20
            }}
        >

            <Text>

                Crear sesión de entrenamiento

            </Text>



            <TextInput

                placeholder="Fecha (YYYY-MM-DD)"

                value={fecha}

                onChangeText={setFecha}

            />



            <TextInput

                placeholder="Hora inicio"

                value={horaInicio}

                onChangeText={setHoraInicio}

            />



            <TextInput

                placeholder="Hora fin"

                value={horaFin}

                onChangeText={setHoraFin}

            />



            <TextInput

                placeholder="Lugar"

                value={lugar}

                onChangeText={setLugar}

            />



            <TextInput

                placeholder="Grupo"

                value={grupo}

                onChangeText={setGrupo}

            />



            <TextInput

                placeholder="Descripción"

                value={descripcion}

                onChangeText={setDescripcion}

            />



            <Button

                title="Guardar"

                onPress={guardar}

            />

        </View>

    );

}