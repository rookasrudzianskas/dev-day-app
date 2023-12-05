//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Marker} from "react-native-maps";

const CustomMarker = ({apartment, setSelectedApartment, selectedApartment}: any) => {
  return (
    <Marker
      onPress={() => setSelectedApartment(apartment)}
      coordinate={{
        latitude: apartment.latitude,
        longitude: apartment.longitude,
      }}
    >
      <View
        style={{backgroundColor: (selectedApartment === apartment) ? "black" : "white",
          padding: 5, borderRadius: 20, borderColor: "grey", borderWidth: 1
        }}>
        <Text style={{color: (selectedApartment === apartment) ? "white" : "black", fontWeight: "bold", fontSize: 10}}>${apartment.price}</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
