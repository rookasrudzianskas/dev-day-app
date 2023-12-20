//@ts-nocheck
import React, {useEffect, useRef, useState} from 'react';
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
  const list = useRef(null);
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
  const [loading, setLoading] = useState(false);
  const USER_MESSAGE = {
    role: 'user',
    content: prompt,
  };

  const onSendMessage = async () => {
    setLoading(true);
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

    const res = fetch('http://localhost:3000/create-a-ai-completion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([
        ...messages,
        USER_MESSAGE,
      ])
    });

    const data = await res.json();

    setMessages([
      ...messages,
      {
        role: 'assistant',
        content: data.completion,
      }
    ]);
    setLoading(false);
  }

  useEffect(() => {
    if(list.current) {
      setTimeout(() => {
        list.current.scrollToEnd({
          animated: true,
        });
      }, 100);
    }
  }, [messages]);

  return (
    <View className="pt-16 flex-1 mx-5">
      <Stack.Screen options={{ headerShown: false }} />
      {/* add a badge here */}
      <Text className="text-3xl font-bold">Banana AI</Text>
      <Text className="text-xl mb-5">Talk to the AI</Text>
      <View className="h-full">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{flex: 1}}
          keyboardVerticalOffset={50}
        >
          <View className="flex flex-1">
            <FlatList
              ref={list}
              data={messages.filter((message) => message.role !== 'system')}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <Message message={item} loading={loading} />
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
