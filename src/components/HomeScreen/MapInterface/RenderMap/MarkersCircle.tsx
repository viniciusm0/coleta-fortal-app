import { jsonTodos } from '@/src/backend/JSONTODOS';
import { getDistance } from 'geolib';
import { Marker } from "react-native-maps";

type infos = {
    id?: string,
    nome?: string,
    endereco?: string | null,
    bairro?: string,
    descricao?: {} | null,
    funcionamento?: string | null,
    horario?: string | null,
    situacao?: string | null,
    modalidade?: string | null,
    categoria?: string | null,
    tipoDeColeta?: string | null,
    frequencia?: string | null,
    capacidade?: string | null,
    qntLixeiras?: number,
    funciona?: string | null,
    layer?: string | null,
    tipoInstituicao?: string    
}

export default function MarkersCircle(props : any) {
    const circleCenter= props.circleCenter
    const circleRadius = props.circleRadius
    const setMarkerInfo = props.markerInfo
    const mapRef = props.mapRef
    const MarkersJson = jsonTodos.features

    return MarkersJson.map((marker) => {
        const id = marker.id.replace(/\W/g, " ").split(" ")[0].replace("vw_", "")
        const coordinate = {
            latitude: marker.geometry.coordinates[1],
            longitude: marker.geometry.coordinates[0]
        }
        const distance = getDistance(coordinate, circleCenter)
        let descricaoTipo: string = "";
        let image: any = null;
        let infos: infos = {
            nome: marker.properties.Nome ? marker.properties.Nome : marker.properties.nome,
            endereco: marker.properties.Endereço ? marker.properties.Endereço : marker.properties.endereço,
            bairro: marker.properties.Bairro ? marker.properties.Bairro : marker.properties.bairro,
        };

        function tratarDescricao(descricao: string) {
            const descArray: string[] = descricao.replace("\t", "").split("\n")
            let descricaoTratada: {} | null = null
            descArray.forEach((info: string) => {
                if (info.search(/img/i) == -1 && info != "") {
                    const infoArray = info.split(":")
                    const chave = infoArray[0].toLowerCase()
                    const valor = infoArray[1] ?? "Não informado"
                    if (descricaoTratada == null) {
                        descricaoTratada = JSON.parse(`{"${chave}":"${valor}"}`)
                    } else {
                        descricaoTratada = JSON.parse(`{${JSON.stringify(descricaoTratada).replace(/[\{\}]/g, "")}, "${chave}":"${valor}"}`)
                    }
                }    
            })
            return descricaoTratada
        }

        switch(id) {
            case "Biodigestores":
                descricaoTipo = "Bio digestor"
                infos = {
                    ...infos,
                    id: descricaoTipo,
                    tipoInstituicao: marker.properties["Tipo de Instituição"]
                }
                image = require('@/assets/images/Biodigestor (1).png')
                break

            case "CentroRecondicionamentoTecnologico":
                descricaoTipo = "Centro de Recondicionamento Tecnolôgico"
                infos = {
                    ...infos,
                    id: descricaoTipo,
                    funcionamento: marker.properties.Funcionamento,
                    horario: marker.properties.Horário,
                }
                image = require('@/assets/images/Centrotecnologico1.png')
                break

            case "Ecopontos":
                descricaoTipo = "Eco Ponto"
                infos = {
                    ...infos,
                    id: descricaoTipo,
                    situacao: marker.properties.Situação,
                    modalidade: marker.properties.Modalidade,
                    categoria: marker.properties.Categoria,
                    funcionamento: marker.properties.Funcionamento
                }
                image = require('@/assets/images/ecoponto.png') 

            case "IlhasEcologicas":
                descricaoTipo = "Ilha Ecologica"
                infos = {
                    ...infos,
                    id: descricaoTipo
                };
                image = require('@/assets/images/IlhaEcologica (1).png')
                break

            case "LixeirasSubterraneas":
                descricaoTipo = "Lixeira Subterrânea"
                infos = {
                    ...infos,
                    id: descricaoTipo,
                    tipoDeColeta: marker.properties["Tipo de coleta"],
                    frequencia: marker.properties.Frequência,
                    capacidade: marker.properties["Capacidade (Litros)"],
                    qntLixeiras: marker.properties["Quantidade de lixeiras"],
                }
                image = require('@/assets/images/ecoponto.png')
                break

            case "ColetaDomiciliarPontos":
                descricaoTipo = "Ponto de coleta domiciliar"
                infos = {
                    id: descricaoTipo,
                    nome: marker.properties.Nome,
                    descricao: tratarDescricao(marker.properties.Descrição ?? "Não informado"),
                    tipoDeColeta: marker.properties["Tipo de coleta"],
                }
                image = require('@/assets/images/Coletadomiciliar (1).png')
                break

            case "maquinas_reciclagem":
                descricaoTipo = "Máquina de reciclagem"
                infos = {
                    ...infos,
                    id: descricaoTipo, 
                    funciona: marker.properties.funciona,
                    layer: marker.properties.layer
                }
                image = require('@/assets/images/Reciclagemmaquina.png')
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
                    onSelect={() => {
                        setMarkerInfo(infos)
                        console.log(infos)
                        mapRef.current.animateToRegion({...coordinate, latitudeDelta: 0.001, longitudeDelta: 0.001}, 1000)
                    }}
                    onDeselect={() =>  {
                        setMarkerInfo(null)
                        mapRef.current.animateToRegion({...coordinate, latitudeDelta: 0.01, longitudeDelta: 0.01}, 1000)
                    }}
                   {...(image ? { image } : {})}
                />
            )
        }
        
    })
}

// const Markers = [
    //     {id: '2', coordinate: { latitude: -3.7910, longitude: -38.6060}, title: 'Marcador 1', description: 'Este é o marcador 1'},
    //     {id: '3', coordinate: { latitude: -3.7960, longitude: -38.6089}, title: 'Marcador 2', description: 'Este é o marcador 2'},
    //     {id: '4', coordinate: { latitude: -3.7980, longitude: -38.6040}, title: 'Marcador 3', description: 'Este é o marcador 3'},
    //     {id: '5', coordinate: { latitude: -3.7940, longitude: -38.6020}, title: 'Marcador 4', description: "Esta é sua localização."},
    // ]
    
    // return Markers.map((marker) => {
    //     const distance = getDistance(marker.coordinate, circleCenter)
    //     if(distance <= circleRadius) {
    //         return (
    //             <Marker
    //                 key={marker.id}
    //                 title={marker.title}
    //                 coordinate={marker.coordinate}
    //                 pinColor={"aqua"}
    //             />
    //         )
    //     }
    // })