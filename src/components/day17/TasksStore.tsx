import { create } from 'zustand'
import {dummyTasks} from "@/src/components/day17/data";

export type Task = {
  id: string;
  title: string;
  isFinished: boolean;
};

type TasksStore = {
  tasks: Task[],
  numberOfCompletedTasks: () => number;
  numberOfTasks: () => number;
  addTask: (title: string) => void,
  deleteTask: (id: string) => void,
  changeIsFinished: (id: string) => void,
  getFilteredTasks: (tab: string, searchQuery: string) => Task[];
}

const useTasksStore = create<TasksStore>((set, get) => ({
  tasks: dummyTasks,
  numberOfCompletedTasks: () => {
    const tasks = get().tasks;
    return tasks.filter((task) => task.isFinished).length;
  },
  numberOfTasks: () => {
    const tasks = get().tasks;
    return tasks.length;
  },
  addTask: (title: string) => {
    const newTask: Task = {
      id: Math.random().toString(),
      title,
      isFinished: false
    }
    set((state: any) => (
      {
        tasks: [...state.tasks, newTask]
      }
      )
    );
  },
  deleteTask: (id: string) => {
    set((state: any) => (
      {
        tasks: state.tasks.filter((task: Task) => task.id !== id)
      }
    ))
  },
  changeIsFinished: (id: string) => {
    set((state: any) => (
      {
        tasks: state.tasks.map((task: Task) => task.id === id ? {...task, isFinished: !task.isFinished} : task)
      }
    ))
  },
  getFilteredTasks: (tab: string, searchQuery: string) => {
    const tasks = get().tasks;
    return tasks.filter((task: Task) => {
      if (task.isFinished && tab === 'Todo') {
        return false;
      }
      if (!task.isFinished && tab === 'Finished') {
        return false;
      }

      if (!searchQuery) {
        return true;
      }

      return task.title
        .toLowerCase()
        .trim()
        .includes(searchQuery.toLowerCase().trim());
    });
  }
}));

export default useTasksStore
