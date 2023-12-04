//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView} from 'react-native';
import {Stack, useRouter} from "expo-router";
import MarkdownDisplay from "@/src/components/day3/markdown-display";

const description = `
Netflix navigation bar animation
`;

const Day4 = () => {
  const router = useRouter();

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 4 Splash Screen'}} />
      <MarkdownDisplay>
        {description}
      </MarkdownDisplay>
      <Button
        title={'Go To Editor'}
        className="mb-6"
        onPress={() => router.push('/day4/animation')}>
        Go To Editor
      </Button>
      <Button
        title={'Go To Splash'}
        className="mb-6"
        onPress={() => router.push('/day4/splash')}>
        Go To Editor
      </Button>
    </SafeAreaView>
  );
};

export default Day4;

export const styles = StyleSheet.create({

});
