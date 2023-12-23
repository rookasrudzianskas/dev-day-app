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

  const fetchAPI = async (endpoint, bodyJson) => {
    const res = await fetch(`http://localhost:3000/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyJson)
    });

    const data = await res.json();

    return data;
  }

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

    const shouldGenerateImage = isImagePrompt(prompt);

    try {
      if(shouldGenerateImage) {
        await generateImage();
      } else {
        await generateCompletion();
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  const isImagePrompt = (prompt) => {
    // const data = await fetchAPI('is-image-prompt', [
    //   {
    //     role: 'system',
    //     content: `You are AI that categorizes prompts. I will give you a prompt and you will tell me if it is an image prompt. You only answer one number 0 to 1.0 that represents your confident you are that the prompt is for image generation.`
    //   },
    //   {
    //     role: 'user',
    //     content: `Categorize the prompt that I will give you and tell me if it s a prompt fr the image generation.
    //       ' Answer with a value from 0 to 1.0 that represents how confident you are that the prompt is an image prompt. The prompt is: ${prompt}`,
    //   }
    // ]);
    const data = [
      {
        "choices": [
          {
            "finish_reason": "stop",
            "index": 0,
            "logprobs": null,
            "text": "0.75",
            "token_logprobs": null
          }
        ],
        "created": 1627002039,
        "id": "cmpl-3Q7o2d0ZqJz7Y7Q4f6bQYgZK",
        "model": "davinci:2020-05-03",
        "object": "text_completion"
      }
    ]

    const answer = data.choices[0].message;
    return answer > 0.75;
  }

  const generateCompletion = async () => {
    const data = await fetchAPI('create-a-ai-completion', [
      ...messages,
      USER_MESSAGE,
    ]);

    setMessages([
      ...messages.filter((message) => message.role !== 'image'),
      {
        role: 'assistant',
        content: data.completion,
      }
    ]);
    setLoading(false);
  }

  const generateImage = async () => {
    const data = await fetchAPI('create-a-ai-image', [
      prompt,
    ]);

    if(data) {
      const imageMessage  = {
        role: 'image',
        content: data.data[0].url,
      };
      setMessages([
        ...messages,
        imageMessage
      ]);
    }
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
          <View className="flex flex-row items-center w-full mb-32">
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
