//@ts-nocheck
import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import {Stack} from "expo-router";

const Splash = () => {
  const animation = useRef(null);

  // useEffect(() => {
  //   // You can control the ref programmatically, rather than using autoPlay
  //   animation.current?.play();
  // }, []);

  return (
    <View style={styles.animationContainer}>
      <Stack.Screen options={{ title: 'Day 4 Splash Screen', headerShown: false}} />
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: "80%",
          maxWidth: 400,
          height: 200,
          backgroundColor: '#000',
        }}
        source={require('../../../assets/animation.json')}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
});
