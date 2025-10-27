import { useCategoryStore } from "../Store/Category";
import { useTaskStore } from "../Store/Task";
export const CategoryCard = () => {
  const { categories } = useCategoryStore();
  const { task } = useTaskStore();
  const choosingCat = categories.map((c) => {
    const chosen = task.filter((t) => t.category === c.name);
    return chosen.length;
  });
  const progresPerCat = categories.map((c) => {
    const tasksPerCat = task.filter((t) => t.category === c.name);
    const taskPerCatLength = tasksPerCat.length;
    const taskDone = tasksPerCat.filter((t) => t.status === "Completed");
    const tasksDoneLength = taskDone.length;
    const progress =
      taskPerCatLength > 0
        ? Math.floor((tasksDoneLength / taskPerCatLength) * 100)
        : 0;

    return progress;
  });

  return (
    <>
    
      <div  className="flex gap-3 mt-4 ">
        {categories.map((item, index) => (
          <div
            key={index}
            className=" shadow-[0px_4px_6px_rgba(0,0,0,0.2)] rounded w-[230px] h-[170px] flex-shrink-0 "
          >
            <div className="bg-gradient-to-r from-[#0093E9] to-[#80D0C7] rounded-t-2xl py-3 px-3 h-30">
              <div className=" flex flex-col items-start justify-end h-full ">
                <h1 className="text-xl text-white ">{item.name}</h1>
                <p className="text-white text-sm">
                  {choosingCat[index]} Projects
                </p>
              </div>
            </div>
            <div className="px-4 mt-2">
              <h1 className="text-gray-700 font-bold">
                {progresPerCat[index]}%
              </h1>
              <div className="w-[60px] h-[3px] bg-gray-300 rounded-md overflow-hidden" >
                <div
                  className="h-full "
                  style={{ width: `${progresPerCat[index]}%`, backgroundColor: '#0093E9' }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
