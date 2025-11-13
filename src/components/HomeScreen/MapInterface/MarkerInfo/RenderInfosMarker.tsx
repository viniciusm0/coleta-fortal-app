import { Text, View } from "react-native"

export default function RenderInfos(props: any) {
    const markerInfo = props.MarkerInfo
    console.log(markerInfo)
    if (markerInfo != null) {
        return <View style={{zIndex: 40}}>
            <Text>{markerInfo.nome}</Text>
            <Text>{markerInfo.endereco}</Text>
            <Text>{markerInfo.bairro}</Text>
        </View>
    } else {
        return <></>
    }
}