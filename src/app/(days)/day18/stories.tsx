//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import IGStories from "@/src/components/day18/ig-stories";
import {Stack} from "expo-router";
import Animated, {interpolate, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";

const Stories = () => {
  const width = 200;
  const progress = useSharedValue(0);



  const anim = useAnimatedStyle(() => ({
    transform: [
      {
        perspective: 300,
      },
      {
        rotateY: `${interpolate(progress.value, [0, 1], [-90, 90])}deg`,
        // rotateZ: '45deg',
      }
    ]
  }));

  const runAnimation = () => {
    progress.value = 0;
    progress.value = withTiming(1);
  }

  return (
    <View className="flex-1 bg-black flex items-center justify-center">
      <Stack.Screen options={{ headerShown: false }} />
      <Animated.View style={[{
        width: width,
        aspectRatio: 9/16,
        backgroundColor: '#E1F3FA',
        borderRadius: 12,
        transformOrigin: [
          '50%',
          '50%',
          -width / 2,
        ],

      }, anim]}>
      </Animated.View>
      <Button title={'Run'} onPress={() => runAnimation()}></Button>
      {/*<IGStories />*/}
    </View>
  );
};

export default Stories;
