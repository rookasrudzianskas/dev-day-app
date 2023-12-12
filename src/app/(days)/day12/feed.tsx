//@ts-nocheck
import React, {useRef, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {Stack} from "expo-router";
import {ResizeMode, Video} from "expo-av";
import {StatusBar} from "expo-status-bar";
import {Ionicons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

const POSTS = [
  {
    id: 1,
    video: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/2.mp4',
    caption: 'Caption 1 @Rokas 1',
  }
]

const Feed = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View className="flex-1">
      <Stack.Screen options={{headerShown: false}} />
      <StatusBar style="auto" />
      <Video
        ref={video}
        style={[StyleSheet.absoluteFill, styles.video]}
        source={{
          uri: POSTS[0].video,
        }}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        autoPlay={true}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

      <View style={styles.content}>
        <LinearGradient
          // Background Linear Gradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={[StyleSheet.absoluteFillObject, styles.overlay]}
        />
        <SafeAreaView style={{ flex: 1}}>
          <View style={styles.footer}>
            {/*   Bottom */}
            <View style={styles.leftColumn}>
              <Text style={styles.caption}>{POSTS[0].caption}</Text>
            </View>
            {/* vertical columns */}
            <View style={styles.rightColumn}>
              <Ionicons name="ios-heart" size={34} color="white" />
              <Ionicons name="md-share-social" size={34} color="white" />
              <Ionicons name="bookmark" size={34} color="white" />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {

  },
  video: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  footer: {
    marginTop: "auto",
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  caption: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    margin: 10,
  },
  rightColumn: {
    gap: 14,
    marginBottom: 110,
  },
  leftColumn: {
    flex: 1,
  },
  overlay: {
    top: '50%',
  }
});
