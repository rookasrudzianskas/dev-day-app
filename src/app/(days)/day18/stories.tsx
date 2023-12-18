//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Stack} from "expo-router";
import {USER_STORIES} from "@/src/components/day18/stories";

const uri = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/1.jpg';

const Stories = () => {
  return (
    <View className="">
      <Stack.Screen options={{ headerShown: false }} />
      <Image
        source={{ uri: USER_STORIES[0].stories[2].uri }}
        style={styles.image}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  }
})
