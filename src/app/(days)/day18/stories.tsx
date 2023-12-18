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
    setStoryIndex((index) => {
      if(index === 0) {
        goToPrevUser();
        return 0;
      }
      return index - 1;
    });
  }

  const goToNextStory = () => {
    setStoryIndex((index) => {
      if(index === user.stories.length - 1) {
        goToNextUser();
        return 0;
      }
      return index + 1;
    });
  }
  const goToNextUser = () => {
    setUserIndex((index) => {
      if(index === USER_STORIES.length - 1) {
        return 0;
      }
      return index + 1;
    });
  }
  const goToPrevUser = () => {
    setUserIndex((index) => {
      if(index === 0) {
        return USER_STORIES.length - 1;
      }
      return index - 1;
    });
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
          <View style={styles.indicatorRow}>
            {user.stories.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.indicator,
                  i === storyIndex && {
                    backgroundColor: 'white',
                    width: '15%',
                  }
                ]}
              />
            ))}
          </View>
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
    paddingTop: 5,
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
  },
  indicatorRow: {
    gap: 5,
    flexDirection: 'row',
    marginBottom: 20
  },
  indicator: {
    flex: 1,
    height: 5,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginRight: 5
  },
})
