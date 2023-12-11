//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ProtectedScreen = () => {
  return (
    <View>
      <Text>
        This is a private info!
      </Text>
    </View>
  );
};

export default ProtectedScreen;
