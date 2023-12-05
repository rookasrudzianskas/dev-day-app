//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const ApartmentListItem = ({apartment}: any) => {
  return (
    <View style={styles.card} className="rounded-md flex flex-row">
      <Image
        source={{uri: apartment.image}}
        style={{width: '35%', height: 150}}
        className="rounded-l-md mr-4"
      />
      <View className="max-w-[40%] mt-3">
        <Text style={styles.title} className="text-gray-900">{apartment.title}</Text>
        <Text className="text-gray-500">{apartment.address}</Text>
        <View className="flex flex-row justify-between my-auto mt-10">
          <Text className="text-gray-500 font-semibold">${apartment.price}</Text>
          <Text className="text-gray-500">★ {apartment.rating}({apartment.numberOfStars})</Text>
        </View>
      </View>
    </View>
  );
};

export default ApartmentListItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 50,
    left: 10,
    right: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  }
})
