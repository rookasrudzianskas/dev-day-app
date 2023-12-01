//@ts-nocheck
import React, {useLayoutEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useNavigation} from "expo-router";
import { Stack } from "expo-router";

const DayOne = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Stack.Screen options={{ title: 'Day 1'}}  />
      <Text>
        byrookas 🚀 This is day one!
      </Text>
    </View>
  );
};

export default DayOne;
