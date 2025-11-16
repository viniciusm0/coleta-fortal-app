import { Styles } from "@/src/components/HomeScreen/MapInterface/MarkerInfo/StyleInfosMarker"
import { Text, View } from "react-native"

export default function RenderInfos(props: any) {
    const markerInfo = props.MarkerInfo
    // console.log(typeof markerInfo.descricao)
    if (markerInfo != null) {
        return <View style={Styles.container}>
            <View>
                <Text>{markerInfo.id}</Text>
                <Text>{markerInfo.nome}</Text>
                <Text>{markerInfo.endereco}</Text>
                <Text>{markerInfo.bairro}</Text>
                <Text>{markerInfo.funciona}</Text>
                <Text>{markerInfo.descricao.endereço}</Text>
            </View>
        </View>
    } else {
        return <></>
    }
}