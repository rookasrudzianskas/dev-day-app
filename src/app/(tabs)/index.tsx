import {StyleSheet, Text, View} from "react-native";
import React from "react";

const TabOneScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>1</Text>
      </View>
    </View>
  );
};

export default TabOneScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#F9EDE3',
    width: 300,
    height: 300,

    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#9b4521',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#9b4521',
    fontSize: 70,
  }
})
