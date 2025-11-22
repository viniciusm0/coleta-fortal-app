import FilterButtons from '@/src/components/HomeScreen/MapInterface/FilterButtons/FilterButtons';
import RenderInfosMarker from "@/src/components/HomeScreen/MapInterface/MarkerInfo/RenderInfosMarker";
import MarkersCircle from '@/src/components/HomeScreen/MapInterface/RenderMap/MarkersCircle';
import ReturnBackButton from '@/src/components/HomeScreen/MapInterface/ReturnBackButton/ReturnBackButton';
import RenderMarkerSearch from "@/src/components/HomeScreen/MapInterface/Searchbar/RenderMarkerSearch";
import SearchBar from "@/src/components/HomeScreen/MapInterface/Searchbar/Searchbar";
import { useCoordsCircle } from '@/src/hooks/useCoordsCircle';
import useInitialLocation from "@/src/hooks/useInitialLocation";
import useMapRef from '@/src/hooks/useMapRef';
import WithoutLocationScreen from "@/src/screens/Error/WithoutLocationScreen";
import LoadingScreen from "@/src/screens/Loading/LoadingScreen";
import { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';
import { Styles } from "./MapRenderStyles";

type info = {
    nome: string,
    endereco: string,
    bairro: string,
    cords: {
        latitude: number,
        longitude: number,
        latidudeDelta: number,
        longitudeDelta: number
    }
}

export default function MapRender(props: any) {
    const radius = props.radiusInfo
    const { initialRegion, loading, error } = useInitialLocation();
    const { circleCenter, renderCircleOnPress } = useCoordsCircle();
    const [markerInfo, setMarkerInfo] = useState<{} | null>(null)
    const [pontoSearched, setPontoSearched] = useState<boolean>(false)
    const [pontoSearch, setPontoSearch] = useState<{} | null>(null)
    const [showResult, setShowResult] = useState<boolean>(false)
    const mapRef = useMapRef()
    const textInputRef = useRef(null)

    const handleMarkerInfo = (marker: {}) => {
        if (marker != null) {
            setMarkerInfo(marker)
        } else {
            setMarkerInfo(null)
        }
    }

    const handleInfosPontoResult = (infos: info, marker: {}) => {
        if (infos != null && marker != null) {
                setPontoSearched(true)
                setPontoSearch(marker)
                mapRef.current.animateToRegion(infos.cords, 1500) 
        } else {
            setPontoSearched(false)
        }
    }

    if (loading || !initialRegion) return <LoadingScreen/>
    if (error == 'Permissão negada') return <WithoutLocationScreen/>
    console.log("Região inicial / Latitude: " + initialRegion.latitude+ ", Longitude: " + initialRegion.longitude)
    return (
        <View style={Styles.containerMap}>  
            <SearchBar setInfoPonto={handleInfosPontoResult} showResult={showResult} setShowResult={setShowResult} textInputRef={textInputRef}/>
            <ReturnBackButton initialRegion={initialRegion} mapRef={mapRef} /> 
            <MapView
                ref={mapRef}
                initialRegion={initialRegion}
                style={Styles.mapViewStyle}
                onLongPress={renderCircleOnPress}
                onPress={() => {
                    setMarkerInfo(null)
                    setShowResult(false)
                    textInputRef.current.blur()
                }}
            >
                <Marker
                    //pinColor='#3399ff'
                    image={require('@/assets/images/user1.png')}
                    key={1}
                    title="Sua localização"
                    description="Esta é sua localização."
                    coordinate={{latitude: initialRegion.latitude, longitude: initialRegion.longitude}}
                />
                {pontoSearched ? <RenderMarkerSearch mapRef={mapRef} markerInfo={pontoSearch} handleMarkerInfo={handleMarkerInfo}/> : <></>}
                {circleCenter && (
                    <Circle
                        center={circleCenter}
                        radius={radius}
                        fillColor='rgba(226, 231, 236, 0.2)'
                        strokeColor='rgba(74, 144, 226, 0.3)'
                        strokeWidth={25}
                    />
                )}
                <MarkersCircle circleCenter={circleCenter} markerInfo={handleMarkerInfo} mapRef={mapRef} circleRadius={radius} />
            </MapView>
            {markerInfo != null ? <RenderInfosMarker MarkerInfo={markerInfo}/> : <></>}
        <FilterButtons/>
    </View>  
    )
}

const styles = StyleSheet.create({
    radiusMenuWrapper: {
        position: "absolute",
        bottom: 150,
        right: 20,
        zIndex: 50,
        alignItems: "flex-end",
    },

    radiusMainButton: {
        backgroundColor: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 10,
        elevation: 5,
    },

    radiusMainButtonText: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#000",
    },

    radiusMenu: {
        marginTop: 10,
        backgroundColor: "#579fc9ff",
        borderRadius: 10,
        padding: 10,
        elevation: 5,
        gap: 10
    },

    radiusOption: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        backgroundColor: "#eee"
    }
});