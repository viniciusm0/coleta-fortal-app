import { jsonTodos } from '@/src/backend/JSONTODOS';
import { getDistance } from 'geolib';
import { Marker } from "react-native-maps";

export default function MarkersCircle(props : any) {
    const circleCenter= props.circleCenter
    const circleRadius = props.circleRadius
    
    // VARIAVEL DO ARQUIVO JSON
    const MarkersJson = jsonTodos.features
    //PEGA A LISTA DE MARCADORES E FAZ UM MAP.
    return MarkersJson.map((marker) => {
        // Para cada marker, ele pega o id e trata para sobrar apenas o nome do id
        //Ex: "vw_maquinas_reciclagem.fid-4771eb0b_198a626cc29_-6878" - é transformado para: maquinas_reciclagem
        const id = marker.id.replace(/\W/g, " ").split(" ")[0].replace("vw_", "")
        //Pega as coordenadas do marker e armazena em um objeto com chaves latitude e longitude
        const coordinate = {
            latitude: marker.geometry.coordinates[1],
            longitude: marker.geometry.coordinates[0]
        }
        const distance = getDistance(coordinate, circleCenter)
        //Define uma variavel para armazenar a descrição do ponto
        let descricaoTipo;
        
        //Analisa o id para saber qual será a descrição do ponto
        switch(id){
            case "Biodigestores":
                descricaoTipo = "Bio digestor"
                break
                
            case "CentroRecondicionamentoTecnologico":
                descricaoTipo = "Centro de Recondicionamento Tecnolôgico"
                break

            case "Ecopontos":
                descricaoTipo = "Eco Ponto"
                break

            case "IlhasEcologicas":
                descricaoTipo = "Ilha Ecologica"
                break

            case "LixeirasSubterraneas":
                descricaoTipo = "Lixeira Subterrânea"
                break

            case "ColetaDomiciliarPontos":
                descricaoTipo = "Ponto de coleta domiciliar"
                break

            case "maquinas_reciclagem":
                descricaoTipo = "Máquina de reciclagem"
                break
        }
        if(distance <= circleRadius) {
            return (
                //Retorna o marcador com:
                //key= Id do marker
                //title= uma estrutura de condição: se marker.properties.Nome existir, o titulo será o mesmo, caso não,
                //será marker.properties.nome (A diferença dos dois é a letra N na chave "nome")
                //description= descricaoTipo retornada do switch case acima
                //coordinate= objeto coordinate criado acima
                //pinColor= cor do pin
                <Marker
                    key={marker.id}
                    title={marker.properties.Nome ? marker.properties.Nome : marker.properties.nome}
                    description={`${descricaoTipo}`}
                    coordinate={coordinate}
                    pinColor={"aqua"}
                />
            )
        }
    })
}