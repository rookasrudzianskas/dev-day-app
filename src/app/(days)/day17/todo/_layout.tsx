import React from "react";
import {Slot, Stack} from "expo-router";
import TasksContextProvider from "@/src/components/day17/TasksContextProvider";

export default function TodoLayout() {
  return (
    <TasksContextProvider>
      <Stack.Screen options={{ headerShown: false }} />
      <Stack />
    </TasksContextProvider>
  )
}
