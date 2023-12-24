//@ts-nocheck
import React from 'react';
import {Text, View, Image} from 'react-native';

type IProps = {
  message: {
    role: string;
    content: string;
  };
  loading: boolean;
};

const Message = ({message, loading}: IProps) => {
  return (
    <View
      className={`flex flex-row ${
        message.role === 'user' ? 'justify-end' : 'justify-start'
      }`}
    >
      <View
        className={`${
          message.role === 'user'
            ? 'bg-blue-500'
            : 'bg-neutral-300'
        } rounded-md p-2 mb-2`}
      >
        <Text
          className={`${
            message.role === 'user'
              ? 'text-white'
              : 'text-neutral-900'
          }`}
        >
          {message.content}
        </Text>

        {message.role === 'image' && (
          <Image
            className="w-full h-48 mt-2"
            source={{uri: message.content}}
          />
        )
      }
      </View>
      {/*{loading && message.role !== 'user' && (*/}
      {/*  <View className="ml-2">*/}
      {/*    <Text className="text-neutral-500">...</Text>*/}
      {/*  </View>*/}
      {/*)}*/}
    </View>
  );
};

export default Message;
