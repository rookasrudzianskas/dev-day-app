//@ts-nocheck
import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

const Animation = () => {
  const animation = useRef(null);

  // useEffect(() => {
  //   // You can control the ref programmatically, rather than using autoPlay
  //   animation.current?.play();
  // }, []);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        // autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        source={require('../../../assets/animation.json')}
      />
      <Button
        title="Restart Animation"
        onPress={() => {
          animation.current?.reset();
          animation.current?.play();
        }}
      />
      <Button
        title="Play"
        onPress={() => {
          animation.current?.play();
        }}
      />
    </View>
  );
};

export default Animation;

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
});
