//@ts-nocheck
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import Animated, {FadeOut, ZoomIn, ZoomOut} from 'react-native-reanimated';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const SplashAnimation = ({onAnimationFinish = (isCanceled) => {}}) => {
  return (
    <View
      style={styles.animationContainer}
    >
      <AnimatedLottieView
        exiting={ZoomOut.duration(300)}
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
