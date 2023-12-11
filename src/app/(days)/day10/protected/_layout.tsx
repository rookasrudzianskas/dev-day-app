import { Slot } from 'expo-router';
import { useEffect, useState } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import { Alert, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import {useBiometrics} from "@/src/components/day10/biometrics-provider";

export default function BiometricProtectedLayout() {
  const { isUnlocked, authenticate } = useBiometrics();

  useEffect(() => {
    console.log(isUnlocked)
    if (!isUnlocked) {
      authenticate();
      console.log('authenticating')
    }
  }, []);

  if (!isUnlocked) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <Text style={{ fontFamily: 'Inter', fontSize: 20, marginBottom: 20 }}>
          Use FaceId to Unlock
        </Text>
        <FontAwesome5
          onPress={authenticate}
          name="fingerprint"
          size={75}
          color="gray"
        />
      </View>
    );
  }

  return <Slot />;
}
