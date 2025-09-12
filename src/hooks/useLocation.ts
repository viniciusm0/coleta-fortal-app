import {useState, useEffect, useCallback} from "react";
import * as Location from 'expo-location';

export default function useLocation() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const requestLocation = useCallback(async () => {
    setLoading(true);
    try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        setError('Permissão negada')
        setLocation(null);
        setLoading(false);
        return
    }
    const loc = await Location.getCurrentPositionAsync({})
    setLocation(loc);
    } catch (e: any) {
    setError(e?.message ?? "Erro ao obter localização");
    } finally {
    setLoading(false);
    }
    }, []);

    useEffect(() => {
    requestLocation();
    }, [requestLocation]);

    return { location, error, loading, requestLocation, setLocation }
}
