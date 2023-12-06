//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import Animated from "react-native-reanimated";
import {Gesture, GestureDetector} from "react-native-gesture-handler";

export const tinderCardWidth = Dimensions.get('screen').width * 0.8;
const screenWidth = Dimensions.get('screen').width;

const TinderCard = ({ profile, numberOfCards, curIndex, activeIndex, onResponse }) => {
  const isActive  = activeIndex.value - curIndex < 1;
  const translationX = useSharedValue(0);

  // useDerivedValue(() => {
  //   activeIndex.value = interpolate(
  //     Math.abs(translationX.value),
  //     [0, 500],
  //     [0, activeIndex.value + 1]
  //   )
  // });

  const animatedCard = useAnimatedStyle(() => ({
    opacity: interpolate(activeIndex.value, [curIndex - 1, curIndex, curIndex + 1], [1 - 1 / 5, 1, 1]),
    transform: [
      {
        scale: interpolate(activeIndex.value, [curIndex - 1, curIndex, curIndex + 1], [0.95, 1, 1]),
      },
      {
        translateY: interpolate(activeIndex.value, [curIndex - 1, curIndex, curIndex + 1], [-30, 0, 0]),
      },
      {
        translateX: translationX.value,
      },
      {
        rotateZ: `${interpolate(translationX.value, [-screenWidth / 2, 0, screenWidth / 2], [-15, 0, 15])}deg`,
      }
    ]
  }));

  const gesture = Gesture.Pan()
    // .enabled(activeIndex.value !== curIndex)
    .onBegin((event) => console.log("Begin"))
    .onFinalize((event) => console.log("Final"))
    .onChange((event) => {
      translationX.value = event.translationX;

      activeIndex.value = interpolate(
        Math.abs(translationX.value),
        [0, 500],
        [curIndex, curIndex + 0.8]
      )
    })
    .onUpdate((event) => {

    })
    .onStart((event) => console.log("Start"))
    .onEnd((event) => {
      if(Math.abs(event.velocityX) > 400) {
        translationX.value = withSpring(Math.sign(event.velocityX) * 500, {
          velocity: event.velocityX,
        });
        // activeIndex.value = withSpring(curIndex + 1)
        activeIndex.value = curIndex + 1;
        runOnJS(onResponse)(event.velocityX > 0 ? "YES" : "NO");
      } else {
        translationX.value = withSpring(0);
      }
    });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.card, animatedCard, {
        zIndex: numberOfCards - curIndex,
      }]}>
        <Image
          style={[StyleSheet.absoluteFillObject, styles.image]}
          source={{ uri: profile.image }}
        />

        <LinearGradient
          // Background Linear Gradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={[StyleSheet.absoluteFillObject, { top: '50%', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }]}
        />

        <View style={styles.container}>
          <Text style={styles.name}>{profile.name}</Text>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default TinderCard;

const styles = StyleSheet.create({
  card: {
    position: 'absolute',

    width: tinderCardWidth,
    // height: tinderCardWidth * 1.67,
    aspectRatio: 1 / 1.67,
    borderRadius: 10,
    justifyContent: 'flex-end',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    borderRadius: 10,
  },
  name: {
    // alignSelf: 'center',
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
  },
  container: {
    padding: 16,
  }
})
