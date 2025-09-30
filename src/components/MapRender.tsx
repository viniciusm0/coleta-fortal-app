import MapView, { Circle, Marker } from 'react-native-maps';
import MarkersCircle from '../components/MarkersCircle';
import ReturnBackButton from '../components/ReturnBackButton/ReturnBackButton';
import { useCoordsCircle } from '../hooks/useCoordsCircle';
import useInitialLocation from "../hooks/useInitialLocation";
import useMapRef from '../hooks/useMapRef';
import WithoutLocationScreen from "../screens/Error/WithoutLocationScreen";
import LoadingScreen from "../screens/Loading/LoadingScreen";

export default function MapRender() {
    const { initialRegion, loading, error } = useInitialLocation();
    const { circleCenter, renderCircleOnPress } = useCoordsCircle();
    const mapRef = useMapRef()
    if (loading || !initialRegion) return <LoadingScreen/>
    if (error == 'Permissão negada') return <WithoutLocationScreen/>
    console.log("Região inicial / Latitude: " + initialRegion.latitude+ ", Longitude: " + initialRegion.longitude)
    return (
        <>
            <MapView
                ref={mapRef}
                initialRegion={initialRegion}
                style={{width: '100%', height: '100%', zIndex: -10, position: 'absolute'}}
                onLongPress={renderCircleOnPress}
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
                <MarkersCircle circleCenter={circleCenter} circleRadius={300} />
            </MapView>

            <ReturnBackButton initialRegion={initialRegion} mapRef={mapRef} /> 
        </>  
    )
}