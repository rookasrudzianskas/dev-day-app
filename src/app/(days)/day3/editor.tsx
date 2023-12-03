//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, Pressable, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import MarkdownDisplay from "@/src/components/day3/markdown-display";

const template = `# 🎉 Fun with Markdown!

## 🚀 Introduction
Welcome to this **fun and exciting** markdown guide! Let's dive into the world of Markdown and discover how it makes text formatting cool and easy!

## 🎈 Basics: Add Some Flair

- **Bold and Beautiful:** Make your text stand out! Use \`**\` or \`__\`. Example: **Look at me!**
- *Sassy Italics:* Add a slant with \`*\` or \`_\`. Example: *I'm leaning!*

### 🍔 Let's List Some Fun Things!

1. 🌟 Star gazing
2. 🏖 Beach parties
3. 🍕 Pizza nights

- 🎮 Video games
- 📚 Reading a good book
- 🧘 Yoga time

## 🌈 Advanced Fun

### 🖼 Adding Images and Links

A cute pic: 

![Cute Cat](https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/6.jpg)

Visit a fun site: [Fun Site](https://example.com)

### 🎶 Code Block Party

\`\`\`javascript
// JavaScript party trick
function partyTime() {
    console.log("Let's dance 💃🕺!");
}
\`\`\`

## 🎤 Conclusion
Markdown is not just for formatting; it's for having fun while expressing yourself! Keep exploring and enjoy the markdown party! 🎊

> Enjoy crafting your own fun markdown documents! 🎨🎉
`;

const EditorScreen = () => {
  const [content, setContent] = useState(template);
  const [tab, setTab] = useState('edit');

  return (
    <View className="flex-1 p-3 bg-neutral-50">
      <View className="flex flex-row gap-4">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setTab('edit')}
          className={`flex-1 rounded-md flex items-center justify-center border border-2 ${tab === 'edit' ? 'border-purple-400' : 'border-gray-300'} py-3 mb-3`}
        >
          <Text className="text-md font-semibold">Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setTab('preview')}
          className={`flex-1 rounded-md flex items-center justify-center border border-2 ${tab === 'preview' ? 'border-purple-400' : 'border-gray-300'} py-3 mb-3`}
        >
          <Text className="text-md font-semibold">Preview</Text>
        </TouchableOpacity>
      </View>

      {tab === 'edit' ? (
        <View style={{ flex: 1, borderWidth: 1, borderColor: 'transparent' }}>
          <ScrollView
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: 'transparent',
              paddingHorizontal: 5, // Adjust padding as needed
              borderRadius: 8, // Adjust border radius as needed
            }}
            showsVerticalScrollIndicator={false} // Hide the scroll indicator for ScrollView
          >
            <TextInput
              value={content}
              onChangeText={setContent}
              multiline
              numberOfLines={50}
              style={{
                flex: 1,
                fontSize: 14,
              }}
            />
          </ScrollView>
        </View>

      ) : (
        <MarkdownDisplay>
          {content}
        </MarkdownDisplay>
      )}
    </View>
  );
};

export default EditorScreen;

const styles = StyleSheet.create({

});
