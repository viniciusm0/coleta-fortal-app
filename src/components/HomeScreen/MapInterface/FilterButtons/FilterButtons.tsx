import { View } from "react-native";
import ButtonFilter from "./ButtonFilter";
import { Styles } from "./StyleFilterButtons";


function filtrarPontos(tipo: string) {
    switch (tipo) {
        case "reciclavel": {
            console.log("Você escolheu filtrar reciclavel")
            break
        }
        case "eletronico": {
            console.log("Você escolheu filtrar eletronico")
            break
        }
        case "organico": {
            console.log("Você escolheu filtrar organico")
            break
        }
    }
}

export default function FilterButtons() {
    return (
        <View style={Styles.container}>
            <ButtonFilter icon="recycling" nome="Recicláveis" background="transparent" color="#0A76DA" onPress={() => filtrarPontos("reciclavel")}/>
            <ButtonFilter icon="memory" nome="Eletrônicos" background="transparent" color="#B8AFAA" onPress={() => filtrarPontos("eletronico")}/>
            <ButtonFilter icon="compost" nome="Orgânico" background="transparent" color="#4ab11e" onPress={() => filtrarPontos("organico")}/>
        </View>
    )
}