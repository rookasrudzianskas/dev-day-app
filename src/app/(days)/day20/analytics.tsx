//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {Stack} from "expo-router";

const Analytics = () => {
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: 'Hello',
    },
    {
      role: 'user',
      content: 'How are you?',
    },
    {
      role: 'assistant',
      content: 'Fine, thanks',
    }
  ]);

  return (
    <View className="pt-16 flex-1 mx-5">
      <Stack.Screen options={{ headerShown: false }} />

      <View className="h-full">
        <View className="flex flex-1">
          <FlatList
            data={messages}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <View
                className={`flex flex-row ${
                  item.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <View
                  className={`${
                    item.role === 'user'
                      ? 'bg-blue-500'
                      : 'bg-neutral-300'
                  } rounded-md p-2 mb-2`}
                >
                  <Text
                    className={`${
                      item.role === 'user'
                        ? 'text-white'
                        : 'text-neutral-900'
                    }`}
                  >
                    {item.content}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
        <View className="flex flex-row items-center w-full mb-10">
          <TextInput
            className="border border-neutral-300 flex-1 my-auto rounded-md p-2"
            placeholder="Search"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TouchableOpacity
            className="bg-primary-500 rounded-md p-2"
            onPress={() => {}}
          >
            <Text className="text-primary-500">Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Analytics;
