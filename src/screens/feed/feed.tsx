import { StyleSheet, Text, View } from "react-native";

export default function feed(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Ola vem conhecer nosso apk</Text>
            <Text>Falando sobre o nosso aplicativo goostariamos de resaltar que  mesmo se concentra em ser 
                um aplicativo voltado a coleta na nossa cidade de fortaleza.
            </Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center',

    },
    title:{
        fontSize:22,
        fontWeight:'bold',
    }});