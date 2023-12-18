//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import IGStories from "@/src/components/day18/ig-stories";
import {Stack} from "expo-router";

const Stories = () => {
  const width = 200;
  return (
    <View className="flex-1 bg-black flex items-center justify-center">
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{
        width: width,
        aspectRatio: 9/16,
        backgroundColor: '#E1F3FA',
        borderRadius: 12,

        transform: [
          {
            perspective: 100,
          },
          {
            rotateY: '45deg'
          }
        ]
      }}>
      </View>
      {/*<IGStories />*/}
    </View>
  );
};

export default Stories;
