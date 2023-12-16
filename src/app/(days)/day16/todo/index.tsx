// @ts-nocheck
import {
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  Button,
  View,
} from 'react-native';
import { useState } from 'react';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Reanimated, { CurvedTransition } from 'react-native-reanimated';
import { useHeaderHeight } from '@react-navigation/elements';
import TaskListItem from "@/src/components/day16/task-list-item";
import NewTaskInput from "@/src/components/day16/new-task-input";
import {useTasks} from "@/src/components/day16/TasksContextProvider";

const TodoScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tab, setTab] = useState<'All' | 'Todo' | 'Finished'>('All');
  const {tasks, setTasks, onItemPressed, deleteTask, getFilteredTasks} = useTasks();

  const headerHeight = useHeaderHeight();

  const filteredTasks = getFilteredTasks(tab, searchQuery);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.page}
    >
      <Stack.Screen
        options={{
          title: 'Todo',
          headerBackTitleVisible: false,
          headerSearchBarOptions: {
            hideWhenScrolling: true,
            onChangeText: (e) => setSearchQuery(e.nativeEvent.text),
          },
        }}
      />

      <SafeAreaView
        edges={['bottom']}
        style={{ flex: 1, paddingTop: headerHeight + 35 }}
      >
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-around',
          }}
        >
          <Button title="All" onPress={() => setTab('All')} />
          <Button title="Todo" onPress={() => setTab('Todo')} />
          <Button title="Finished" onPress={() => setTab('Finished')} />
        </View>
        <FlatList
          data={filteredTasks}
          contentContainerStyle={{ gap: 5, padding: 10 }}
          keyExtractor={(item) => item.title}
          renderItem={({ item, index }) => (
            <Reanimated.View layout={CurvedTransition}>
              <TaskListItem
                task={item}
                index={index}
              />
            </Reanimated.View>
          )}
          ListFooterComponent={() => (
            <NewTaskInput
              onAdd={(newTodo: Task) =>
                setTasks((currentTasks) => [...currentTasks, newTodo])
              }
            />
          )}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default TodoScreen;
