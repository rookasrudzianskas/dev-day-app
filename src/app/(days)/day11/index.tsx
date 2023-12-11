//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView} from 'react-native';
import {Stack, useRouter} from "expo-router";
import MarkdownDisplay from "@/src/components/day3/markdown-display";

const description = `
# Camera App
`;

const Day11 = () => {
  const router = useRouter();

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 11 Camera'}} />
      <MarkdownDisplay>
        {description}
      </MarkdownDisplay>
      <Button
        title={'Go To Camera'}
        className="mb-6"
        onPress={() => router.push('/day11/camera')}>
        Go To Camera
      </Button>
    </SafeAreaView>
  );
};

export default Day11;

export const styles = StyleSheet.create({

});
