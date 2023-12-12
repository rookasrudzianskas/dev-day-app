//@ts-nocheck
import React, {useEffect, useRef, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, SafeAreaView, useWindowDimensions} from 'react-native';
import {ResizeMode, Video} from "expo-av";
import {LinearGradient} from "expo-linear-gradient";
import {Ionicons} from "@expo/vector-icons";

const VideoCard = ({post, activePostId}) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const {height} = useWindowDimensions();

  const isPlaying = status.isPlaying && status?.isLoaded;

  useEffect(() => {
    if(!video.current) return;
    if(activePostId !== post.id) {
      video.current.pauseAsync();
    }
    if(activePostId === post.id) {
      video.current.playAsync();
    }
  }, [activePostId, video.current])

  const onPress = () => {
    if(!video.current) return;
    if(isPlaying) {
      video.current.pauseAsync();
    } else {
      video.current.playAsync();
    }
  }

  return (
    <View style={[styles.container, {height}]}>
      <Video
        ref={video}
        className={"h-screen"}
        style={[StyleSheet.absoluteFill, styles.video]}
        source={{
          uri: post.video,
        }}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        autoPlay={true}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

      <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.content}>
        <LinearGradient
          // Background Linear Gradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={[StyleSheet.absoluteFillObject, styles.overlay]}
        />
        {!status.isPlaying &&
          <Ionicons
            style={{position: 'absolute', alignSelf: 'center', top: '50%'}}
            name="ios-play"
            size={70}
            color="rgba(255, 255, 255, 0.6)"
          />
        }
        <SafeAreaView style={{ flex: 1}}>
          <View style={styles.footer}>
            {/*   Bottom */}
            <View style={styles.leftColumn}>
              <Text style={styles.caption}>{post.caption}</Text>
            </View>
            {/* vertical columns */}
            <View style={styles.rightColumn}>
              <TouchableOpacity activeOpacity={0.8}>
                <Ionicons name="ios-heart" size={34} color="white" />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <Ionicons name="md-share-social" size={34} color="white" />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <Ionicons name="bookmark" size={34} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableOpacity>
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,

  },
  video: {
    // width: '100%',
    // height: '100%',
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

