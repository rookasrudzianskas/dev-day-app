//@ts-nocheck
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

const SplashAnimation = ({onAnimationFinish = (isCanceled) => {}}) => {
  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
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
