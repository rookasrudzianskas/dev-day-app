//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
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
    <View className="pt-16 px-5 bg-black flex-1" style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="mb-1">
        <Text className="text-3xl text-neutral-50">Hello, Rokas</Text>
      </View>
      <FlatList
        data={tasks}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View>
            <Text className="text-neutral-50">{item.task}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  page: {

  }
})
