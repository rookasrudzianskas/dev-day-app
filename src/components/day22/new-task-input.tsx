// @ts-nocheck
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
// import {database} from "@/src/components/day22/model";
// import Task from "@/src/components/day22/model/Task";

type NewTaskInput = {
  onAdd: (newTask: any) => void;
};

const NewTaskInput = ({ onAdd }: any) => {
  const [newTask, setNewTask] = useState('');


  const assTask = async () => {
    // Task.addTask(newTask);
    // await database.write(async () => {
    //   const newTask = await database.get('tasks').create((task) => {
    //     task.title = 'New Task';
    //     task.isFinished = false;
    //   })
    // }
  }

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
          onAdd({ title: newTask, isFinished: false });
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
