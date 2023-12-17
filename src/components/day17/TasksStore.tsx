import { create } from 'zustand'
import {dummyTasks} from "@/src/components/day17/data";
import { persist, createJSONStorage } from 'zustand/middleware'

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

const useTasksStore = create<TasksStore>(
  persist(
    name: 'tasks',
    storage: createJSONStorage(() => sessionStorage),
  })
);



export default useTasksStore
