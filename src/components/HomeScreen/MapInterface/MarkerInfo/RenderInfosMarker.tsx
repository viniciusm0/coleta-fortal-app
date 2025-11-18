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
                            <Text style={Styles.nomeInfo}>Local: {markerInfo.nome}</Text>
                            <View style={Styles.addressArea}>
                                <Icon
                                    iconStyle={{}}
                                    name="place"
                                    color="black"
                                />
                            <Text>{markerInfo.endereco}</Text>
                            </View>
                            <View style={Styles.othersInfosContainer}>
                                <View style={Styles.rowInfoContainer}>
                                    <Text style={Styles.textLeftSide}>Bairro: </Text>
                                    <Text style={Styles.textRightSide}>{markerInfo.bairro}</Text>
                                </View>
                                <View style={Styles.rowInfoContainer}>
                                    <Text style={Styles.textLeftSide}>Tipo de Instituição: </Text>
                                    <Text style={Styles.textRightSide}>{markerInfo.tipoInstituicao}</Text>
                                </View>
                            </View>
                        </View>
                    )
                case "Centro de Recondicionamento Tecnolôgico":
                    return (
                         <View style={Styles.infoContainer}>
                            <Text style={Styles.titleInfo}>{markerInfo.id}</Text>
                            <Text style={Styles.nomeInfo}>Local: {markerInfo.nome}</Text>
                            <View style={Styles.addressArea}>
                                <Icon
                                    iconStyle={{}}
                                    name="place"
                                    color="black"
                                />
                            <Text>{markerInfo.endereco}</Text>
                            </View>
                            <View style={Styles.othersInfosContainer}>
                                <View style={Styles.rowInfoContainer}>
                                    <Text style={Styles.textLeftSide}>Bairro: </Text>
                                    <Text style={Styles.textRightSide}>{markerInfo.bairro}</Text>
                                </View>
                                <View style={Styles.rowInfoContainer}>
                                    <Text style={Styles.textLeftSide}>Funcionamento: </Text>
                                    <Text style={Styles.textRightSide}>{markerInfo.funcionamento}</Text>
                                </View>
                                <View style={Styles.rowInfoContainer}>
                                    <Text style={Styles.textLeftSide}>Horário: </Text>
                                    <Text style={Styles.textRightSide}>{markerInfo.horario}</Text>
                                </View>
                            </View>
                        </View>
                    )
                case "Eco Ponto":
                    return (
                        <View style={Styles.infoContainer}>
                            <Text style={Styles.titleInfo}>{markerInfo.id}</Text>
                            <Text style={Styles.nomeInfo}>Local: {markerInfo.nome}</Text>
                            <View style={Styles.addressArea}>
                                <Icon
                                    iconStyle={{}}
                                    name="place"
                                    color="black"
                                />
                            <Text>{markerInfo.endereco}</Text>
                            </View>
                            <View style={Styles.othersInfosContainer}>
                                <View style={Styles.rowInfoContainer}>
                                    <Text style={Styles.textLeftSide}>Bairro: </Text>
                                    <Text style={Styles.textRightSide}>{markerInfo.bairro}</Text>
                                </View>
                                <View style={Styles.rowInfoContainer}>
                                    <Text style={Styles.textLeftSide}>Funcionamento: </Text>
                                    <Text style={Styles.textRightSide}>{markerInfo.funcionamento}</Text>
                                </View>
                                <View style={Styles.rowInfoContainer}>
                                    <Text style={Styles.textLeftSide}>Situação: </Text>
                                    <Text style={Styles.textRightSide}>{markerInfo.situacao}</Text>
                                </View>
                                <View style={Styles.rowInfoContainer}>
                                    <Text style={Styles.textLeftSide}>Modalidade: </Text>
                                    <Text style={Styles.textRightSide}>{markerInfo.modalidade}</Text>
                                </View>
                                <View style={Styles.rowInfoContainer}>
                                    <Text style={Styles.textLeftSide}>Categoria: </Text>
                                    <Text style={Styles.textRightSide}>{markerInfo.categoria}</Text>
                                </View>
                            </View>
                        </View>
                    )
                case "Ilha Ecologica":
                    return (
                        <View style={Styles.infoContainer}>
                            <Text style={Styles.titleInfo}>{markerInfo.id}</Text>
                            <Text style={Styles.nomeInfo}>Local: {markerInfo.nome}</Text>
                            <View style={Styles.addressArea}>
                                <Icon
                                    iconStyle={{}}
                                    name="place"
                                    color="black"
                                />
                            <Text>{markerInfo.endereco}</Text>
                            </View>
                            <View style={Styles.othersInfosContainer}>
                                <View style={Styles.rowInfoContainer}>
                                    <Text style={Styles.textLeftSide}>Bairro: </Text>
                                    <Text style={Styles.textRightSide}>{markerInfo.bairro}</Text>
                                </View>
                            </View>
                        </View>
                    )
                case "Lixeira Subterrânea":
                    return (
                        <View style={Styles.infoContainer}>
                            <Text style={Styles.titleInfo}>{markerInfo.id}</Text>
                            <Text style={Styles.nomeInfo}>Local: {markerInfo.nome}</Text>
                            <View style={Styles.addressArea}>
                                <Icon
                                    iconStyle={{}}
                                    name="place"
                                    color="black"
                                />
                            <Text>{markerInfo.endereco}</Text>
                            </View>
                            <View style={Styles.othersInfosContainer}>
                                <View style={Styles.rowInfoContainer}>
                                    <Text style={Styles.textLeftSide}>Bairro: </Text>
                                    <Text style={Styles.textRightSide}>{markerInfo.bairro}</Text>
                                </View>
                            </View>
                            <View style={Styles.rowInfoContainer}>
                                <Text style={Styles.textLeftSide}>Tipo de Instituição: </Text>
                                <Text style={Styles.textRightSide}>{markerInfo.tipoInstituicao}</Text>
                            </View>
                            <View style={Styles.rowInfoContainer}>
                                <Text style={Styles.textLeftSide}>Frequência: </Text>
                                <Text style={Styles.textRightSide}>{markerInfo.frequencia}</Text>
                            </View>
                            <View style={Styles.rowInfoContainer}>
                                <Text style={Styles.textLeftSide}>Capacidade: </Text>
                                <Text style={Styles.textRightSide}>{markerInfo.capacidade}</Text>
                            </View>
                            <View style={Styles.rowInfoContainer}>
                                <Text style={Styles.textLeftSide}>Qnt Lixeiras: </Text>
                                <Text style={Styles.textRightSide}>{markerInfo.qntLixeiras}</Text>
                            </View>
                        </View>
                    )
                case "Ponto de coleta domiciliar":
                    return (
                        <View style={Styles.infoContainer}>
                            <Text style={Styles.titleInfo}>{markerInfo.id}</Text>
                            <Text style={Styles.nomeInfo}>Local: {markerInfo.nome}</Text>
                            <View style={Styles.addressArea}>
                                <Icon
                                    iconStyle={{}}
                                    name="place"
                                    color="black"
                                />
                                <Text>{markerInfo.descricao.endereço}</Text>
                            </View>
                            <View style={Styles.othersInfosContainer}>
                                <View style={Styles.rowInfoContainer}>
                                    <Text style={Styles.textLeftSide}>Equipamento: </Text>
                                    <Text style={Styles.textRightSide}>{markerInfo.descricao.equipamento ?? "Não informado"}</Text>
                                </View>
                                <View style={Styles.rowInfoContainer}>
                                    <Text style={Styles.textLeftSide}>Frequência: </Text>
                                    <Text style={Styles.textRightSide}>{markerInfo.descricao.frequencia ?? "Não informado"}</Text>
                                </View>
                                <View style={Styles.rowInfoContainer}>
                                    <Text style={Styles.textLeftSide}>Periodo: </Text>
                                    <Text style={Styles.textRightSide}>{markerInfo.descricao.periodo ?? "Não informado"}</Text>
                                </View>
                                <View style={Styles.rowInfoContainer}>
                                    <Text style={Styles.textLeftSide}>Tipo de Coleta: </Text>
                                    <Text style={Styles.textRightSide}>{markerInfo.tipoDeColeta ?? "Não informado"}</Text>
                                </View>                 
                            </View>
                        </View>
                    )
                case "Máquina de reciclagem":
                    return (
                        <View style={Styles.infoContainer}>
                            <Text style={Styles.titleInfo}>{markerInfo.id}</Text>
                            <Text style={Styles.nomeInfo}>Local: {markerInfo.nome}</Text>
                            <View style={Styles.addressArea}>
                                <Icon
                                    iconStyle={{}}
                                    name="place"
                                    color="black"
                                />
                                <Text>{markerInfo.endereco}</Text>
                            </View>
                            <View style={Styles.othersInfosContainer}>
                                <View style={Styles.rowInfoContainer}>
                                    <Text style={Styles.textLeftSide}>Bairro: </Text>
                                    <Text style={Styles.textRightSide}>{markerInfo.bairro}</Text>
                                </View>
                                <View style={Styles.rowInfoContainer}>
                                    <Text style={Styles.textLeftSide}>Funciona: </Text>
                                    <Text style={Styles.textRightSide}>{markerInfo.funciona}</Text>
                                </View>
                                <View style={Styles.rowInfoContainer}>
                                    <Text style={Styles.textLeftSide}>Layer: </Text>
                                    <Text style={Styles.textRightSide}>{markerInfo.layer}</Text>
                                </View>
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