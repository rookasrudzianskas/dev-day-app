//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Stack } from 'expo-router';

const TASKS = [
  {
    id: 1,
    task: 'Learn React Native',
    isFinished: false
  },
  {
    id: 2,
    task: 'Learn React',
    isFinished: false
  },
  {
    id: 3,
    task: 'Learn TypeScript',
    isFinished: false
  },
  {
    id: 4,
    task: 'Learn JavaScript',
    isFinished: false
  }
]

const TodoScreen = () => {
  const [tasks, setTasks] = useState(TASKS);
  return (
    <View style={styles.page}>
      <Stack.Screen options={{ title: 'TODO' }} />
      <Text>
        byrookas 🚀
      </Text>
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  page: {

  }
})
