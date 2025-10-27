import { CategoryCard } from "./CategoryCard";
import { TaskCard } from "./TaskCard";

export const TaskCat = () => {
  return (
    <>
      <div className="w-[400px] overflow-hidden md:w-[700px] lg:w-full">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="font-semi-bold text-xl text-gray-800">Categories</h1>
            <p className="text-sm text-gray-400 cursor-pointer">View All</p>
          </div>
        </div>
        <div className=" overflow-x-scroll lg:overflow-x-hidden">
          <CategoryCard />
        </div>
        <TaskCard />
      </div>
    </>
  );
};
