//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Redirect} from "expo-router";

const Pro = () => {
  const isSubscribed = false;

  if(!isSubscribed) {
    return (
      <Redirect href="/day21/paywall" />
    )
  }

  return (
    <View>
      <Text>
        byrookas 🚀
      </Text>
    </View>
  );
};

export default Pro;
