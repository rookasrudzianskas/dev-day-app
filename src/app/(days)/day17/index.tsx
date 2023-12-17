//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView} from 'react-native';
import {Stack, useRouter} from "expo-router";
import MarkdownDisplay from "@/src/components/day3/markdown-display";

const description = `
# Zustand
`;

const Day17 = () => {
  const router = useRouter();

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 17 Zustand'}} />
      <MarkdownDisplay>
        {description}
      </MarkdownDisplay>
      <Button
        title={'Go To Zustand'}
        className="mb-6"
        onPress={() => router.push('/day17/todo')}>
        Go To Todo
      </Button>
    </SafeAreaView>
  );
};

export default Day17;

export const styles = StyleSheet.create({

});
