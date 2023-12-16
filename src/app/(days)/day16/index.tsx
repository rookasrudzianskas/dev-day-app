//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView} from 'react-native';
import {Stack, useRouter} from "expo-router";
import MarkdownDisplay from "@/src/components/day3/markdown-display";

const description = `
# React Context API
`;

const Day16 = () => {
  const router = useRouter();

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 16 Context'}} />
      <MarkdownDisplay>
        {description}
      </MarkdownDisplay>
      <Button
        title={'Go To REACT Context API'}
        className="mb-6"
        onPress={() => router.push('/day16/todo')}>
        Go To Todo
      </Button>
    </SafeAreaView>
  );
};

export default Day16;

export const styles = StyleSheet.create({

});
