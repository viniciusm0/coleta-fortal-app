import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView from 'react-native-maps';

export default function Index() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  map: {
    width: '100%',
    height: '100%',
  }
})
