//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView} from 'react-native';
import {Stack, useRouter} from "expo-router";
import MarkdownDisplay from "@/src/components/day3/markdown-display";
// eas build --platform ios --profile development
const description = `
# Expo Notifications
`;

const Day14 = () => {
  const router = useRouter();

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 14 Notifications'}} />
      <MarkdownDisplay>
        {description}
      </MarkdownDisplay>
      <Button
        title={'Go To Notifications'}
        className="mb-6"
        onPress={() => router.push('/day13/feed')}>
        Go To Notifications
      </Button>
    </SafeAreaView>
  );
};

export default Day14;
