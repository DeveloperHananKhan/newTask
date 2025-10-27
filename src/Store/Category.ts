import { create } from "zustand";


export interface CategoryType {
  id: string;
  name: string;
}
export interface CategoryItems {
  categories: CategoryType[];
  createCategory: (newCategory: CategoryType) => void;
  deleteCategory: (id: string) => void;
}

const initalCategory: CategoryType[] = [{
    id: crypto.randomUUID(),
    name : 'Web Development' 
},
{
     id: crypto.randomUUID(),
    name : 'Work' 
},
{
     id: crypto.randomUUID(),
    name : 'Personal' 
},
{
     id: crypto.randomUUID(),
    name : 'UI Design' 
},
{
     id: crypto.randomUUID(),
    name : 'Web Design' 
},
{
     id: crypto.randomUUID(),
    name : 'College' 
},
]
export const useCategoryStore = create<CategoryItems>((set) => ({
  categories: localStorage.getItem('category') ? JSON.parse("category") : initalCategory,
  createCategory: (newCategory) => {
    const addedCategories = {
      id: newCategory.id,
      name: newCategory.name,
    };

    set((state) => {
      const updateCategory = [...state.categories, addedCategories];
      localStorage.setItem("category", JSON.stringify(updateCategory));

      return { categories: updateCategory };
    });
  },

  deleteCategory: (id)=>{
      set((state)=>{

        const deletedCategory = state.categories.filter((c)=> c.id !== id);
         localStorage.setItem('category',JSON.stringify(deletedCategory))
        return {categories : deletedCategory}
      });
  }
}));

interface SelectCategory {

  selectedCategory : string,
  setSelectedCategory: (value:string) => void
}

export const useSelectedCategoryStore = create<SelectCategory>((set)=>({
  selectedCategory: '',
  setSelectedCategory : (value) => {

    set({selectedCategory : value})
  }
}))
