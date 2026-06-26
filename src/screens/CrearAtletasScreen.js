import { useState } from 'react';

import {
    View,
    Text,
    TextInput,
    Button,
    Alert
} from 'react-native';

import {
    insertarAtleta
} from '../services/atletaService';

export default function CrearAtletaScreen({ navigation }) {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [disciplina, setDisciplina] = useState("");
    const [grupo, setGrupo] = useState("");

    function guardar() {

        if (
            nombre === "" ||
            apellido === "" ||
            fechaNacimiento === "" ||
            disciplina === "" ||
            grupo === ""
        ) {

            Alert.alert(
                "Campos incompletos",
                "Debe completar todos los campos."
            );

            return;
        }

        insertarAtleta(
            nombre,
            apellido,
            fechaNacimiento,
            disciplina,
            grupo
        );

        Alert.alert(
            "Éxito",
            "El atleta fue registrado correctamente."
        );

        limpiar();

        navigation.goBack();
    }

    function limpiar() {

        setNombre("");
        setApellido("");
        setFechaNacimiento("");
        setDisciplina("");
        setGrupo("");
    }

    return (

        <View
            style={{
                flex: 1,
                padding: 20
            }}
        >

            <Text
                style={{
                    fontSize: 22,
                    marginBottom: 20
                }}
            >
                Registrar Atleta
            </Text>

            <TextInput
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
                style={{ marginBottom: 10 }}
            />

            <TextInput
                placeholder="Apellido"
                value={apellido}
                onChangeText={setApellido}
                style={{ marginBottom: 10 }}
            />

            <TextInput
                placeholder="Fecha nacimiento (YYYY-MM-DD)"
                value={fechaNacimiento}
                onChangeText={setFechaNacimiento}
                style={{ marginBottom: 10 }}
            />

            <TextInput
                placeholder="Disciplina"
                value={disciplina}
                onChangeText={setDisciplina}
                style={{ marginBottom: 10 }}
            />

            <TextInput
                placeholder="Grupo"
                value={grupo}
                onChangeText={setGrupo}
                style={{ marginBottom: 20 }}
            />

            <Button
                title="Guardar"
                onPress={guardar}
            />

        </View>

    );

}