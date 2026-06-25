import { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from './src/screens/Login';

import Home from './src/screens/Home';

import Atleta from './src/screens/Atleta';

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
                name="Atleta"
                component={Atleta}
            />


        </Stack.Navigator>


    </NavigationContainer>

  );

}