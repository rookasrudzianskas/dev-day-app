import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {useTasks} from "@/src/components/day17/TasksContextProvider";

const NewTaskInput = () => {
  const [newTask, setNewTask] = useState('');
  const { addTask } = useTasks();

  return (
    <View style={styles.taskContainer}>
      <MaterialCommunityIcons
        name="checkbox-blank-circle-outline"
        size={24}
        color="dimgray"
      />
      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        style={styles.input}
        placeholder="Todo..."
        onEndEditing={() => {
          if (!newTask) {
            return;
          }
          addTask(newTask);
          setNewTask('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    fontFamily: 'Inter',
    color: 'dimgray',
    fontSize: 15,
    flex: 1,
  },
});

export default NewTaskInput;
