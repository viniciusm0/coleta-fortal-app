import { jsonTodos } from '@/src/backend/JSONTODOS';
import { getDistance } from 'geolib';
import { Marker } from "react-native-maps";

type infos = {
    id: string,
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
    let contagem = 1;

    return MarkersJson.map((marker) => {
        // console.log(contagem)
        const id = marker.id.replace(/\W/g, " ").split(" ")[0].replace("vw_", "")
        const coordinate = {
            latitude: marker.geometry.coordinates[1],
            longitude: marker.geometry.coordinates[0]
        }
        const distance = getDistance(coordinate, circleCenter)
        let descricaoTipo: string = "";
        let infos: infos = {
            id: descricaoTipo,
            nome: marker.properties.Nome ? marker.properties.Nome : marker.properties.nome,
            endereco: marker.properties.Endereço ? marker.properties.Endereço : marker.properties.endereço,
            bairro: marker.properties.Bairro ? marker.properties.Bairro : marker.properties.bairro,
        };

        function tratarDescricao(descricao: string) {
            const descArray: string[] = descricao.replace("\t", "").split("\n")
            // console.log("DesArray:")
            // console.log(descArray)
            let descricaoTratada: {} | null = null
            descArray.forEach((info: string) => {
                // console.log("info: " + info)
                // console.log(info.search(/img/i) != 1)
                if (info.search(/img/i) == -1 && info != "") {
                    // console.log("entrou no if")
                    const infoArray = info.split(":")
                    const chave = infoArray[0].toLowerCase()
                    const valor = infoArray[1]
                    // console.log("chave: " + chave)
                    // console.log("valor: " + valor)
                    // console.log(`chave+valor: {"${chave}":"${valor}"}`)
                    if (descricaoTratada == null) {
                        descricaoTratada = JSON.parse(`{"${chave}":"${valor}"}`)
                        // console.log(descricaoTratada)
                    } else {
                        // console.log("chave do else: " + chave)
                        // console.log("valor do else: " + valor)
                        // console.log(`chave+valor do else: {"${chave}":"${valor}"}`)
                        // console.log(`comando parse: {${JSON.stringify(descricaoTratada).replace(/[\{\}]/g, "")}, "${chave}":"${valor}"}`)
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
                    tipoInstituicao: marker.properties["Tipo de Instituição"]
                }
                break

            case "CentroRecondicionamentoTecnologico":
                descricaoTipo = "Centro de Recondicionamento Tecnolôgico"
                infos = {
                    ...infos,
                    funcionamento: marker.properties.Funcionamento,
                    horario: marker.properties.Horário,
                }
                break

            case "Ecopontos":
                descricaoTipo = "Eco Ponto"
                infos = {
                    ...infos,
                    situacao: marker.properties.Situação,
                    modalidade: marker.properties.Modalidade,
                    categoria: marker.properties.Categoria,
                    funcionamento: marker.properties.Funcionamento
                }
                break

            case "IlhasEcologicas":
                descricaoTipo = "Ilha Ecologica"
                infos = infos;
                break

            case "LixeirasSubterraneas":
                descricaoTipo = "Lixeira Subterrânea"
                infos = {
                    ...infos,
                    tipoDeColeta: marker.properties["Tipo de coleta"],
                    frequencia: marker.properties.Frequência,
                    capacidade: marker.properties["Capacidade (Litros)"],
                    qntLixeiras: marker.properties["Quantidade de lixeiras"],
                }
                break

            case "ColetaDomiciliarPontos":
                descricaoTipo = "Ponto de coleta domiciliar"
                // console.log(marker.properties.Descrição)
                infos = {
                    id: descricaoTipo,
                    nome: marker.properties.Nome,
                    descricao: tratarDescricao(marker.properties.Descrição ?? "a"),
                    tipoDeColeta: marker.properties["Tipo de coleta"],
                }
                contagem++
                break

            case "maquinas_reciclagem":
                descricaoTipo = "Máquina de reciclagem"
                infos = {
                    ...infos, 
                    funciona: marker.properties.funciona,
                    layer: marker.properties.layer
                }
                break

        }
        if(distance <= circleRadius) {
            return (
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