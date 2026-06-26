import { useEffect } from 'react';


import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Login from './src/screens/Login';

import Home from './src/screens/Home';

import AtletasScreen from './src/screens/AtletasScreen';

import CrearAtletaScreen from './src/screens/CrearAtletasScreen';

import EditarAtletasScreen from './src/screens/EditarAtletasScreen';

import DetalleAtletaScreen from './src/screens/DetalleAtletaScreen';

import AgendaScreen from './src/screens/AgendaScreen';

import CrearSesionScreen from './src/screens/CrearSesionScreen';

import EditarSesionScreen from './src/screens/EditarSesionScreen';

import DetalleSesionScreen from './src/screens/DetalleSesionScreen';


import { crearTablas } from './src/database/database';





const Stack = createNativeStackNavigator();






export default function App(){



    useEffect(()=>{


        crearTablas();


    },[]);






    return(


        <NavigationContainer>


            <Stack.Navigator>



                <Stack.Screen

                    name="Login"

                    component={Login}

                />





                <Stack.Screen

                    name="Home"

                    component={Home}

                />





                <Stack.Screen

                    name="Atletas"

                    component={AtletasScreen}

                />





                <Stack.Screen

                    name="CrearAtleta"

                    component={CrearAtletaScreen}

                />


                <Stack.Screen
                    name="EditarAtleta"
                    component={EditarAtletasScreen}
                />

                <Stack.Screen
                    name="DetalleAtleta"
                    component={DetalleAtletaScreen}
                />

                <Stack.Screen
                    name="Agenda"
                    component={AgendaScreen}
                />

                <Stack.Screen
                    name="CrearSesion"
                    component={CrearSesionScreen}
                />

                <Stack.Screen
                    name="EditarSesion"
                    component={EditarSesionScreen}
                />

                <Stack.Screen

                    name="DetalleSesion"

                    component={DetalleSesionScreen}

                />

            </Stack.Navigator>



        </NavigationContainer>


    );


}