
import { TaskModal } from "../components/TaskModal";
import { useTaskStore,useEditStore }  from "../Store/Task";
import { Link } from "react-router-dom";

export const ViewAllTask = () => {
  const { task,deleteTask} = useTaskStore();
   const {setCurrentTask,setIsTaskOpen,isTaskOpen} = useEditStore()

  return (
    <>{isTaskOpen && <TaskModal />}
      <div className="w-[100vw] px-4 py-2 flex flex-col gap-2">
        <div className=" flex mb-3 ">
              <div>
        <Link to={'/home'}>
           
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 6L8 12L14 18"
                stroke="#363942"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
             </Link>
          </div>
          <h1 className="font-bold text-2xl mx-auto">Tasks</h1>
        </div>

        { task.length > 0 ? (task.map((t) => (
          <div
            key={t.id}
            className="shadow-[0px_4px_6px_rgba(0,0,0,0.2)] rounded py-3"
          >
            <div className="grid grid-cols-2 items-center gap-3 lg:flex lg:justify-around lg:items-center">
                <div>
                    <p className="text-sm text-gray-400 font-semi-bold">Start Time</p>
                    <h3 className="font-semi-bold text-gray-700">{t.startTime}</h3>
                </div>
              <div>
                <p className="text-sm text-gray-400 font-semi-bold">Title</p>
                <h3 className="font-semi-bold text-gray-700">{t.title}</h3>
              </div>
              <div>
                <p className="text-sm text-gray-400 font-semi-bold">Date</p>
                <h3 className="font-semi-bold text-gray-700">{t.date}</h3>
              </div>

              <div>
                <p className="text-sm text-gray-400 font-semi-bold">Deadline</p>
                <h3 className="font-semi-bold text-gray-700">{t.endTime}</h3>
              </div>

              <div>
                <p className="text-sm text-gray-400 font-semi-bold">Status</p>
                <h3 className="font-semi-bold text-gray-700">{t.status}</h3>
              </div>

             

              <div className="flex lg:flex gap-2 relative top-2">
                <div>
                  <button className="cursor-pointer" onClick={()=> deleteTask(t.id)}>
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
                  {" "}
                  <button className="cursor-pointer" onClick={()=>{setCurrentTask(t),setIsTaskOpen(true)}}>
                    {" "}
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
              </div>
            </div>

            <div className=" flex justify-self-center mt-4 ">
              <div className="flex gap-2 items-center">
                <p className="text-sm text-gray-400 font-semi-bold">
                  Discription :
                </p>
                <h3 className="font-semi-bold text-gray-700 text-sm">{t.discription}</h3>
              </div>
            </div>
          </div>
        )) ) : 
             <div className="text-gray-400 font-semi-bold text-xl mx-auto mt-10">
                <h1>No Tasks Added</h1>
             </div>
        }
      </div>
    </>
  );
};
