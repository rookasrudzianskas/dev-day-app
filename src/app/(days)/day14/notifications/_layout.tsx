//@ts-nocheck
import React from 'react';
import {Slot} from "expo-router";
import { useState, useEffect, useRef } from 'react';
import {Text, View, Button, Platform, Alert} from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import {alert} from "@aws-amplify/ui/dist/types/theme/tokens/components/alert";
// import {registerForPushNotificationsAxsync} from "@/src/app/lib/register-for-push-notifications-async";
//
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const AppWithNotificationsLayout = () => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

  //   notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
  //     setNotification(notification);
  //   });
  //
  //   responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
  //     console.log(response);
  //   });
  //
  //   return () => {
  //     Notifications.removeNotificationSubscription(notificationListener.current);
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  }, []);

  return (
    <Slot />
  );
};

export default AppWithNotificationsLayout;

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      Alert.alert('Failed to get push token for push notification!');
      return;
    }
    // Learn more about projectId:
    // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    token = (await Notifications.getExpoPushTokenAsync({ projectId: 'your-project-id' })).data;
    console.log(token);
  } else {
    Alert.alert('Must use physical device for Push Notifications');
  }

  return token;
}
