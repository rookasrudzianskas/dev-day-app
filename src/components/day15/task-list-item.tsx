//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";

const TaskListItem = ({item, tasks, setTasks}) => {
  return (
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
  );
};

export default TaskListItem;
