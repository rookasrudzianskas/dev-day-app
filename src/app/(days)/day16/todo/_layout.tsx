import React from "react";
import {Slot, Stack} from "expo-router";

export default function TodoLayout() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Stack />
    </>
  )
}
