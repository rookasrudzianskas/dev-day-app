//@ts-nocheck
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import {Stack} from "expo-router";
import Message from "@/src/components/day20/message";
import {Ionicons} from "@expo/vector-icons";

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
  const [prompt, setPrompt] = useState('');

  const onSendMessage = () => {
    if (prompt !== '') {
      setMessages([
        ...messages,
        {
          role: 'user',
          content: prompt,
        }
      ]);
      setPrompt('');
    }
  }

  return (
    <View className="pt-16 flex-1 mx-5">
      <Stack.Screen options={{ headerShown: false }} />

      <View className="h-full">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{flex: 1}}
          keyboardVerticalOffset={50}
        >
          <View className="flex flex-1">
            <FlatList
              data={messages}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <Message message={item} />
              )}
            />
          </View>
          <View className="flex flex-row items-center w-full mb-10">
            <TextInput
              className="border border-neutral-300 flex-1 my-auto rounded-md p-2"
              placeholder="Search"
              autoCorrect={false}
              autoCapitalize="none"
              value={prompt}
              onChangeText={setPrompt}
            />
            <TouchableOpacity
              className="bg-primary-500 rounded-md p-2"
              onPress={() => onSendMessage()}
            >
              <Ionicons
                className="text-neutral-300"
                name="send" size={24} color={
                  prompt === '' ? 'darkgrey' : 'black'
              }
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default Analytics;
