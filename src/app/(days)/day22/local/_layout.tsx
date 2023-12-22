import { Slot } from "expo-router";
import { Platform } from 'react-native'
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import schema from "@/src/components/day22/model/schema";
import migrations from "@/src/components/day22/model/migrations";

export function LocalAppLayout() {
  const adapter = new SQLiteAdapter({
    schema,
    migrations,
    jsi: true, /* Platform.OS === 'ios' */
    onSetUpError: error => {
      console.log('db error', error)
    }
  });

  const database = new Database({
    adapter,
    modelClasses: [
      // Post, // ⬅️ You'll add Models to Watermelon here
    ],
  });

  return (
    <Slot />
  )
}
