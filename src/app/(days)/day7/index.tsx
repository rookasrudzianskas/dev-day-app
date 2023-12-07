//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView} from 'react-native';
import {Stack, useRouter} from "expo-router";
import MarkdownDisplay from "@/src/components/day3/markdown-display";

const description = `
## Voice Messages
`;

const Day3 = () => {
  const router = useRouter();

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 7 Voice'}} />
      <MarkdownDisplay>
        {description}
      </MarkdownDisplay>
      <Button
        title={'Go To Voice Editor'}
        className="mb-6"
        onPress={() => router.push('/day7/memos')}>
        Go To Voice Editor
      </Button>
    </SafeAreaView>
  );
};

export default Day3;

export const styles = StyleSheet.create({

});
