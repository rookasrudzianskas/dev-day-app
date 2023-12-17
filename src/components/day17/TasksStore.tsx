import { create } from 'zustand'
import {dummyTasks} from "@/src/components/day17/data";

const useTasksStore = create((set) => ({
  tasks: dummyTasks,
}))

export default useTasksStore
