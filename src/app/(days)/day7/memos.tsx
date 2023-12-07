// @ts-nocheck
import * as React from 'react';
import {Text, View, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import { Audio } from 'expo-av';
import {Recording} from "expo-av/build/Audio/Recording";
import {useState} from "react";
import {interpolate, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import Animated from "react-native-reanimated";
import MemoListItem from "@/src/components/day7/memo-list-item";

export default function Memos() {
  const [recording, setRecording] = useState<Recording>();
  const [memos, setMemos] = useState<string[]>([]);
  const metering = useSharedValue(0);

  const animatedCircleStyle = useAnimatedStyle(() => ({
    width: withTiming(recording ? '70%' : '100%', { duration: 1000 }),
    height: withTiming(recording ? '70%' : '100%', { duration: 1000 }),
    borderRadius: withTiming(recording ? 5 : 35, { duration: 1000 }),
  }))

  const animatedRecordWave = useAnimatedStyle(() => {
    const size = interpolate(metering.value, [-160, -60, 0], [0, 0, 100]);
    return {
      top: size,
      bottom: size,
      left: size,
      right: size
    }
  })

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');

      recording.setOnRecordingStatusUpdate((status) => {
        metering.value = status.metering || -1;
      })
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    if(!recording) return;
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync(
      {
        allowsRecordingIOS: false,
      }
    );
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
    if(uri) {
      setMemos((existingMemos) => ([uri, ...existingMemos]));
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <MemoListItem
              uri={item}
            />
          )
        }}
        keyExtractor={(item) => item}
      />
      <View
        className={'flex flex-row justify-center mb-7'}
      >

        <View>
          <Animated.View style={[styles.recordingWaves, animatedRecordWave]} />
          <TouchableOpacity
            className={'bg-orange-500 p-2 h-16 border-gray-500 border-2 flex items-center justify-center w-16' +
              ' rounded-full'}
            onPress={recording ? stopRecording : startRecording}
          >
            <Animated.View className="border-2 h-20 w-20 border-white rounded-full">
            </Animated.View>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  recordingWaves: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FF000055',
    top: -20,
    left: -20,
    right: -20,
    bottom: -20,
    zIndex: -1000,
    borderRadius: 100,
  }
});
