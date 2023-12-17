import { create } from 'zustand'
import {dummyTasks} from "@/src/components/day17/data";
import {Task} from "@/src/components/day17/TasksContextProvider";

const useTasksStore = create((set, get) => ({
  tasks: dummyTasks,
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
}));

export default useTasksStore
