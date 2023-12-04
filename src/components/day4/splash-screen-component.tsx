//@ts-nocheck
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import Animated, {FadeOut} from 'react-native-reanimated';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const SplashAnimation = ({onAnimationFinish = (isCanceled) => {}}) => {
  return (
    <Animated.View
      style={styles.animationContainer}
      exiting={FadeOut.duration(300)}
    >
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
    </Animated.View>
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
