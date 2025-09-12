import { Text, View } from "react-native";
import { Styles } from './LoadingStyles'

function LoadingScreen() {
    return(
        <View style={Styles.container}>
            <Text>Carregando...</Text>
        </View>
    )
}

export default LoadingScreen