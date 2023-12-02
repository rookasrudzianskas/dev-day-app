//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {Stack, useRouter} from "expo-router";

const Day2 = () => {
  const router = useRouter();
  return (
    <View className="flex flex-1 items-center justify-center">
      <Stack.Screen options={{ title: 'Day 2 Onboarding'}} />
      <Button title={'Go To Onboarding'} onPress={() => router.push('/day2/onboarding')}></Button>
    </View>
  );
};

export default Day2;
