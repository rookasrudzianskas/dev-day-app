//@ts-nocheck
import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Stack} from "expo-router";
import {Camera, useCameraDevice, useCameraPermission} from "react-native-vision-camera";

const CameraScreen = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice('back')

  useEffect(() => {
    if(!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  if(!hasPermission) {
    return (
      <View>
        <Stack.Screen options={{ headerShown: false }} />
        <Text>
          byrookas 🚀
        </Text>
      </View>
    );
  }

  if (device == null) return <NoCameraDeviceError />

  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
    </View>
  );
};

export default CameraScreen;
