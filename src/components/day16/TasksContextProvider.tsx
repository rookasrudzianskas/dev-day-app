import {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";
import {dummyTasks} from "@/src/components/day16/data";
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from "react-native";

export type Task = {
  id: string;
  title: string;
  isFinished: boolean;
};

export type TasksContext = {
  tasks: Task[],
  setTasks: (tasks: Task[]) => void,
  changeIsFinished: (id: string) => void,
  deleteTask: (id: string) => void,
  getFilteredTasks?: (tab: string, searchQuery: string) => Task[],
  addTask: (title: string) => Task | undefined,
  saveData: () => void,
  loadData: () => void,
}

export const TasksContext = createContext<TasksContext>({
  tasks: [],
  setTasks: () => {},
  changeIsFinished: (id: string) => {},
  deleteTask: (id: string) => {},
  getFilteredTasks: (tab: string, searchQuery: string) => [],
  addTask: (title: string) => {
    return [] as any as Task;
  },
  saveData: () => {},
  loadData: () => {},
});

const TasksContextProvider = ({ children }: PropsWithChildren) => {
  const [tasks, setTasks] = useState<Task[]>(dummyTasks);
  const [isLoaded, setIsLoaded] = useState(false);

  const saveData = async () => {
    try {
      const jsonValue = JSON.stringify(tasks);
      await AsyncStorage.setItem('tasks', jsonValue);
    } catch (e) {
      // saving error
      Alert.alert('Error', 'Error saving data');
    }
  }

  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('tasks');
      if(jsonValue) {
        const loadedTasks = JSON.parse(jsonValue) as Task[];
        setTasks(loadedTasks);
      }
    } catch (e) {
      // error reading value
      Alert.alert('Error', 'Error loading data');
    } finally {
      setIsLoaded(true);
    }
  }

  const changeIsFinished = (id: string) => setTasks((currentTasks) => currentTasks.map((task) => task.id === id ? {...task, isFinished: !task.isFinished} : task));
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

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if(isLoaded) {
      saveData();
    }
  }, [tasks]);

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
        changeIsFinished,
        deleteTask,
        getFilteredTasks,
        addTask,
        saveData,
        loadData,
      }}>
      {children}
    </TasksContext.Provider>
  )
}

export default TasksContextProvider;

export const useTasks = () => useContext(TasksContext);
