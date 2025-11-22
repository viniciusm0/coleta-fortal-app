import { Marker } from "react-native-maps"

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

export default function RenderMarkerSearch(props: any) {
    const marker = props.markerInfo
    const handleMarkerInfo = props.handleMarkerInfo
    const mapRef = props.mapRef
    const id = marker.id.replace(/\W/g, " ").split(" ")[0].replace("vw_", "")
    const coordinate = {
        latitude: marker.geometry.coordinates[1],
        longitude: marker.geometry.coordinates[0]
    }
        
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

    handleMarkerInfo(infos)

    return (
        <Marker
            key={marker.id}
            title={marker.properties.Nome ? marker.properties.Nome : marker.properties.nome}
            description={`${descricaoTipo}`}
            coordinate={coordinate}
            pinColor={"aqua"}
            onSelect={() => {
                handleMarkerInfo(infos)
                mapRef.current.animateToRegion({...coordinate, latitudeDelta: 0.001, longitudeDelta: 0.001}, 1000)
            }}
            onDeselect={() =>  {
                handleMarkerInfo(null)
                mapRef.current.animateToRegion({...coordinate, latitudeDelta: 0.01, longitudeDelta: 0.01}, 1000)
            }}
            {...(image ? { image } : {})}
        />
    )
}