import { View, Text } from "react-native"

function WithoutLocationScreen() {
    const texto = "Ops... Você está sem localização :("
    return (
        <View>
            <Text>
                {texto}
            </Text>
            <Text>Abra as configurações do seu dispositivo e permita a localização</Text>
        </View>
    )
}

export default WithoutLocationScreen