//@ts-nocheck
import React, {useEffect, useState} from 'react';
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
import Swipeable from 'react-native-gesture-handler/Swipeable';
import TaskListItem from "@/src/components/day15/task-list-item";

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
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const filteredTasks = TASKS.filter(task => task.task.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery]);

  return (
    <View className="pt-10 px-5 bg-black flex-1" style={styles.page}>
      <Stack.Screen options={{
        headerShown: false,
        title: 'TODO',
        headerBackTitleVisible: false,
        // headerSearchBarOptions: {
        //   hideWhenScrolling: true,
        // },
      }} />
      <View className="h-12">
        <TextInput
          placeholder="Search"
          autoCapitalize="none"
          autoFocus={true}
          autoCorrect={false}
          placeholderTextColor="#4B5563"
          onChangeText={text => setSearchQuery(text)}
          value={searchQuery}
          className="bg-neutral-800 text-neutral-50 flex-1 h-12 rounded-md py-2 px-3 mt-4"
        />
      </View>

      <View className="mb-1 mt-3">
        <Text className="text-3xl text-neutral-50">Hello, Rokas</Text>
      </View>
      <FlatList
        data={tasks}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TaskListItem
            item={item}
            tasks={tasks}
            setTasks={setTasks}
          />
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
