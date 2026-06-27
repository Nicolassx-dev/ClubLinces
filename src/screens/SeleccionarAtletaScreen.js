import React, { useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';

import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';

import {
    obtenerAtletasPorGrupo
} from '../services/atletaService';



export default function SeleccionarAtletaScreen({ route, navigation }) {


    const { sesion } = route.params;


    const [atletas, setAtletas] = useState([]);



    useFocusEffect(

        React.useCallback(() => {

            cargarAtletas();

        }, [])

    );



    function cargarAtletas() {

        setAtletas(

            obtenerAtletasPorGrupo(
                sesion.grupo
            )

        );

    }



    return (

        <View
            style={{
                flex: 1,
                padding: 20
            }}
        >

            <FlatList

                data={atletas}

                keyExtractor={(item) =>
                    item.id.toString()
                }

                renderItem={({ item }) => (

                    <TouchableOpacity

                        onPress={() =>

                            navigation.navigate(

                                "RegistrarRendimiento",

                                {

                                    atleta: item,

                                    sesion

                                }

                            )

                        }

                    >

                        <View
                            style={{
                                marginTop: 20,
                                padding: 10,
                                borderWidth: 1,
                                borderRadius: 8
                            }}
                        >

                            <Text>

                                {item.nombre} {item.apellido}

                                {"\n"}

                                {item.categoria}

                            </Text>

                        </View>

                    </TouchableOpacity>

                )}

            />

        </View>

    );

}