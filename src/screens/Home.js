import { View, Button } from 'react-native';


export default function Home({navigation}){


    return(

        <View>

            <Button

                title="Ver atletas"

                onPress={() => navigation.navigate('Atletas')}

            />

            <Button

                title="Agenda"

                onPress={() => navigation.navigate('Agenda')}

            />

        </View>

    );

}