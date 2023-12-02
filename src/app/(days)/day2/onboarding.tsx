//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Stack} from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Onboarding = () => {
  return (
    <View className="pt-16 bg-[#15141A] h-screen items-center justify-center">
      <Stack.Screen options={{ headerShown: false}} />
      <View className="bg-[#15141A] h-full justify-between">
        <FontAwesome style={styles.image} name="money" size={40} color="#FDFDFD" />
          <View className="mb-16">
            <Text style={styles.title} className="text-gray-200">
              Track Every Penny
            </Text>
            <Text className="text-gray-300 text-lg spacing-wide">
              Monitor your spending and contribution ensuring every penny is accounted for. This will help you to make better financial decisions.
            </Text>
          </View>
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
    fontSize: 35,
    marginBottom: 10,
    letterSpacing: 1.3,
  },
  image: {
    fontFamily: 'Inter',
    fontSize: 60,
    letterSpacing: 1.3,
    alignSelf: 'center',
    margin: 20,
    marginTop: 50,
  },
  footer: {
    margin: 'auto'
  }
});
