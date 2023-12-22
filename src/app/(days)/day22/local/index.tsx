//@ts-nocheck
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import NewTaskInput from "@/src/components/day22/new-task-input";

const LocalScreen = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    // fetchTasks();
  }, []);

  // const fetchTasks = async () => {
  //   const res = await database.get('tasks').query().fetch();
  //   console.log('res', res);
  // }

  return (
    <View>
      <NewTaskInput />
    </View>
  );
};

export default LocalScreen;
