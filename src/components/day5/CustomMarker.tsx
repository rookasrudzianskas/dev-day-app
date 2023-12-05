//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Marker} from "react-native-maps";

const CustomMarker = ({apartment, isSelected}: any) => {
  return (
    <Marker
      coordinate={{
        latitude: apartment.latitude,
        longitude: apartment.longitude,
      }}
    >
      <View
        style={{backgroundColor: isSelected ? "black" : "white",
          padding: 5, borderRadius: 20, borderColor: "grey", borderWidth: 1
        }}>
        <Text style={{color: isSelected ? "white" : "black", fontWeight: "bold", fontSize: 10}}>${apartment.price}</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
