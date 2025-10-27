
import { create } from "zustand"
;



export interface TaskItem{
    id: string
    title: string;
    startTime:string;
    endTime:string;
    discription:string;
    date:string;
    category:string;
    status:string
}

interface Tasks{
    task:TaskItem[] ,
    createUpdateTask : (task : TaskItem) => void
    deleteTask :(id: string ) => void,
   

}
export const useTaskStore = create<Tasks>((set)=>({
task :JSON.parse(localStorage.getItem("tasks") || '[]'),

  createUpdateTask : (task) => {
    set((state) => {

        const exists = state.task.find((t) => t.id === task.id)

        const updatedTasks = exists
        ? state.task.map((t) =>
            t.id === task.id ? { ...t, ...task } : t
          )
        : [...state.task, task];

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return { task: updatedTasks };
    })
  } 
    
      
        ,
    deleteTask:(id)=>
        set((state)=>{

            const deletdTask = state.task.filter((t)=> t.id !== id)
            localStorage.setItem("tasks",JSON.stringify(deletdTask))
            return {task : deletdTask}
        })
}))


interface TaskModalEdit {
    currentTask : TaskItem | null;
    isTaskOpen: boolean;
    setCurrentTask : (task :TaskItem | null) => void;
    setIsTaskOpen : (value : boolean) => void;
}

export const useEditStore = create<TaskModalEdit>((set)=>({
    currentTask: null,
    isTaskOpen: false,
    setCurrentTask: (task) => set({currentTask : task}),
    setIsTaskOpen: (value) => set({isTaskOpen : value})
}))


