import { jsonPontosDeColeta } from '@/src/backend/JSONS';
import { getDistance } from 'geolib';
import { Text, View } from "react-native";
import { Marker } from "react-native-maps";

export default function MarkersCircle(props : any) {
    const circleCenter= props.circleCenter
    const circleRadius = props.circleRadius
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

    // const MarkersJson = jsonCentroRecTec.features
    const MarkersJson = jsonPontosDeColeta.features


    return MarkersJson.map((marker) => {
        const coordinate = {
            latitude: marker.geometry.coordinates[1],
            longitude: marker.geometry.coordinates[0]
        }
        const distance = getDistance(coordinate, circleCenter)

        if(distance <= circleRadius) {
            return (
                <Marker
                    key={marker.id}
                    title={marker.properties.Nome}
                    description={`${marker.properties.Descrição}`}
                    coordinate={coordinate}
                    pinColor={"aqua"}
                >
                    <View>
                        <Text>Testando</Text>
                    </View>
                </Marker>
            )
        }
    })
  
    
}