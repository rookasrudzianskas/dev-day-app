//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {Stack} from "expo-router";
import * as Notifications from 'expo-notifications';

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 10 },
  });
}

const NotificationsScreen = () => {
  return (
    <View className="flex items-center justify-center">
      <Stack.Screen options={{ title: 'Notifications'}} />
      <Text className="text-lg font-semibold">
        Notifications
      </Text>
      <Button
        style={{
          marginBottom: 20,
        }}
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
    </View>
  );
};

export default NotificationsScreen;
