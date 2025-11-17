import FilterButtons from '@/src/components/HomeScreen/MapInterface/FilterButtons/FilterButtons';
import MarkersCircle from '@/src/components/HomeScreen/MapInterface/RenderMap/MarkersCircle';
import ReturnBackButton from '@/src/components/HomeScreen/MapInterface/ReturnBackButton/ReturnBackButton';
import SearchBar from "@/src/components/HomeScreen/MapInterface/Searchbar/Searchbar";
import { useCoordsCircle } from '@/src/hooks/useCoordsCircle';
import useInitialLocation from "@/src/hooks/useInitialLocation";
import useMapRef from '@/src/hooks/useMapRef';
import WithoutLocationScreen from "@/src/screens/Error/WithoutLocationScreen";
import LoadingScreen from "@/src/screens/Loading/LoadingScreen";
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';

export default function MapRender(props: any) {
    const teste = props.radiusInfo
    const [radius, setRadius] = useState(300);
    const [showRadiusMenu, setShowRadiusMenu] = useState(false);
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
                    //pinColor='#3399ff'
                    image={require('@/assets/images/user1.png')}
                    key={1}
                    title="Sua localização"
                    description="Esta é sua localização."
                    coordinate={{latitude: initialRegion.latitude, longitude: initialRegion.longitude}}
                />
                {circleCenter && (
                    <Circle
                        center={circleCenter}
                        radius={teste}
                        fillColor='rgba(226, 231, 236, 0.2)'
                        strokeColor='rgba(74, 144, 226, 0.3)'
                        strokeWidth={25}
                    />
                )}
                <MarkersCircle circleCenter={circleCenter} circleRadius={teste} />
            </MapView>
            <View style={styles.radiusMenuWrapper}>
    {/* <Pressable
        style={styles.radiusMainButton}
        onPress={() => setShowRadiusMenu(!showRadiusMenu)}
    >
        <Text style={styles.radiusMainButtonText}>Raio</Text>
    </Pressable> */}


    {/* {showRadiusMenu && (
        <View style={styles.radiusMenu}>
            <Pressable style={styles.radiusOption} onPress={() => { setRadius(300); setShowRadiusMenu(false); }}>
                <Text>300m</Text>
            </Pressable>

            <Pressable style={styles.radiusOption} onPress={() => { setRadius(500); setShowRadiusMenu(false); }}>
                <Text>500m</Text>
            </Pressable>

            <Pressable style={styles.radiusOption} onPress={() => { setRadius(1000); setShowRadiusMenu(false); }}>
                <Text>1 km</Text>
            </Pressable>

            <Pressable style={styles.radiusOption} onPress={() => { setRadius(2000); setShowRadiusMenu(false); }}>
                <Text>2 km</Text>
            </Pressable>
        </View>
    )} */}
</View>
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