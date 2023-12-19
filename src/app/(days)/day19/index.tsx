//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView} from 'react-native';
import {Stack, useRouter} from "expo-router";
import MarkdownDisplay from "@/src/components/day3/markdown-display";

const description = `
# Day 19`;

const Day19 = () => {
  const router = useRouter();

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 19 Analytics'}} />
      <MarkdownDisplay>
        {description}
      </MarkdownDisplay>
      <Button
        title={'Go To Editor'}
        className="mb-6"
        onPress={() => router.push('/day19/analytics')}>
          Go To Editor
      </Button>
    </SafeAreaView>
  );
};

export default Day19;

export const styles = StyleSheet.create({

});
