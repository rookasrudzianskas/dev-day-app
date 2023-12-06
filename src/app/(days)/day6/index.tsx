//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {Stack, useRouter} from "expo-router";

const Day2 = () => {
  const router = useRouter();
  return (
    <View className="flex flex-1 items-center justify-center">
      <Stack.Screen options={{ title: 'Day 6 Tinder'}} />
      <Button title={'Go To Tinder'} onPress={() => router.push('/day6/tinder')}></Button>
    </View>
  );
};

export default Day2;
