import { create } from "zustand";
import type { TaskItem } from "./Task";
import { useTaskStore } from "./Task";

interface Search {
  query: string;
  setQuery: (value: string) => void;
  filteredTask: () => TaskItem[];
}

export const useQueryStore = create<Search>((set, get) => ({
  query: "",
  setQuery: (value) => set({ query: value }),

  filteredTask: () => {
    const { task } = useTaskStore();
    const { query } = get();

   
    return query ? task.filter((t) =>
      t.title.toLowerCase().startsWith(query.toLowerCase())
    )
  : task;
  },
}));
