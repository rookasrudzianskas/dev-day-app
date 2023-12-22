import { Platform } from 'react-native'
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import schema from "@/src/components/day22/model/schema";
import migrations from "@/src/components/day22/model/migrations";

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: true, /* Platform.OS === 'ios' */
  onSetUpError: error => {
    console.log('db error', error)
  }
})

// Then, make a Watermelon database from it!
const database = new Database({
  adapter,
  modelClasses: [
    // Post, // ⬅️ You'll add Models to Watermelon here
  ],
})
