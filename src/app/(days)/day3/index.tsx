//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Stack} from "expo-router";
import MarkdownDisplay from "@/src/components/day3/markdown-display";

const description = `
# Markdown

Integrate Markdown content in **React Native**

📚 Today's Agenda:
- Introduction to Markdown
- Markdown Syntax Overview
- Setting Up React Native for Markdown
- Implementing Markdown Rendering
- Styling Markdown Content
- Using Markdown in React Native Components
- Recap and Q&A Session
`;

const Day3 = () => {
  return (
    <View className="flex-1">
      <Stack.Screen options={{ title: 'Day 3 Markdown'}} />
      <MarkdownDisplay>
        {description}
      </MarkdownDisplay>
    </View>
  );
};

export default Day3;

export const styles = StyleSheet.create({

});
