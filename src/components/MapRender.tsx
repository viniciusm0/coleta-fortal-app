import { useRef } from 'react';
import MapView, {Marker, Circle} from 'react-native-maps';
import useInitialLocation from "../hooks/useInitialLocation";
import WithoutLocationScreen from "../screens/Error/WithoutLocationScreen"
import LoadingScreen from "../screens/Loading/LoadingScreen";
import { Text, Pressable } from 'react-native';
import { Styles } from "../screens/Home/HomeStyles"
import { useCoordsCircle } from '../hooks/useCoordsCircle'

function MapRender() {
    const { initialRegion, loading, error } = useInitialLocation();
    const { circleCenter, getPositionPressed } = useCoordsCircle();
    const mapRef = useRef<MapView | null>(null)
    
    const animateMapToInitalRegion = () => {
        if (mapRef.current) {
            mapRef.current.animateToRegion(initialRegion, 1000)
        }
    }

    if (loading) return <LoadingScreen/>
    if (error == 'Permissão negada') return <WithoutLocationScreen/>
    console.log(initialRegion)
    console.log(circleCenter)
    return (
        <>
            <MapView
                ref={mapRef}
                initialRegion={initialRegion}
                style={{width: '100%', height: '100%', zIndex: -10, position: 'absolute'}}
                onLongPress={getPositionPressed}
            >
            <Marker
                key={1}
                title="Sua localização"
                description="Esta é sua localização."
                coordinate={{latitude: initialRegion.latitude, longitude: initialRegion.longitude}}
            />
            {circleCenter && (
                <Circle
                    center={circleCenter}
                    radius={300}
                    fillColor='rgba(253, 48, 4,0.5)'
                    strokeColor='rgba(253, 48, 4,1)'
                />
            )}
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