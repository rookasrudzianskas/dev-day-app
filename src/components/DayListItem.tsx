//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const DayListItem = ({ item }: {item: number}) => {
  return (
    <View className="flex-1" style={styles.box}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );
};

export default DayListItem;

export const styles = StyleSheet.create({
  box: {
    backgroundColor: '#F9EDE3',
    aspectRatio: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#9b4521',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#9b4521',
    fontSize: 70,
    fontFamily: 'AmaticSC_700Bold',
  }
})
