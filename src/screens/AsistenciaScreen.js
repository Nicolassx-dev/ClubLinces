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
    registrarAsistencia,
    existeAsistenciaSesion
} from '../services/asistenciaService';




export default function AsistenciaScreen({ route }) {



    const { sesion } = route.params;



    const [atletas,setAtletas] = useState([]);



    const [asistencias,setAsistencias] = useState({});

    const [soloLectura, setSoloLectura] = useState(false);





    useEffect(()=>{


        cargarAtletas();


    },[]);






    function cargarAtletas(){

        setAtletas(

            obtenerAtletasPorGrupo(sesion.grupo)

        );



        setSoloLectura(

            existeAsistenciaSesion(
                sesion.id
            )

        );

    }







    function marcar(id, estado){

        if(soloLectura){

            return;

        }

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

        setSoloLectura(true);

    }

    function calcularPorcentaje(){


    let total = atletas.length;


    let presentes = 0;



    atletas.forEach((atleta)=>{


        if(
            asistencias[atleta.id] === "P"
        ){

            presentes++;

        }


    });




    if(total === 0){

        return 0;

    }




    return Math.round(

        (presentes / total) * 100

    );


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

                <Text>

                    Porcentaje asistencia:
                    {calcularPorcentaje()}%

                </Text>

                {
                    !soloLectura &&

                    <Button

                        title="Guardar asistencia"

                        onPress={guardar}

                    />
                }




        </View>



    );


}