//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Stack} from "expo-router";
import Purchases from 'react-native-purchases';

const Paywall = () => {

  return (
    <View className="pt-16 flex-1 bg-black text-white">
      <Stack.Screen options={{ headerShown: false }} />

      <Text className="text-white">
        byrookas 🚀
      </Text>
    </View>
  );
};

export default Paywall;
