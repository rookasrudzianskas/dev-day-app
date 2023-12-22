// @ts-nocheck
// index.js
import { field, text } from '@nozbe/watermelondb/decorators'
import {Database, Model} from "@nozbe/watermelondb";

export default class Task extends Model {
  static table = 'tasks';

  @text('title') title
  @text('is_finished') isFinished
}
