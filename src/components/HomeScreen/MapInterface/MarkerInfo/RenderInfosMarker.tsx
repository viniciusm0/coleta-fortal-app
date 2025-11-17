import { Styles } from "@/src/components/HomeScreen/MapInterface/MarkerInfo/StyleInfosMarker";
import { Text, View } from "react-native";
import { Icon } from 'react-native-elements';

export default function RenderInfos(props: any) {
    const markerInfo = props.MarkerInfo
    // console.log(typeof markerInfo.descricao)
    if (markerInfo != null) {
        function InfoComponent() {
            console.log(markerInfo.id)
            switch(markerInfo.id) {
                case "Bio digestor":
                    console.log("Bio digestor")
                    return (
                        <View style={Styles.infoContainer}>
                            <Text style={Styles.titleInfo}>{markerInfo.id}</Text>
                            <Text>{markerInfo.nome}</Text>
                            <View>
                                <Icon
                                    iconStyle={{}}
                                    name="place"
                                    color="black"
                                />
                            <Text>{markerInfo.endereco}</Text>
                            </View>
                            <View style={Styles.othersInfosContainer}>
                                <View style={Styles.leftSideContainer}>
                                    <Text style={Styles.textLeftSide}>Bairro: </Text>
                                </View>
                                <View style={Styles.rightSideContainer}>
                                    <Text style={Styles.textRightSide}>{markerInfo.bairro}</Text>
                                </View>
                            </View>
                        </View>
                    )
                case "Centro de Recondicionamento Tecnolôgico":
                    return (
                        <View style={Styles.infoContainer}>
                            <Text style={Styles.titleInfo}>{markerInfo.id}</Text>
                            <Text>{markerInfo.nome}</Text>
                            <View style={Styles.othersInfosContainer}>
                                <Text>Endereço: {markerInfo.endereco}</Text>
                                <Text>Bairro: {markerInfo.bairro}</Text>
                            </View>
                        </View>
                    )
                case "Eco Ponto":
                    return (
                        <View style={Styles.infoContainer}>
                            <Text style={Styles.titleInfo}>{markerInfo.id}</Text>
                            <Text>{markerInfo.nome}</Text>
                            <View style={Styles.othersInfosContainer}>
                                <Text>Endereço: {markerInfo.endereco}</Text>
                                <Text>Bairro: {markerInfo.bairro}</Text>
                                <Text>Funcionamento: {markerInfo.funcionamento}</Text>
                            </View>
                        </View>
                    )
                case "Ilha Ecologica":
                    return (
                        <View style={Styles.infoContainer}>
                            <Text style={Styles.titleInfo}>{markerInfo.id}</Text>
                            <Text>{markerInfo.nome.trim()}</Text>
                            <View style={Styles.othersInfosContainer}>
                                <Text>Endereço: {markerInfo.endereco.trim()}</Text>
                                <Text>Bairro: {markerInfo.bairro}</Text>
                            </View>
                        </View>
                    )
                case "Lixeira Subterrânea":
                    return (
                        <View style={Styles.infoContainer}>
                            <Text style={Styles.titleInfo}>{markerInfo.id}</Text>
                            <View style={Styles.othersInfosContainer}>
                                <View style={Styles.leftSideContainer}>
                                    Endereço:
                                    Bairro:
                                </View>
                                <View style={Styles.rightSideContainer}>
                                    <Text>{markerInfo.endereco}</Text>
                                    <Text>{markerInfo.bairro}</Text>
                                </View>
                                <Text>{markerInfo.nome}</Text>
                            </View>
                        </View>
                    )
                case "Ponto de coleta domiciliar":
                    return (
                        <View style={Styles.infoContainer}>
                            <Text style={Styles.titleInfo}>{markerInfo.id}</Text>
                            <View style={Styles.othersInfosContainer}>
                                <Text>Endereço: {markerInfo.descricao.endereço}</Text>
                                <Text>Frequência: {markerInfo.descricao.frequencia}</Text>
                                <Text>Periodo: {markerInfo.descricao.periodo}</Text>
                                <Text>Equipamento: {markerInfo.descricao.equipamento}</Text>
                            </View>
                        </View>
                    )
                case "Máquina de reciclagem":
                    return (
                        <View style={Styles.infoContainer}>
                            <Text style={Styles.titleInfo}>{markerInfo.id}</Text>
                            <Text style={Styles.titleName}>{markerInfo.nome}</Text>
                            <View style={Styles.othersInfosContainer}>
                                <Text>Endereço: {markerInfo.endereco}</Text>
                                <Text>Bairro: {markerInfo.bairro}</Text>
                            </View>
                        </View>
                    )
            }
        }
        
        return (
            <View style={Styles.container}>
                <InfoComponent/>
            </View>
        )
    } else {
        return <></>
    }
}