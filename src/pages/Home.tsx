import { SideBar } from "../components/sideBar";
import { Header } from "../components/Header";
import { TaskCat } from "../components/TasksCat";

export const Home = () => {

  return (
    <>
      
        <div className=" flex w-[90%] ">
          <div>
            <SideBar />
          </div>
          <div className="flex-1 flex flex-col w-full">
            <Header />
            <div className="px-4 ">
              <TaskCat />
            </div>
          </div>
        </div>
      
    </>
  );
};
