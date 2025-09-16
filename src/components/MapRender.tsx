import React, { useRef } from 'react';
import MapView, {Marker, Circle} from 'react-native-maps';
import useLocation from "../hooks/useLocation";
import WithoutLocationScreen from "../screens/Error/WithoutLocationScreen"
import LoadingScreen from "../screens/Loading/LoadingScreen";
import { Text, View, Pressable } from 'react-native';
import { Styles } from "../screens/Home/HomeStyles"

function MapRender() {
    const { location, loading, error } = useLocation();
    const mapRef = useRef(null)

    const initialRegion = location ? {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    } : {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
    }

    const { latitude, longitude, latitudeDelta, longitudeDelta } = initialRegion

    const targetRegion = {
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta
    }

    const animateMapToInitalRegion = () => {
        if (mapRef.current) {
            mapRef.current.animateToRegion(targetRegion, 1000)
        }
    }

    if (loading) return <LoadingScreen/>
    if (error == 'Permissão negada') return <WithoutLocationScreen/>

    return (
        <>
            <MapView
                ref={mapRef}
                initialRegion={initialRegion}
                style={{width: '100%', height: '100%', zIndex: -10, position: 'absolute'}}
            >
            <Marker
                key={1}
                title="Sua localização"
                description="Esta é sua localização."
                coordinate={{latitude: initialRegion.latitude, longitude: initialRegion.longitude}}
            />
            <Circle
                center={{
                    latitude: initialRegion.latitude,
                    longitude: initialRegion.longitude,
                }}
                radius={300}
                fillColor='rgba(253, 48, 4,0.5)'
                strokeColor='rgba(253, 48, 4,1)'
            />
            </MapView>  
            <Pressable 
                style={Styles.container}
                onPress={animateMapToInitalRegion}
            >
                <Text style={Styles.button}>Retornar</Text>
            </Pressable>
        </>  
    )
}

export default MapRender