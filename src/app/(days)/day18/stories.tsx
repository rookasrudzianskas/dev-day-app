//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, SafeAreaView, TextInput} from 'react-native';
import {Stack} from "expo-router";
import {USER_STORIES} from "@/src/components/day18/stories";

const uri = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/1.jpg';

const Stories = () => {
  const [userIndex, setUserIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);

  const user = USER_STORIES[userIndex];
  const story = user.stories[storyIndex];

  return (
    <View className="">
      <Stack.Screen options={{ headerShown: false }} />
      <Image
        source={{ uri: story.uri }}
        style={styles.image}
      />
      <View style={styles.header}>
        <SafeAreaView>
          <Text style={styles.username}>{user.username}</Text>
        </SafeAreaView>
      </View>

      <View>
        <TextInput
          style={styles.input}
          placeholder={'Send message'}
          placeholderTextColor={'white'}
        />
      </View>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  header: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.1)',
    top: 0,
    width: '100%',
    padding: 10

  },
  username: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  input: {
    position: 'absolute',
    bottom: 10,
    width: '90%',
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.2)',
    color: 'white',
    fontSize: 18,
    margin: 10,
    // center it
    alignSelf: 'center',
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 20,
    // border white
    borderWidth: 1,
    borderColor: 'white',
  }
})
