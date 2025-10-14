import FilterButtons from '@/src/components/HomeScreen/MapInterface/FilterButtons/FilterButtons';
import MarkersCircle from '@/src/components/HomeScreen/MapInterface/RenderMap/MarkersCircle';
import ReturnBackButton from '@/src/components/HomeScreen/MapInterface/ReturnBackButton/ReturnBackButton';
import SearchBar from "@/src/components/HomeScreen/MapInterface/Searchbar/Searchbar";
import { useCoordsCircle } from '@/src/hooks/useCoordsCircle';
import useInitialLocation from "@/src/hooks/useInitialLocation";
import useMapRef from '@/src/hooks/useMapRef';
import WithoutLocationScreen from "@/src/screens/Error/WithoutLocationScreen";
import LoadingScreen from "@/src/screens/Loading/LoadingScreen";
import { View } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';

export default function MapRender() {
    const { initialRegion, loading, error } = useInitialLocation();
    const { circleCenter, renderCircleOnPress } = useCoordsCircle();
    const mapRef = useMapRef()
    if (loading || !initialRegion) return <LoadingScreen/>
    if (error == 'Permissão negada') return <WithoutLocationScreen/>
    console.log("Região inicial / Latitude: " + initialRegion.latitude+ ", Longitude: " + initialRegion.longitude)
    return (
        <View style={{display: 'flex', flexDirection: "column", zIndex: -10, height: "100%", borderColor: "red", borderWidth: 1}}>  
            <SearchBar/>
            <ReturnBackButton initialRegion={initialRegion} mapRef={mapRef} /> 
            <MapView
                ref={mapRef}
                initialRegion={initialRegion}
                style={{width: '100%', height: '91%', zIndex: -10, position: 'absolute'}}
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
                        radius={500}
                        fillColor='rgba(253, 48, 4,0.5)'
                        strokeColor='rgba(253, 48, 4,1)'
                    />
                )}
                <MarkersCircle circleCenter={circleCenter} circleRadius={500}/>
            </MapView>
            <FilterButtons/>
        </View>  
    )
}