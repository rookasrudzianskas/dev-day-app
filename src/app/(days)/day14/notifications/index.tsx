//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Stack} from "expo-router";

const Notifications = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Notifications'}} />
      <Text>
        byrookas 🚀
      </Text>
    </View>
  );
};

export default Notifications;
