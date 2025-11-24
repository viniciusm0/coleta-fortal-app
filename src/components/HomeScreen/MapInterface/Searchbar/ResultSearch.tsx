import { jsonTodos } from "@/src/backend/JSONTODOS";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Icon } from 'react-native-elements';

export default function ResultSearch(props: any) {
    const texto = props.text
    const Marcadores = jsonTodos.features
    const showResult = props.showResult
    const setPonto = props.setPonto
    const textInputRef = props.textInputRef

    return Marcadores.map((ponto) => {
        function retornarComp(p: any) {
            return (
                <Pressable 
                    onPress={() => {
                        setPonto(p, ponto)
                        showResult(false)
                        textInputRef.current?.blur()
                        }
                    } key={ponto.id+ponto.type} style={Styles.container}>
                    <View style={Styles.rowInfo}>
                        <Text style={Styles.titulo}>Nome do local</Text>
                        <Text style={Styles.info}>{p.nome}</Text>
                    </View>
                    <View style={Styles.rowInfoEndereco}>
                        <View>
                            <Icon
                                iconStyle={{}}
                                name="place"
                                color="black"
                            />
                        </View>
                        <View>
                            <Text style={Styles.titulo}>Endereço</Text>
                            <Text style={Styles.info}>{p.endereco}, {p.bairro}</Text>
                        </View>
                    </View>
                </Pressable>
            ) 
        }

        const nome = ponto.properties.Nome ? ponto.properties.Nome : ponto.properties.nome
        const endereco = ponto.properties.Endereço ? ponto.properties.Endereço : ponto.properties.endereço
        const bairro = ponto.properties.Bairro ? ponto.properties.Bairro : ponto.properties.bairro
        const coordenadas = {
            latitude: ponto.geometry.coordinates[1],
            longitude: ponto.geometry.coordinates[0],
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        } 

        if (nome != undefined && endereco != undefined && bairro != undefined) {
            if (texto.startsWith("rua") || texto.startsWith("avenida") || texto.startsWith("av.") ||
                texto.startsWith("Rua") || texto.startsWith("Avenida") || texto.startsWith("Av.")
            ) {
                if (endereco.toLowerCase().match(texto.toLowerCase())) {
                    return retornarComp({
                            id: ponto.id,
                            nome: nome,
                            endereco: endereco,
                            bairro: bairro,
                            cords: coordenadas
                    })
                }
            } else if (nome.toLowerCase().match(texto.toLowerCase()) || bairro.toLowerCase().match(texto.toLowerCase())) {
                return retornarComp({
                    id: ponto.id,
                    nome: nome,
                    endereco: endereco,
                    bairro: bairro,
                    cords: coordenadas
                })
            } else {
                return <></>
            }
        }
    })
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 15,
        borderBottomWidth: 1,
        borderColor: "#c0c0c0ff",
    },

    titulo: {
        color: "#868686ff",
        fontWeight: "bold"
    },

    info: {
        color: "black",
        fontWeight: "bold"
    },

    rowInfo: {
        marginBottom: 5,
    },

    rowInfoEndereco: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        marginBottom: 5,
    },
})