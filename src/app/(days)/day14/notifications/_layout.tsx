//@ts-nocheck
import React from 'react';
import {Slot, useRouter} from "expo-router";
import { useState, useEffect, useRef } from 'react';
import {Text, View, Button, Platform, Alert} from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import {alert} from "@aws-amplify/ui/dist/types/theme/tokens/components/alert";
import * as Constants from "expo-constants";
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
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      // console.log(response);
      redirect(response.notification);
    });

    Notifications.getLastNotificationResponseAsync()
      .then(response => {
        if (!isMounted || !response?.notification) {
          return;
        }
        redirect(response?.notification);
      });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
    isMounted = false;
  }, []);

  const redirect = (notification: Notifications.Notification) => {
    const url = notification.request.content.data?.url;
    if (url) {
      router.push(url);
    }
  }


  console.log('expoPushToken', expoPushToken);
  console.log('notification', notification)

  return (
    <>
      {notification && (
        <View className={"mt-36 items-center justify-center max-w-sm mx-auto"}>
          <Text>Your expo push token: {expoPushToken}</Text>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text>Title: {notification && notification.request.content.title} </Text>
            <Text>Body: {notification && notification.request.content.body}</Text>
            <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
          </View>
        </View>
      )}
      <Slot />
    </>
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

    if(!Constants.expoConfig.extra.eas.projectId) return;
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId,
    });
    console.log(token);
  } else {
    Alert.alert('Must use physical device for Push Notifications');
  }

  return token;
}
