//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView} from 'react-native';
import {Stack, useRouter} from "expo-router";
import MarkdownDisplay from "@/src/components/day3/markdown-display";

const description = `
# Day 24`;

const Day24 = () => {
  const router = useRouter();

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 24'}} />
      <MarkdownDisplay>
        {description}
      </MarkdownDisplay>
      <Button
        title={'Go To DALLE'}
        className="mb-6"
        onPress={() => router.push('/day24/analytics')}>
          Go To Day last
      </Button>
    </SafeAreaView>
  );
};

export default Day24;

export const styles = StyleSheet.create({

});
