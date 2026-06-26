import {
    useState,
    useEffect
} from 'react';


import {
    View,
    Text,
    Button,
    FlatList
} from 'react-native';


import {
    obtenerAtletasPorGrupo
} from '../services/atletaService';



import {
    registrarAsistencia
} from '../services/asistenciaService';




export default function AsistenciaScreen({ route }) {



    const { sesion } = route.params;



    const [atletas,setAtletas] = useState([]);



    const [asistencias,setAsistencias] = useState({});





    useEffect(()=>{


        cargarAtletas();


    },[]);






    function cargarAtletas(){


        setAtletas(

            obtenerAtletasPorGrupo(sesion.grupo)

        );


    }







    function marcar(id, estado){



        setAsistencias({

            ...asistencias,

            [id]: estado

        });


    }







    function guardar(){



        atletas.forEach((atleta)=>{



            if(asistencias[atleta.id]){


                registrarAsistencia({

                    atletaId: atleta.id,

                    sesionId: sesion.id,

                    estado: asistencias[atleta.id],

                    fechaRegistro: new Date().toISOString()

                });



            }



        });



    }







    return(



        <View

            style={{

                flex:1,

                padding:20

            }}

        >



            <Text>


                Registrar asistencia


                {"\n"}


                Grupo: {sesion.grupo}


            </Text>





            <FlatList



                data={atletas}



                keyExtractor={(item)=>

                    item.id.toString()

                }





                renderItem={({item})=>(



                    <View

                        style={{

                            marginTop:20,

                            padding:10,

                            borderWidth:1

                        }}

                    >



                        <Text>


                            {item.nombre} {item.apellido}


                        </Text>





                        <Button

                            title="P"

                            onPress={()=>

                                marcar(
                                    item.id,
                                    "P"
                                )

                            }

                        />





                        <Button

                            title="F"

                            onPress={()=>

                                marcar(
                                    item.id,
                                    "F"
                                )

                            }

                        />





                        <Button

                            title="L"

                            onPress={()=>

                                marcar(
                                    item.id,
                                    "L"
                                )

                            }

                        />




                    </View>



                )}



            />






            <Button


                title="Guardar asistencia"


                onPress={guardar}


            />




        </View>



    );


}