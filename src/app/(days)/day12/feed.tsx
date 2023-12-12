//@ts-nocheck
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, FlatList} from 'react-native';
import {Stack} from "expo-router";
import {ResizeMode, Video} from "expo-av";
import {StatusBar} from "expo-status-bar";
import {Ionicons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import VideoCard from "@/src/components/day12/video-card";

const POSTS = [
  {
    id: 1,
    video: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/2.mp4',
    caption: 'Caption 1 @Rokas 1',
  },
  {
    id: 2,
    video: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/4.mp4',
    caption: 'Caption 1 @Rokas 1',
  },
  {
    id: 3,
    video: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/3.mp4',
    caption: 'Caption 1 @Rokas 1',
  },
  {
    id: 4,
    video: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/1.mp4',
    caption: 'Caption 1 @Rokas 1',
  },
]

const Feed = () => {
  const [activePostId, setActivePostId] = useState(POSTS[0].id);
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // fetch posts from the server
      setPosts(POSTS);
    };

    fetchPosts();
  }, []);

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: { itemVisiblePercentThreshold: 50 },
      onViewableItemsChanged: ({ changed, viewableItems }) => {
        if (viewableItems.length > 0 && viewableItems[0].isViewable) {
          setActivePostId(viewableItems[0].item.id);
        }
      },
    },
  ]);

  const onEndReached = () => {
    // fetch more posts from database
    setPosts((currentPosts) => [...currentPosts, ...POSTS]);
  };

  return (
    <View className="flex-1 bg-black">
      <Stack.Screen options={{headerShown: false}} />
      <StatusBar style="auto" />
      <FlatList
        data={POSTS}
        renderItem={({item}) => <VideoCard
          post={item}
          activePostId={activePostId}
        />}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        onEndReached={onEndReached}
        onEndReachedThreshold={3}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        // snapToInterval={Dimensions.get('window').height - 48 - 70}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {

  },
  video: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  footer: {
    marginTop: "auto",
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  caption: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    margin: 10,
  },
  rightColumn: {
    gap: 14,
    marginBottom: 110,
  },
  leftColumn: {
    flex: 1,
  },
  overlay: {
    top: '50%',
  }
});
