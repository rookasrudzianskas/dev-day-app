//@ts-nocheck
import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import {Stack} from "expo-router";

const SplashAnimation = ({onAnimationFinish = (isCanceled) => {}}) => {
  // const animation = useRef(null);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        // ref={animation}
        onAnimationFinish={() => {
          onAnimationFinish();
        }}
        loop={false}
        style={{
          width: "80%",
          maxWidth: 400,
          backgroundColor: '#000',
        }}
        source={require('../../assets/animation.json')}
      />
    </View>
  );
};

export default SplashAnimation;

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
});
