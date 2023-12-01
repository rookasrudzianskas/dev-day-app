// @ts-nocheck
import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";

const DAYS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

const TabOneScreen = () => {
  return (
    <View className="pt-16" style={styles.container}>
      <View>
        <FlatList
          data={DAYS}
          numColumns={2}
          contentContainerStyle={styles.content}
          columnWrapperStyle={styles.column}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item!}
          renderItem={({item}) => (
            <View style={styles.box}>
              <Text style={styles.text}>{item}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default TabOneScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
  box: {
    backgroundColor: '#F9EDE3',
    flex: 1,
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
  }
})
