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
  changeIsFinished: (id: string) => {
    set((state: any) => (
      {
        tasks: state.tasks.map((task: Task) => task.id === id ? {...task, isFinished: !task.isFinished} : task)
      }
    ))
  },
  getFilteredTasks: (tab: string, searchQuery: string) => {
    return tasks.filter((task) => {
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
}));

export default useTasksStore
