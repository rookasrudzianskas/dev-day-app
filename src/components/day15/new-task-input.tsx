//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const NewTaskInput = ({setNewTask, newTask}) => {
  return (
    <View className="mb-10 pb-10">
      <Text className="text-neutral-50 text-lg">Add new task</Text>
      <View className="flex flex-row items-center justify-center space-x-3">
        <TextInput
          placeholder="Add new task"
          autoCapitalize="none"
          autoFocus={true}
          autoCorrect={false}
          placeholderTextColor="#4B5563"
          className="bg-neutral-800 text-neutral-50 flex-1 rounded-md py-2 px-3 mt-2"
          onChangeText={text => setNewTask(text)}
          value={newTask}
        />
        <View className="flex items-center justify-center">
          <TouchableOpacity
            disabled={!newTask}
            activeOpacity={!newTask ? 1 : 0.8}
            onPress={() => {
              if(!newTask) return;
              setTasks([...tasks, {
                id: tasks.length + 1,
                task: newTask,
                isFinished: false
              }]);
              setNewTask('');
            }}
            className={`bg-neutral-700 py-2 ml-3 px-3 flex items-center justify-center mt-2 rounded-md ${!newTask && 'bg-neutral-900 text-neutral-500'}`}>
            <Text className="text-neutral-50">Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NewTaskInput;
