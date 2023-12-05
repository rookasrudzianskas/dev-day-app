//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Stack} from "expo-router";
import MapView from "react-native-maps";

const Airbnb = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Day 5 Animated Maps', headerShown: false}} />
      <View className="flex-1">
        <MapView
          style={styles.map}
          provider="google"
          initialRegion={{
            latitude: 54.792583,
            longitude: 25.343330,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    </>
  );
};

export default Airbnb;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
