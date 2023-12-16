// write React Context Boilerplate code
import {createContext, PropsWithChildren, useContext, useState} from "react";
import {dummyTasks} from "@/src/components/day16/data";
import { v4 as uuidv4 } from 'uuid';

export type Task = {
  id: string;
  title: string;
  isFinished: boolean;
};

export type TasksContext = {
  tasks: Task[],
  setTasks: (tasks: Task[]) => void,
  onItemPressed: (index: number) => void,
  deleteTask: (id: string) => void,
  getFilteredTasks?: (tab: string, searchQuery: string) => Task[],
  addTask: (title: string) => Task | undefined,
}

export const TasksContext = createContext<TasksContext>({
  tasks: [],
  setTasks: () => {},
  onItemPressed: (index: number) => {},
  deleteTask: (id: string) => {},
  getFilteredTasks: (tab: string, searchQuery: string) => [],
  addTask: (title: string) => {
    return [] as any as Task;
  }
});

const TasksContextProvider = ({ children }: PropsWithChildren) => {
  const [tasks, setTasks] = useState<Task[]>(dummyTasks);

  const onItemPressed = (index: number) => {
    setTasks((currentTasks) => {
      const updatedTasks = [...currentTasks];
      updatedTasks[index].isFinished = !updatedTasks[index].isFinished;
      return updatedTasks;
    });
  };

  const deleteTask = (id: string) => setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Math.random().toString(),
      title,
      isFinished: false
    }
    setTasks((currentTasks) => [...currentTasks, newTask])
    return newTask;
  }

  const getFilteredTasks = (tab: string, searchQuery: string) => {
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
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        onItemPressed,
        deleteTask,
        getFilteredTasks,
        addTask,
      }}>
      {children}
    </TasksContext.Provider>
  )
}

export default TasksContextProvider;

export const useTasks = () => useContext(TasksContext);
