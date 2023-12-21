//@ts-nocheck
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import {Stack} from "expo-router";
import Purchases from 'react-native-purchases';
import {LinearGradient} from "expo-linear-gradient";

const Paywall = () => {
  const [offerings, setOfferings] = useState([
    {
      id: 1,
      title: 'Monthly',
      price: '$9.99',
      description: 'Monthly subscription'
    },
    {
      id: 2,
      title: 'Yearly',
      price: '$99.99',
      description: 'Yearly subscription'
    }
  ]);
  // useEffect(() => {
  //   fetchOfferings();
  // }, []);

  // const fetchOfferings = async () => {
  //   try {
  //     const offerings  = await Purchases.getOfferings();
  //
  //     if (offerings.current !== null) {
  //       // Display current offering with offerings.current
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  if(!offerings) {
    return (
      <View>
        <Text>
          Loading...
        </Text>
      </View>
    )
  }

  return (
    <LinearGradient
      colors={['rgba(0,0,0,0.7)', 'transparent']}
      // style={styles.header}
      style={{ flex: 1 }}
    >
    <ImageBackground
      style={{ flex: 1, paddingTop: 100 }}
      source={{ uri: 'https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
    >
    <View className="flex-1">
      <Stack.Screen options={{ headerShown: false }} />

      <View className="flex-1">
        <Text className="text-3xl text-neutral-100 text-center">
          Unlock Everything
        </Text>
        <Text className="text-neutral-300 text-center">
          Get access to all premium features
        </Text>
      </View>

      <View className="py-10 pt-4 bg-black rounded-t-xl">
        {offerings.map((offering) => (
          <TouchableOpacity key={offering.id} className="mx-5 flex flex-row justify-between items-center py-4">
            <View className="flex flex-col">
              <Text className="text-xl text-neutral-100">
                {offering.title}
              </Text>
              <Text className="text-neutral-300">
                {offering.description}
              </Text>
            </View>
            <Text className="text-xl text-neutral-100">
              {offering.price}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
    </ImageBackground>
    </LinearGradient>
  );
};

export default Paywall;
