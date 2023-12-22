//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView} from 'react-native';
import {Stack, useRouter} from "expo-router";
import MarkdownDisplay from "@/src/components/day3/markdown-display";

const description = `
# Day 22`;

const Day22 = () => {
  const router = useRouter();

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 22 App'}} />
      <MarkdownDisplay>
        {description}
      </MarkdownDisplay>
      <Button
        title={'Go To App'}
        className="mb-6"
        onPress={() => router.push('/day22/analytics')}>
          Go To App
      </Button>
    </SafeAreaView>
  );
};

export default Day22;

export const styles = StyleSheet.create({

});
