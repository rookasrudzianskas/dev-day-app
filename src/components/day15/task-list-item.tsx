//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {useAnimatedStyle} from "react-native-reanimated";
import Animated from "react-native-reanimated";
const RightActions = ({progress, dragX, tasks, setTasks, item}) => {
  // const animatedStyles = useAnimatedStyle({
  //   transform: [
  //     {
  //       translateX: dragX.interporale({
  //        inputRange: [-100, 0],
  //         outputRange: [0, 100],
  //         extrapolate: 'clamp'
  //       })
  //     }
  //   ]
  // });

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[{
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
      }]}
      onPress={() => {
        const newTasks = tasks.filter(task => task.id !== item.id);
        setTasks(newTasks);
      }}
    >
      <MaterialCommunityIcons name="delete" size={24} color="white" />
    </TouchableOpacity>
  )
}

const TaskListItem = ({item, tasks, setTasks}) => {
  return (
    <Swipeable
      renderRightActions={(progressAnimatedValue, dragAnimatedValue) => (
        <RightActions
          progress={progressAnimatedValue}
          dragX={dragAnimatedValue}
          tasks={tasks}
          setTasks={setTasks}
          item={item}
        />
      )}
    >
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
    </Swipeable>
  );
};

export default TaskListItem;
