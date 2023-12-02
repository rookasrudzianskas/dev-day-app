//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Stack} from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Onboarding = () => {
  return (
    <View className="pt-16 bg-[#15141A] h-screen items-center justify-center">
      <Stack.Screen options={{ headerShown: false}} />
      <View className="bg-[#15141A] flex items-start gap-y-2 justify-center shadow-2xl h-full my-10 mx-6 rounded-xl">
        <FontAwesome name="money" size={40} color="#FDFDFD" />
        <Text style={styles.title} className="text-gray-200">
          Track Every Penny
        </Text>
        <Text className="text-gray-300 text-lg">
          Monitor your spending and contribution ensuring every penny is accounted for. This will help you to make better financial decisions.
        </Text>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15141A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 26,
    letterSpacing: 1.3,
  }
});
