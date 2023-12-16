// write React Context Boilerplate code
import {createContext, PropsWithChildren, useContext, useState} from "react";

const TasksContext = createContext({

});

const TasksContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <TasksContext.Provider
      value={{
        hello: 'world',
      }}>
      {children}
    </TasksContext.Provider>
  )
}

export default TasksContextProvider;

export const useTasksContext = () => useContext(TasksContext);
