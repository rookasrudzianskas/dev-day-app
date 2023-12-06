//@ts-nocheck
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import TinderCard from "@/src/components/day6/tinder-card";
import {Stack} from "expo-router";
import {
  interpolate, runOnJS,
  useAnimatedReaction,
  useDerivedValue,
  useSharedValue,
  withDecay,
  withSpring
} from "react-native-reanimated";
import {Gesture, GestureDetector} from "react-native-gesture-handler";

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
  const activeIndex = useSharedValue(0);
  const [index, setIndex] = useState(0);
  const [users, setUsers] = useState(USERS);

  useAnimatedReaction(() => activeIndex.value, (value, prev) => {
      if(Math.floor(value) !== index) {
        runOnJS(setIndex)(Math.floor(value));
      }
  });

  useEffect(() => {
    if(index > USERS.length - 2) {
      setUsers((usrs) => [
        ...usrs,
        ...USERS.reverse(),
      ]);
    }
  }, [index])

  const onResponse = (isYes: "YES" | "NO") => {
    console.log(isYes);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Stack.Screen options={{ title: 'Day 6 Tinder', headerShown: false}} />
      {USERS.map((user, index) => (
        <TinderCard
          key={`user-${user.id}-${index}`}
          profile={user}
          numberOfCards={USERS.length}
          curIndex={index}
          activeIndex={activeIndex}
          onResponse={onResponse}
        />
      ))}

      <View>
        <Button
          title={'Go To Tinder'}
          onPress={() => (activeIndex.value = activeIndex.value + 1)}>

        </Button>
        <Button
          title={'Go To Tinder'}
          onPress={() => (activeIndex.value = activeIndex.value - 1)}
        >

        </Button>
      </View>
    </View>
  );
};

export default Tinder;
