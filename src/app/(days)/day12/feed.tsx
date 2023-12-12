//@ts-nocheck
import React, {useRef, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Stack} from "expo-router";
import {ResizeMode, Video} from "expo-av";

const POSTS = [
  {
    id: 1,
    video: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/2.mp4'
  }
]

const Feed = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View className="flex-1">
      <Stack.Screen options={{headerShown: false}} />

      <Video
        ref={video}
        style={[StyleSheet.absoluteFill, {
          width: '100%',
          height: '100%',
        }]}
        source={{
          uri: POSTS[0].video,
        }}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        autoPlay={true}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  video: {

  }
});
