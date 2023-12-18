//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Stack} from "expo-router";
import {USER_STORIES} from "@/src/components/day18/stories";

const uri = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/1.jpg';

const Stories = () => {
  const [userIndex, setUserIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);

  const user = USER_STORIES[userIndex];
  const story = user.stories[storyIndex];

  return (
    <View className="">
      <Stack.Screen options={{ headerShown: false }} />
      <Image
        source={{ uri: story.uri }}
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
