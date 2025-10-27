import { useCategoryStore,useSelectedCategoryStore } from "../Store/Category";
export const CategoryOptions = () => {
  const { categories } = useCategoryStore();
const {setSelectedCategory} = useSelectedCategoryStore()

  const BGcolor = [
    "bg-[#764AF1]/17",
    "bg-[#A760FF]/17","bg-[#947EC3]/17","bg-[#F56D91]/17","bg-[#92BA92]/17","bg-[#F8CB2E]/17","bg-[#525E75]/17","bg-[$006E7F]/17",
  ];
  const color = [
    "text-[#764AF1]",
    "text-[#A760FF]",
    "text-[#947EC3]",
    "text-[#F56D91]",
    "text-[#92BA92]",
    "text-[#F8CB2E]",
    "text-[#525E75]",
    "text-[$006E7F]",
  ];
 
  return (
    <>
      {categories.map((c) => {
        const randomBG = BGcolor[Math.floor(Math.random() * BGcolor.length)];
        const randomColor = color[Math.floor(Math.random() * color.length)]
        return (
          <div onClick={()=>setSelectedCategory(c.name)} className={`${randomBG} ${randomColor} py-2 px-2 text-xs rounded`} key={c.id}>
            <button>{c.name}</button>
          </div>
        );
      })}
    </>
  );
};
