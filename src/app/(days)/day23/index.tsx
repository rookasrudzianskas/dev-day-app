//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView} from 'react-native';
import {Stack, useRouter} from "expo-router";
import MarkdownDisplay from "@/src/components/day3/markdown-display";

const description = `
# Day 23`;

const Day23 = () => {
  const router = useRouter();

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day Day23 Dalle'}} />
      <MarkdownDisplay>
        {description}
      </MarkdownDisplay>
      <Button
        title={'Go To DALLE'}
        className="mb-6"
        onPress={() => router.push('/day23/analytics')}>
          Go To Dalle
      </Button>
    </SafeAreaView>
  );
};

export default Day23;

export const styles = StyleSheet.create({

});
