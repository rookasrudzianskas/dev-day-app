//@ts-nocheck
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, Pressable, Button} from 'react-native';
import {Stack, useFocusEffect} from "expo-router";
import {
  Camera,
  PhotoFile,
  useCameraDevice,
  useCameraPermission, useCodeScanner,
  useMicrophonePermission, VideoFile
} from "react-native-vision-camera";
import {useIsFocused} from "@react-navigation/core";
import {MaterialIcons} from "@expo/vector-icons";
import {Video} from "expo-av";

const CameraScreen = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const { microphoneHasPermission, microphoneRequestPermission } = useMicrophonePermission()

  const [isRecording, setIsRecording] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [photo, setPhoto] = useState<PhotoFile>(undefined);
  const camera = useRef<Camera>(null)
  const [flash, setFlash] = useState("off");
  const [video, setVideo] = useState<VideoFile>(undefined);

  const device = useCameraDevice('back', {
    physicalDevices: [
      'ultra-wide-angle-camera',
      'wide-angle-camera',
      'telephoto-camera'
    ]
  });
  useFocusEffect(() => {
    useCallback(() => {
      setIsActive(true);
      return () => {
        setIsActive(false);
      }
    }, [])
  });

  useEffect(() => {
    if(!hasPermission) {
      requestPermission();
    }
    if(!microphoneHasPermission) {
      microphoneRequestPermission();
    }
  }, [hasPermission, requestPermission]);

  const uploadPhoto = async () => {
    if(!photo) return;
    const result = await fetch(`file://${photo.path}`)
    const data = await result.blob();
  }

  if(!hasPermission || !microphoneHasPermission) {
    return (
      <View className="h-screen w-full items-center justify-center">
        <Stack.Screen options={{ headerShown: false }} />
        <Text>
          Does not have permission
        </Text>
      </View>
    );
  }
  if (device == null) return <NoCameraDeviceError />

  const onTakePicturePressed = async () => {
    if(isRecording) {
      camera.current?.stopRecording();
      return;
    }

    const photo = await camera.current?.takePhoto({
      flash: flash ? 'on' : 'off',
    });
    setPhoto(photo);
  }

  const onStartRecording = async () => {
    if (!camera.current) return;
    setIsRecording(true)
    camera.current.startRecording({
      flash: flash ? 'on' : 'off',
      onRecordingFinished: (video) => {
        console.log('onRecordingFinished', video)
        setVideo(video);
        setIsRecording(false)
      },
      onRecordingError: (error) => {
        console.warn('onRecordingError', error)
        setIsRecording(false)
      }
    })
  }

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes) => {
      console.log(`Scanned ${codes.length} codes!`)
    }
  });

  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Camera
        ref={camera}
        photo={true}
        codeScanner={codeScanner}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isActive && !photo && !video}
        video={true}
        audio={true}
      />

      {video && (
        <>
          <Video
            source={{ uri: video.path }}
            style={{ width: '100%', height: '100%' }}
            shouldPlay
            isLooping
            useNativeControls
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 50,
              width: 75,
              height: 65,
              backgroundColor: 'white',
              alignSelf: 'center',
              borderRadius: 75
            }}
            onPress={() => setVideo(undefined)}
          />
          <View style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            paddingBottom: 50,
          }}>
            <Button
              title={'Upload'}
              onPress={uploadVideo}
            />
          </View>
        </>
      )}

      {photo && (
        <>
          <Image
            source={{ uri: photo.path }}
            style={{ width: '100%', height: '100%' }}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 50,
              width: 75,
              height: 65,
              backgroundColor: 'white',
              alignSelf: 'center',
              borderRadius: 75
            }}
            onPress={() => setPhoto(undefined)}
          />
          <View style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            paddingBottom: 50,
          }}>
            <Button
              title={'Upload'}
              onPress={uploadPhoto}
            />
          </View>
        </>
      )}

      {!photo && !video && (
        <>
          <View>
            {flash === 'on' ? (
              <Pressable
                setFlash={() => setFlash('on')}
                style={{position: 'absolute', right: 10, top: 50, padding: 10, borderRadius: 5}}>
                <MaterialIcons name="flash-on" size={24} color="white" />
              </Pressable>
            ): flash === 'auto' ? (
              <Pressable
                setFlash={() => setFlash('auto')}
                style={{position: 'absolute', right: 10, top: 50, padding: 10, borderRadius: 5}}>
                <MaterialIcons name="flash-auto" size={24} color="white" />
              </Pressable>
            ) : (
              <Pressable
                setFlash={() => setFlash('off')}
                style={{position: 'absolute', right: 10, top: 50, padding: 10, borderRadius: 5}}>
                <MaterialIcons name="flash-off" size={24} color="white" />
              </Pressable>
            )}
          </View>
          <TouchableOpacity
            onLongPress={onStartRecording}
            style={{
              position: 'absolute',
              bottom: 50,
              width: 75,
              height: 65,
              backgroundColor: isRecording ? 'red' : 'white',
              alignSelf: 'center',
              borderRadius: 75
            }}
            onPress={onTakePicturePressed}
          >
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default CameraScreen;
