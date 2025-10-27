
import  { useQueryStore } from "../Store/Search";
import { useEditStore, useTaskStore,  } from "../Store/Task";
import { TaskModal } from "./TaskModal";
import { Link } from "react-router-dom";
export const TaskCard = () => {
  const { task, deleteTask} = useTaskStore();
  const {filteredTask} = useQueryStore()
  const {isTaskOpen,setIsTaskOpen,setCurrentTask} = useEditStore()
const displayedTasks = filteredTask().slice(0, 3);
  

  return (
    <>  
    <div className="flex justify-between items-center">
          <h1 className="font-semi-bold text-xl text-gray-800 flex items-center gap-2">
            My Tasks <span className="text-gray-400">{task.length}</span>
          </h1>
          <Link to={"/tasklist"}>
            <p className="text-sm text-gray-400 cursor-pointer">View All</p>
          </Link>
        </div>{isTaskOpen && <TaskModal />}
        
      { displayedTasks.length ===  0 ?( <div className="flex justify-center items-center  h-100">
          <h1 className="text-gray-400 ">No Tasks Added</h1>
        </div>) : (
        <div className="mb-3">
          {displayedTasks.map((t) => {
            return (
              <div
                className="flex items-center gap-3 p-2 mt-4 w-full shadow-[0px_4px_6px_rgba(0,0,0,0.2)] rounded "
                key={t.id}
              >
                

                <div className="flex flex-col gap-2 w-full ">
                  <div className="flex items-center">
                    <div>
                      <h1 className="text-xl">{t.title}</h1>
                      <p className="text-gray-400">{t.category}</p>
                    </div>
                    <div className="flex gap-3 w-full justify-end">
                      <div>
                        <button
                          className="cursor-pointer"
                          onClick={() => deleteTask(t.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="text-red-500"
                          >
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6l-2 14H7L5 6"></path>
                            <path d="M10 11v6"></path>
                            <path d="M14 11v6"></path>
                            <path d="M5 6l1-2h12l1 2"></path>
                          </svg>
                        </button>
                      </div>
                      <div>
                        <button onClick={()=>{setCurrentTask(t),setIsTaskOpen(true)}} className="cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M12 20h9"></path>
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"></path>
                          </svg>
                        </button>
                      </div>
                      <div>
                        <button className="cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="text-gray-900"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-gray-300"></div>
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-3">
                      <div>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_2_319)">
                            <path
                              d="M7.99998 14.6667C11.6819 14.6667 14.6666 11.6819 14.6666 7.99999C14.6666 4.3181 11.6819 1.33333 7.99998 1.33333C4.31808 1.33333 1.33331 4.3181 1.33331 7.99999C1.33331 11.6819 4.31808 14.6667 7.99998 14.6667Z"
                              stroke="#4B7BE5"
                              stroke-width="2"
                              stroke-linecap="square"
                            />
                            <path
                              d="M8 3.33333V8L10.6667 10.6667"
                              stroke="#4B7BE5"
                              stroke-width="2"
                              stroke-linecap="square"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2_319">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p>{t.startTime}</p>
                      <p>-</p>
                      <p>{t.endTime}</p>
                    </div>
                    <div>
                      <h4 className="bg-[#4B7BE5] text-white text-center py-1 px-2 rounded-full">
                        {t.status}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
