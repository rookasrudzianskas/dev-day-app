//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Stack} from "expo-router";
import MapView, {Marker} from "react-native-maps";
import {APARTMENTS} from "@/src/assets/data/day5/data";
const Airbnb = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Day 5 Animated Maps', headerShown: false}} />
      <View className="flex-1">
        <MapView
          style={styles.map}
          provider="google"
          initialRegion={{
            latitude: 54.6896,
            longitude: 25.2799,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {APARTMENTS.map((apartment, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: apartment.latitude,
                longitude: apartment.longitude,
            }}
              title={apartment.title}
              description={`$${apartment.price} / night`}
              // image={{uri: 'custom_pin'}}
            >
              <View>
                <Text>{apartment.price}</Text>
              </View>
            </Marker>
          ))}
        </MapView>
      </View>
    </>
  );
};

export default Airbnb;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});