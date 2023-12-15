//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Stack } from 'expo-router';

const TodoScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'TODO' }} />
      <Text>
        byrookas 🚀
      </Text>
    </View>
  );
};

export default TodoScreen;
