import MapView, {Marker} from 'react-native-maps';
import useLocation from "../hooks/useLocation";
import WithoutLocationScreen from "../screens/Error/WithoutLocationScreen"
import LoadingScreen from "../screens/Loading/LoadingScreen";

function MapRender() {
    const { location, loading } = useLocation();

    const region = location ? {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    } : null

    if (loading) return <LoadingScreen/>
    if (!region) return <WithoutLocationScreen/>

    return (
        <MapView
            initialRegion={region}
            style={{width: '100%', height: '100%', zIndex: -10, position: 'absolute'}}
            >
            <Marker
                key={1}
                title="Sua localização"
                description="Esta é sua localização."
                coordinate={{latitude: region.latitude, longitude: region.longitude}}
            />
        </MapView>       
    )
}

export default MapRender