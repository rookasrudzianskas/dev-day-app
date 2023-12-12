//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView} from 'react-native';
import {Stack, useRouter} from "expo-router";
import MarkdownDisplay from "@/src/components/day3/markdown-display";

const description = `
# TikTok
`;

const Day12 = () => {
  const router = useRouter();

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 12 TikTok'}} />
      <MarkdownDisplay>
        {description}
      </MarkdownDisplay>
      <Button
        title={'Go To TikTok'}
        className="mb-6"
        onPress={() => router.push('/day12/feed')}>
        Go To TikTok
      </Button>
    </SafeAreaView>
  );
};

export default Day12;

export const styles = StyleSheet.create({

});
