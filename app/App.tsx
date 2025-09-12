import React, {useState, useEffect} from "react";
import { Text, View } from "react-native";
import MapView, {Marker} from 'react-native-maps';
import "../global.css";
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function getLocation () {
    useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão de acesso à localização foi negada');
        return
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })()
    }, []);

    let text = 'Carregando...';
    if (errorMsg) {
      text = errorMsg
    } else if (location) {
      text = `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`
    }
  }

  getLocation()

  let region =
    location
      ? {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }
      : null;

  return (
    <View className="flex w-screen h-screen items-center justify-center z-10">
      {region && (
        <>
          <MapView
            initialRegion={region}
            style={{width: '100%', height: '100%', zIndex: -10, position: 'absolute'}}
          >
          <Marker
            key={1}
            title="Marcador teste"
            description="Este é um marcador teste"
            coordinate={{latitude: region.latitude, longitude: region.longitude}}
          />
          </MapView>
        </>
      )}
    </View>
  );
}
