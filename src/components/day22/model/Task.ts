// @ts-nocheck
import {field, text, writer} from '@nozbe/watermelondb/decorators'
import {Database, Model} from "@nozbe/watermelondb";
import {database} from "@/src/components/day22/model/index";

export default class Task extends Model {
  static table = 'tasks';

  @text('title') title
  @text('is_finished') isFinished

  @writer static async addTask(title) {
    return new Task().create((task) => {
      task.title = title;
      task.isFinished = false;
    })
  }
}
