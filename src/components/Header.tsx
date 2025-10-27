import { MobileSideBar } from "./mobileSideBar";
import { useModalStore } from "../Store/Modal";
import { TaskModal } from "./TaskModal";
import { useEditStore} from "../Store/Task"; 
import  { useQueryStore } from "../Store/Search";
export const Header = () => {
  const {query,setQuery} = useQueryStore()
  const { isOpen, setOpen } = useModalStore();
  const { isTaskOpen, setIsTaskOpen } = useEditStore();
  const today = new Date();
  const month = [
    "December",
    "January",
    "Feburay",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
  ];
  const currentDay = {
    monthday: month[today.getMonth()],
    day: today.getDay(),
    year: today.getFullYear(),
  };
  return (
    <>
      {isTaskOpen && <TaskModal />}
      <div className="  flex flex-col w-auto  gap-8  m-2 px-2 md:m-10  ">
        <div className="flex justify-between  w-full py-4 md:hidden lg:hidden">
          <button
            onClick={() => {
              setOpen(true);
            }}
          >
            <svg
              width="28"
              height="17"
              viewBox="0 0 28 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                opacity="0.7"
                x1="1.5"
                y1="8.5"
                x2="17.7"
                y2="8.5"
                stroke="#363942"
                stroke-width="3"
                stroke-linecap="round"
              />
              <line
                opacity="0.7"
                x1="1.5"
                y1="15.5"
                x2="26.5"
                y2="15.5"
                stroke="#363942"
                stroke-width="3"
                stroke-linecap="round"
              />
              <line
                opacity="0.7"
                x1="1.5"
                y1="1.5"
                x2="12.1"
                y2="1.5"
                stroke="#363942"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <div className="flex ">
            <img
              className="h-10 justify-self-end"
              src="https://reqres.in/img/faces/2-image.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col md:flex md:">
          <div className="md:flex justify-between items-center .">
            <div className="hidden md:block md:flex items-center gap-2 w-120">
              <input
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
                type="search"
                className="w-60 py-2 px-2 outline-none border border-2 border-gray-300 rounded lg:w-100  "
                placeholder="Find Your Tasks"
              />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <g opacity="0.8">
                  <path
                    d="M15 14L20 19"
                    stroke="#363942"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z"
                    stroke="#363942"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div>
              <button
                onClick={() => setIsTaskOpen(true)}
                className="hidden lg:block bg-[#4B7BE5] text-white mb-4  md:text-lg font-semi-bold px-2  py-2 rounded cursor-pointer relative top-2"
              >
                Add Task
              </button>
            </div>

            <div className="md:flex justify-end gap-4">
              <h1 className="flex flex-col font-bold text-lg text-gray-800 mb-2">
                Hello Eve{" "}
                <span className="font-normal text-xs text-gray-400">
                  {currentDay.day} {currentDay.monthday} ,{currentDay.year}
                </span>
              </h1>
              <div className="hidden md:block">
                <img
                  className="h-20 rounded"
                  src="https://reqres.in/img/faces/2-image.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <button
                onClick={() => setIsTaskOpen(true)}
                className="bg-[#4B7BE5] text-white mb-4  md:text-sm font-semi-bold px-2  py-2 rounded cursor-pointer relative top-2 lg:hidden"
              >
                Add Task
              </button>
            </div>
          </div>
          <div className="w-full relative md:hidden">
            <input
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
              type="search"
              className="w-full py-2 px-2 outline-none border border-2 border-gray-300 rounded md:w-[50%]  "
              placeholder="Find Your Tasks"
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[90%] top-3 md:left-[72%]"
            >
              <g opacity="0.8">
                <path
                  d="M15 14L20 19"
                  stroke="#363942"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z"
                  stroke="#363942"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={`h-screen bg-white fixed top-0 left-0 w-[210px] h-full z-40 transition-transform duration-300 ease-in-out md:hidden lg:hidden
  ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <MobileSideBar />
        </div>
      )}
    </>
  );
};
