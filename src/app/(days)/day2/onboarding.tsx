//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Stack, useRouter} from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ONBOARDING_STEPS = [
  {
    title: 'Track Every Penny',
    description: 'Monitor your spending and contribution ensuring every penny is accounted for. This will help you to make better financial decisions.',
    image: 'money',
    button: 'Get Started',
  },
  {
    title: 'Track Every Coin',
    description: 'Monitor your spending and contribution ensuring every penny is accounted for. This will help you to make better financial decisions.',
    image: 'money',
    button: 'Continue',
  },
  {
    title: 'Track Every Dollar',
    description: 'Monitor your spending and contribution ensuring every penny is accounted for. This will help you to make better financial decisions.',
    image: 'money',
    button: 'Confirm & Pay',
  },
]

const Onboarding = () => {
  const router = useRouter();
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

            <View className={"flex flex-row"}>
              <TouchableOpacity activeOpacity={0.7} className="" style={styles.skipButton}>
                <Text className="text-gray-200 text-lg spacing-wide">
                  Skip
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push('/da2/onboarding2')} activeOpacity={0.7} className="" style={styles.button}>
                <Text className="text-gray-200 text-lg spacing-wide">
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
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
  },
  button: {
    backgroundColor: '#302E38',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  skipButton: {
    backgroundColor: '#15141A',
    padding: 13,
    borderRadius: 10,
    width: 100,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#302E38',
    marginRight: 10,
  },
});
