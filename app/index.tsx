import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView from 'react-native-maps';
import "../global.css";

export default function Index() {
  return (
    <View className="flex w-screen h-screen items-center justify-center z-10">
      <Text className="text-xl font-bold text-blue-500">
        Mapa com nativewind integrado
      </Text>
      <MapView style={{width: '100%', height: '100%', zIndex: -10, position: 'absolute'}}/>
    </View>
  );
}
