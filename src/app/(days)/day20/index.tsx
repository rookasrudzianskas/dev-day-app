//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView} from 'react-native';
import {Stack, useRouter} from "expo-router";
import MarkdownDisplay from "@/src/components/day3/markdown-display";

const description = `
# Day 20`;

const Day20 = () => {
  const router = useRouter();

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 20 CHAT GPT'}} />
      <MarkdownDisplay>
        {description}
      </MarkdownDisplay>
      <Button
        title={'Go To Chat GPT'}
        className="mb-6"
        onPress={() => router.push('/day20/analytics')}>
          Go To Chat GPT
      </Button>
    </SafeAreaView>
  );
};

export default Day20;

export const styles = StyleSheet.create({

});
