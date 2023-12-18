//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import IGStories from "@/src/components/day18/ig-stories";

const Stories = () => {
  return (
    <View className="flex-1">
      <IGStories />
    </View>
  );
};

export default Stories;
