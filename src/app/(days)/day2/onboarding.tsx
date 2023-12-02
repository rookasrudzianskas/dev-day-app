//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Stack} from "expo-router";

const Onboarding = () => {
  return (
    <View className="pt-16">
      <Stack.Screen options={{ headerShown: false}} />
      <Text>
        byrookas 🚀
      </Text>
    </View>
  );
};

export default Onboarding;
