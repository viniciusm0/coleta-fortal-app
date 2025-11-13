import { jsonTodos } from '@/src/backend/JSONTODOS';
import { getDistance } from 'geolib';
import { Marker } from "react-native-maps";

export default function MarkersCircle(props : any) {
    const circleCenter= props.circleCenter
    const circleRadius = props.circleRadius
    const setMarkerInfo = props.markerInfo
    const mapRef = props.mapRef
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

    const MarkersJson = jsonTodos.features
    return MarkersJson.map((marker) => {
        const id = marker.id.replace(/\W/g, " ").split(" ")[0].replace("vw_", "")
        const coordinate = {
            latitude: marker.geometry.coordinates[1],
            longitude: marker.geometry.coordinates[0]
        }
        const distance = getDistance(coordinate, circleCenter)
        let descricaoTipo;
        
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
                <Marker
                    key={marker.id}
                    title={marker.properties.Nome ? marker.properties.Nome : marker.properties.nome}
                    description={`${descricaoTipo}`}
                    coordinate={coordinate}
                    pinColor={"aqua"}
                    onSelect={() => {
                        setMarkerInfo(marker)
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