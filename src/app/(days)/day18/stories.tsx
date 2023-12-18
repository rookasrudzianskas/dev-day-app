//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import {Stack} from "expo-router";
import {USER_STORIES} from "@/src/components/day18/stories";

const uri = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/1.jpg';

const Stories = () => {
  const [userIndex, setUserIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);

  const user = USER_STORIES[userIndex];
  const story = user.stories[storyIndex];

  const goToPreviousStory = () => {
    if (storyIndex > 0) {
      setStoryIndex(storyIndex - 1);
    } else if (userIndex > 0) {
      setUserIndex(userIndex - 1);
      setStoryIndex(USER_STORIES[userIndex - 1].stories.length - 1);
    }
  }

  const goToNextStory = () => {
    setStoryIndex((index) => {
      if(index === user.stories.length - 1) {
        goToNextUser();
      }
      return index + 1;
    });
  }

  const goToNextUser = () => {
    if (userIndex === USER_STORIES.length - 1) {
      setUserIndex(0);
    } else {
      setUserIndex(userIndex + 1);
    }
    setStoryIndex(0);
  }

  return (
    <>
      <SafeAreaView className="bg-black flex-1">
        <Stack.Screen options={{ headerShown: false }} />
        <Image
          source={{ uri: story.uri }}
          style={styles.image}
        />

        <TouchableOpacity
          onPress={() => goToPreviousStory()}
          style={styles.navPressable}/>
        <TouchableOpacity
          onPress={() => goToNextStory()}
          style={[styles.navPressable, { right: 0}]}
        />

        <View style={styles.header}>
          <>
            <Text style={styles.username}>{user.username}</Text>
          </>
        </View>
      </SafeAreaView>
      <View>
        <TextInput
          style={styles.input}
          placeholder={'Send message'}
          placeholderTextColor={'white'}
        />
      </View>
    </>
  );
};

export default Stories;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '94%',
    borderRadius: 10,
  },
  header: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.1)',
    top: 47,
    width: '100%',
    padding: 10

  },
  username: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  navPressable: {
    width: '30%',
    height: '100%',
    position: 'absolute',
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
    fontSize: 16,
  }
})
