//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {interpolate, useAnimatedStyle, useSharedValue} from "react-native-reanimated";
import Animated from "react-native-reanimated";

export const tinderCardWidth = Dimensions.get('screen').width * 0.8;

const TinderCard = ({ profile, numberOfCards, curIndex, activeIndex }) => {

  const animatedCard = useAnimatedStyle(() => ({
    opacity: interpolate(activeIndex.value, [curIndex - 1, curIndex, curIndex + 1], [1 - 1 / 5, 1, 1])
  }))

  return (
    <Animated.View style={[styles.card, animatedCard, {
      zIndex: numberOfCards - curIndex,
      transform: [
        { translateY: -curIndex * 30 },
        { scale: 1 - curIndex * 0.05},
      ],
      opacity: 1 - curIndex * 0.2,
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
