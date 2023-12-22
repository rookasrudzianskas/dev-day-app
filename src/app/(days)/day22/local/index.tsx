//@ts-nocheck
import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {database} from "@/src/components/day22/model";

const LocalScreen = () => {
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await database.get('tasks').query().fetch();
    console.log('res', res);
  }

  return (
    <View>
      <Text>
        byrookas 🚀
      </Text>
    </View>
  );
};

export default LocalScreen;
