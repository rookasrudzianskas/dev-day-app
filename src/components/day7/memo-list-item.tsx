//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Audio} from "expo-av";
import { FontAwesome5 } from '@expo/vector-icons';

const MemoListItem = ({uri}: {uri: string}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwesome5 name="play" size={20} color="black" />
      </TouchableOpacity>
      <Text>{uri}</Text>
    </View>
  );
};

export default MemoListItem;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    gap: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
})
