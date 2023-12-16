// write React Context Boilerplate code
import {createContext, PropsWithChildren, useContext, useState} from "react";
import {dummyTasks} from "@/src/components/day16/data";

export type Task = {
  title: string;
  isFinished: boolean;
};

export const TasksContext = createContext({});

const TasksContextProvider = ({ children }: PropsWithChildren) => {
  const [tasks, setTasks] = useState<Task[]>(dummyTasks);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks
      }}>
      {children}
    </TasksContext.Provider>
  )
}

export default TasksContextProvider;

export const useTasks = () => useContext(TasksContext);
