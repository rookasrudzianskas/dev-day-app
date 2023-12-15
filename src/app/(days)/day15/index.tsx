//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView} from 'react-native';
import {Stack, useRouter} from "expo-router";
import MarkdownDisplay from "@/src/components/day3/markdown-display";

const description = `
# TODO application
`;

const Day15 = () => {
  const router = useRouter();

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 15 Todo'}} />
      <MarkdownDisplay>
        {description}
      </MarkdownDisplay>
      <Button
        title={'Go To Todo'}
        className="mb-6"
        onPress={() => router.push('/day15/todo')}>
        Go To Todo
      </Button>
    </SafeAreaView>
  );
};

export default Day15;

export const styles = StyleSheet.create({

});
