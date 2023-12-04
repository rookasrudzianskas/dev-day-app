//@ts-nocheck
import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import {Stack} from "expo-router";

const Animation = () => {
  const animation = useRef(null);

  // useEffect(() => {
  //   // You can control the ref programmatically, rather than using autoPlay
  //   animation.current?.play();
  // }, []);

  return (
    <View style={styles.animationContainer}>
      <Stack.Screen options={{ title: 'Day 4 Splash Screen', headerShown: false}} />
      <LottieView
        // autoPlay
        ref={animation}
        style={{
          width: "80%",
          maxWidth: 400,
          backgroundColor: '#000',
        }}
        source={require('../../../assets/animation.json')}
      />
      {/*<Button*/}
      {/*  title="Restart Animation"*/}
      {/*  onPress={() => {*/}
      {/*    animation.current?.reset();*/}
      {/*    animation.current?.play();*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Button*/}
      {/*  title="Play"*/}
      {/*  onPress={() => {*/}
      {/*    animation.current?.play();*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Button*/}
      {/*  title="Stop"*/}
      {/*  onPress={() => {*/}
      {/*    // stop*/}
      {/*    animation.current?.reset();*/}
      {/*  }}*/}
      {/*/>*/}
    </View>
  );
};

export default Animation;

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
});
