import { jsonTodos } from "@/src/backend/JSONTODOS";
import { StyleSheet, Text, View } from "react-native";

export default function ResultSearch(props: any) {
    const texto = props.text
    const Marcadores = jsonTodos.features

    return Marcadores.map((ponto) => {
        function retornarComp(p: any) {
            console.log(p.nome)
            return (
                <View key={p.id} style={Styles.teste}>
                    <Text style={Styles.textoTeste}>Nome: {p.nome}</Text>
                    <Text style={Styles.textoTeste}>Endereço: {p.endereco}</Text>
                    <Text style={Styles.textoTeste}>Bairro: {p.bairro}</Text>
                </View>
            ) 
        }

        const nome = ponto.properties.Nome ? ponto.properties.Nome : ponto.properties.nome
        const endereco = ponto.properties.Endereço ? ponto.properties.Endereço : ponto.properties.endereço
        const bairro = ponto.properties.Bairro ? ponto.properties.Bairro : ponto.properties.bairro

        if (nome != undefined && endereco != undefined && bairro != undefined) {
            if (texto.startsWith("rua") || texto.startsWith("avenida") || texto.startsWith("av.") ||
                texto.startsWith("Rua") || texto.startsWith("Avenida") || texto.startsWith("Av.")
            ) {
                if (endereco.toLowerCase().match(texto.toLowerCase())) {
                    return retornarComp({
                            id: ponto.id,
                            nome: nome,
                            endereco: endereco,
                            bairro: bairro
                    })
                }
            } else if (nome.toLowerCase().match(texto.toLowerCase()) || bairro.toLowerCase().match(texto.toLowerCase())) {
                return retornarComp({
                    id: ponto.id,
                    nome: nome,
                    endereco: endereco,
                    bairro: bairro
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