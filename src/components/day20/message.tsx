//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

type IProps = {
  message: {
    role: string;
    content: string;
  };
};

const Message = ({message}: IProps) => {
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
      </View>
    </View>
  );
};

export default Message;
