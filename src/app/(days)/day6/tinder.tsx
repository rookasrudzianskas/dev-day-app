//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TinderCard from "@/src/components/day6/tinder-card";
import {Stack} from "expo-router";

const profile = {
  image: 'https://i.ytimg.com/vi/_RO6Q1qhm0c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLABkbMcse-DOfCGn10eMuiVwg9boQ',
  name: 'Rokas',
  id: 1,
}

const USERS = [
  {
    image: 'https://i.ytimg.com/vi/_RO6Q1qhm0c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLABkbMcse-DOfCGn10eMuiVwg9boQ',
    name: 'Tomas',
    id: 2,
  },
  {
    image: 'https://i.ytimg.com/vi/_RO6Q1qhm0c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLABkbMcse-DOfCGn10eMuiVwg9boQ',
    name: 'Fanny',
    id: 1,
  },
  {
    image: 'https://i.ytimg.com/vi/_RO6Q1qhm0c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLABkbMcse-DOfCGn10eMuiVwg9boQ',
    name: 'Rokas',
    id: 3,
  },
  {
    image: 'https://i.ytimg.com/vi/_RO6Q1qhm0c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLABkbMcse-DOfCGn10eMuiVwg9boQ',
    name: 'Jen',
    id: 4,
  },
  {
    image: 'https://i.ytimg.com/vi/_RO6Q1qhm0c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLABkbMcse-DOfCGn10eMuiVwg9boQ',
    name: 'Phoebe',
    id: 5,
  }
]

const Tinder = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Stack.Screen options={{ title: 'Day 6 Tinder', headerShown: false}} />
      {USERS.map((user, index) => (
        <TinderCard key={user.id} profile={user} numberOfCards={USERS.length} curIndex={index} />
      ))}
    </View>
  );
};

export default Tinder;
