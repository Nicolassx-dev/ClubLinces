import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';


export default function Login({navigation}){


    const [correo,setCorreo] = useState("");
    const [password,setPassword] = useState("");


    function iniciarSesion(){

        if(correo === "admin@gmail.com" && password === "1234"){

            navigation.navigate("Home");

        }else{

            console.log("Datos incorrectos");

        }

    }


    return(

        <View>

            <Text>
                CLUB LINCES
            </Text>


            <TextInput

                placeholder="Correo"

                onChangeText={setCorreo}

            />


            <TextInput

                placeholder="Contraseña"

                secureTextEntry={true}

                onChangeText={setPassword}

            />


            <Button

                title="Ingresar"

                onPress={iniciarSesion}

            />


        </View>

    );


}