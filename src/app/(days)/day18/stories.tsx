//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button, Image} from 'react-native';
import IGStories from "@/src/components/day18/ig-stories";
import {Stack} from "expo-router";
import Animated, {interpolate, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import {USER_STORIES} from "@/src/components/day18/stories";
const width = 300;

const AnimatedPage = ({story, index, pageIndex, children}) => {
  const anim = useAnimatedStyle(() => ({
    transform: [
      {
        perspective: 300,
      },
      {
        rotateY: `${interpolate(
          pageIndex.value, 
          [index - 1, index, index + 1], 
          [90, 0, -90]
        )}deg`,
        // rotateZ: '45deg',
      }
    ]
  }));
  return (
    <Animated.View
      style={[{
        zIndex: 100 - index,
        width: width,
        aspectRatio: 9 / 16,
        position: 'absolute',
        backgroundColor: 'black',
        borderRadius: 12,
        backfaceVisibility: 'hidden',
        transformOrigin: [
          '50%',
          '50%',
          -width / 2,
        ],
        overflow: 'hidden',

      }, anim]}>
      {children}
    </Animated.View>
  )
}

const Stories = () => {
  const pageIndex = useSharedValue(0);
  const PAGES = ['#E1F3FA', '#308D46', 'red', 'yellow', 'blue'];
  const allStories = USER_STORIES.flatMap((user) => user.stories);

  const runAnimation = () => {
    pageIndex.value = withTiming(Math.floor(pageIndex.value + 1), {
      duration: 1000,
    });
  }

  const goBack = () => {
    pageIndex.value = withTiming(Math.floor(pageIndex.value - 1), {
      duration: 1000,
    });
  }

  return (
    <View className="flex-1 bg-black items-center justify-center">
      <Stack.Screen options={{ headerShown: false }} />
      {allStories.map((story, index) => (
        <AnimatedPage key={index} story={story} pageIndex={pageIndex} index={index}>
          <Image
            source={{ uri: story.uri }}
            style={{ width: '100%', height: '100%', borderRadius: 12 }}
          />
        </AnimatedPage>
      ))}
      <View style={{position: 'absolute', bottom: 50}}>
        <Button title={'Run'} onPress={() => runAnimation()}></Button>
        <Button title={'Go Back'} onPress={() => goBack()}></Button>
      </View>
      {/*<IGStories />*/}
    </View>
  );
};

export default Stories;
