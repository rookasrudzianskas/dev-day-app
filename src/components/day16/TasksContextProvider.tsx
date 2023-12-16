// write React Context Boilerplate code
import {createContext, PropsWithChildren, useContext, useState} from "react";
import {dummyTasks} from "@/src/components/day16/data";

export type Task = {
  id: string;
  title: string;
  isFinished: boolean;
};

export type TasksContext = {
  tasks: Task[],
  setTasks: (tasks: Task[]) => void,
  onItemPressed: (index: number) => void,
  deleteTask: (index: number) => void,
  getFilteredTasks?: (tab: string, searchQuery: string) => Task[],
  addTask: (title: string) => Task | undefined,
}

export const TasksContext = createContext<TasksContext>({
  tasks: [],
  setTasks: () => {},
  onItemPressed: (index: number) => {},
  deleteTask: (index: number) => {},
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

  const deleteTask = (index: number) => {
    setTasks((currentTasks) => {
      const updatedTasks = [...currentTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });
  };

  const addTask = (title: string) => {
    const newTask: Task = {
      id: '123',
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
