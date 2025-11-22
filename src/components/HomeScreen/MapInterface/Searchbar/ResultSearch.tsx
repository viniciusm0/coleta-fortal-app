import { jsonTodos } from "@/src/backend/JSONTODOS";
import { Pressable, StyleSheet, Text } from "react-native";

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
                    } key={ponto.id+ponto.type} style={Styles.teste}>
                    <Text style={Styles.textoTeste}>Nome: {p.nome}</Text>
                    <Text style={Styles.textoTeste}>Endereço: {p.endereco}</Text>
                    <Text style={Styles.textoTeste}>Bairro: {p.bairro}</Text>
                </Pressable>
            ) 
        }

        const nome = ponto.properties.Nome ? ponto.properties.Nome : ponto.properties.nome
        const endereco = ponto.properties.Endereço ? ponto.properties.Endereço : ponto.properties.endereço
        const bairro = ponto.properties.Bairro ? ponto.properties.Bairro : ponto.properties.bairro
        const coordenadas = {
            latitude: ponto.geometry.coordinates[1],
            longitude: ponto.geometry.coordinates[0],
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
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
    teste: {
        backgroundColor: "white",
        padding: 10,
    },

    textoTeste: {
        color: "black"
    }
})