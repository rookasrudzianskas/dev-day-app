//@ts-nocheck
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Audio, AVPlaybackStatus} from "expo-av";
import { FontAwesome5 } from '@expo/vector-icons';

const MemoListItem = ({uri}: {uri: string}) => {
  const [sound, setSound] = useState();
  const [status, setStatus] = useState<AVPlaybackStatus | null>(null);

  const loadSound = async () => {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync({
      uri: uri,
    },
      undefined,
      onPlaybackStatusUpdate
    );
    setSound(sound);
  }

  useEffect(() => {
    loadSound();
  }, [uri]);

  async function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
    setStatus(status);
  }

  async function playSound() {
    if(!sound) return;
    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const isPlaying = status?.isLoaded ? status.isPlaying : false
  const progress = status?.isLoaded ? status.positionMillis / status.durationMillis * 100 : 0;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={playSound}
        style={{marginRight: 15}}
      >
        <FontAwesome5 name={
          isPlaying
            ? 'pause-circle'
            : 'play-circle'
        }
                      size={20}
                      color="gray" />
      </TouchableOpacity>
      <View style={styles.playbackContainer}>
        <View style={styles.playbackBackground}/>
        <View style={[styles.playbackIndicator, {left: `${progress}%`}]}/>
      </View>
    </View>
  );
};

export default MemoListItem;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    gap: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  playbackContainer: {
    // backgroundColor: 'gray',
    flex: 1,
    height: 30,
    justifyContent: 'center',
  },
  playbackBackground: {
    backgroundColor: 'gainsboro',
    height: 3,
    width: '100%',
    borderRadius: 5,
  },
  playbackIndicator: {
    width: 10,
    aspectRatio: 1,
    backgroundColor: 'royalblue',
    borderRadius: 10,
    position: 'absolute',
  }
})
