//@ts-nocheck
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import { Stack } from 'expo-router';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import NewTaskInput from "@/src/components/day15/new-task-input";

const TASKS = [
  {
    id: 1,
    task: 'Learn React Native',
    isFinished: true
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
  const [newTask, setNewTask] = useState('');
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
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
            const newTasks = tasks.map(task => {
              if (task.id === item.id) {
                return {
                  ...task,
                  isFinished: !task.isFinished
                }
              }
              return task;
            });
            setTasks(newTasks);
          }} className="flex flex-row items-center border border-neutral-500 py-1 px-2 my-2 rounded-md">
            {item.isFinished ? (
              <MaterialCommunityIcons name="checkbox-intermediate" className="mr-2" size={24} color="white" />
            ) : (
              <MaterialCommunityIcons name="checkbox-blank-outline" className="mr-2" size={24} color="white" />
            )}
            <Text
              style={{
                textDecorationLine: item.isFinished ? 'line-through' : 'none',
                color: item.isFinished ? '#4B5563' : '#fff'
              }}
              className="text-neutral-50">{item.task}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // number={Platform.OS === 'ios' ? -500 : 0}
        keyboardVerticalOffset={Platform.OS === 'ios' ? -50 : -50}
        style={styles.container}>
        <NewTaskInput
          setTasks={setTasks}
          setNewTask={setNewTask}
          tasks={tasks}
          newTask={newTask}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  page: {

  },
  container: {
    // flex: 1,
  },
})
