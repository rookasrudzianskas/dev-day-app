//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView} from 'react-native';
import {Stack, useRouter} from "expo-router";
import MarkdownDisplay from "@/src/components/day3/markdown-display";

const description = `
# Day 21`;

const Day21 = () => {
  const router = useRouter();

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 21 Paywall'}} />
      <MarkdownDisplay>
        {description}
      </MarkdownDisplay>
      <Button
        title={'Go To Paywall'}
        className="mb-6"
        onPress={() => router.push('/day21/paywall')}>
          Go To Paywall
      </Button>
    </SafeAreaView>
  );
};

export default Day21;

export const styles = StyleSheet.create({

});
