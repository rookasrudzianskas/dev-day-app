//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

export const tinderCardWidth = Dimensions.get('screen').width * 0.8;

const TinderCard = ({ profile }) => {
  return (
    <View style={styles.card}>
      <Image
        style={[StyleSheet.absoluteFillObject, styles.image]}
        source={{ uri: profile.image }}
      />

      <LinearGradient
        // Background Linear Gradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={[StyleSheet.absoluteFillObject, { top: '50%', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }]}
      />

      <View style={styles.container}>
        <Text style={styles.name}>{profile.name}</Text>
      </View>
    </View>
  );
};

export default TinderCard;

const styles = StyleSheet.create({
  card: {
    width: tinderCardWidth,
    // height: tinderCardWidth * 1.67,
    aspectRatio: 1 / 1.67,
    borderRadius: 10,
    justifyContent: 'flex-end',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    borderRadius: 10,
  },
  name: {
    // alignSelf: 'center',
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
  },
  container: {
    padding: 16,
  }
})
