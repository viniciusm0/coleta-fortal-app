import { Text, View, ActivityIndicator } from "react-native";
import { Styles } from './LoadingStyles'


function LoadingScreen() {
    return(
        <View style={Styles.container}>
            <ActivityIndicator size="large" />
            <Text style={Styles.textHeader}>Carregando...</Text>
            <Text style={Styles.textDescription}>Aguarde enquanto preparamos o aplicativo para você :)</Text>
        </View>
    )
}

export default LoadingScreen