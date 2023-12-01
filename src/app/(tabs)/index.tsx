// @ts-nocheck
import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";
import DayListItem from "@/src/components/DayListItem";

const DAYS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

const TabOneScreen = () => {
  return (
    <View className="pt-16" style={styles.container}>
      <View>
        <FlatList
          data={Array.from(DAYS)}
          numColumns={2}
          contentContainerStyle={styles.content}
          columnWrapperStyle={styles.column}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item!}
          renderItem={({item}) => (
            <DayListItem item={item} />
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
  }
})
