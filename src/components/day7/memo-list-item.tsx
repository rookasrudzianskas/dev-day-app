//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Audio} from "expo-av";
import { FontAwesome5 } from '@expo/vector-icons';

const MemoListItem = ({uri}: {uri: string}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwesome5 name={'play'} size={20} color="black" />
      </TouchableOpacity>
      <View style={styles.playbackContainer}>
        <View style={styles.playbackBackground}/>
        <View style={styles.playbackIndicator}/>
      </View>
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
    gap: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  playbackContainer: {
    // backgroundColor: 'gray',
    flex: 1,
    height: 30,
    justifyContent: 'center',
  },
  playbackBackground: {
    backgroundColor: 'gainsboro',
    height: 3,
    width: '100%',
    borderRadius: 5,
  },
  playbackIndicator: {
    width: 10,
    aspectRatio: 1,
    backgroundColor: 'royalblue',
    borderRadius: 10,
    position: 'absolute',
  }
})
