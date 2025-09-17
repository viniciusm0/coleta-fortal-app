import {useState, useEffect, useCallback} from "react";
import * as Location from 'expo-location';
import { Region } from "react-native-maps";

export default function useInitialLocation() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [initialRegion, setInitialRegion] = useState<Region>({
        latitude: 0, 
        longitude: 0, 
        latitudeDelta: 0, 
        longitudeDelta: 0
    })

    const requestLocation = useCallback(async () => {
        setLoading(true);

        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permissão negada')
                return
            }
            const loc = await Location.getCurrentPositionAsync({})
            setInitialRegion({
                latitude: loc.coords.latitude,
                longitude: loc.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            })
        } catch (e: any) {
            setError(e.message ?? "Erro ao obter localização");
        } finally {
            setLoading(false);
        }
    }, []);
    
    useEffect(() => { requestLocation() }, [requestLocation]);

    return { initialRegion, error, loading, requestLocation}
}
