import { useState } from 'react';

import {
    View,
    Text,
    TextInput,
    Button,
    Alert
} from 'react-native';

import {
    actualizarSesion
} from '../services/agendaService';



export default function EditarSesionScreen({
    route,
    navigation
}) {

    const { sesion } = route.params;

    const [fecha, setFecha] = useState(sesion.fecha);

    const [horaInicio, setHoraInicio] = useState(sesion.horaInicio);

    const [horaFin, setHoraFin] = useState(sesion.horaFin);

    const [lugar, setLugar] = useState(sesion.lugar);

    const [grupo, setGrupo] = useState(sesion.grupo);

    const [descripcion, setDescripcion] = useState(sesion.descripcion);



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


        actualizarSesion(

            sesion.id,

            {
                fecha,
                horaInicio,
                horaFin,
                lugar,
                grupo,
                descripcion
            }

        );
        
        Alert.alert(
            "Exito",
            "Sesion actualizada correctamente"
        )

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
                Editar sesión
            </Text>


            <TextInput
                placeholder="Fecha"
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

                title="Actualizar"

                onPress={guardar}

            />

        </View>

    );

}