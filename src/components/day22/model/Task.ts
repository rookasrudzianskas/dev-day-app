// @ts-nocheck
import {field, text, writer} from '@nozbe/watermelondb/decorators'
import {Database, Model} from "@nozbe/watermelondb";

export default class Task extends Model {
  static table = 'tasks';

  @text('title') title
  @text('is_finished') isFinished

  @writer static async addTask(title) {
    return new Task(title).create((task) => {
      task.title = title;
      task.isFinished = false;
    })
  }
}
