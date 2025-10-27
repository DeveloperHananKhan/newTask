import { useEffect,useState } from "react";
import { useCalendarStore } from "../Store/Calendar";
import { useTaskStore } from "../Store/Task";
import { Link } from "react-router-dom";
export const NewTasks = () => {

 const { task } = useTaskStore();
 const { schedule, scheduleFunction } = useCalendarStore();

 
   useEffect(() => {
     scheduleFunction();
   }, []);
   const today = new Date();
   const currentDay = today.getDate();
 
   const [selectedDate, setSelectedDate] = useState(currentDay);

  const schdeuledTasks = task.filter((t) => {
     const taskDay = new Date(t.date).getDate(); 
  return taskDay === selectedDate;
  } )
  const [activeTask, setActiveTask] = useState<string | null>(
    schdeuledTasks.length > 0 ? schdeuledTasks[0].id : null
  );
   useEffect(() => {
    if (schdeuledTasks.length > 0) {
      setActiveTask(schdeuledTasks[0].id);
    } else {
      setActiveTask(null);
    }
  }, [selectedDate, task]);
  
    return(<>

    <div className="w-screen  p-4">
        <div className="flex relative items-center ">
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

          <h1 className="absolute left-1/2 transform -translate-x-1/2 font-bold text-xl">
            Schedule
          </h1>
        </div>
        <div className="flex justify-around py-2">
          {schedule.map((value: { weekday: string; day: number }) => (
            <div
              className={
                value.day === selectedDate
                  ? "bg-[#4B7BE5] w-10 py-2 rounded text-white flex flex-col items-center md:w-12 cursor-pointer"
                  : "bg-white py-2 w-10 md:w-12 cursor-pointer"
              }
              key={value.weekday}
              onClick={()=>setSelectedDate(value.day)}
            >
              <h1 className="text-sm text-gray-400">{value.weekday}</h1>
              <h1 className="font-bold text-base">{value.day}</h1>
            </div>
          ))}
        </div>
       
      </div>
      
    
    {
      schdeuledTasks.length > 0  ? (
   
      <div>
        {schdeuledTasks.map((t) => {
          return (
            <div
              className="flex items-center gap-3 p-2 justify-center"
              key={t.id}
            >
              <div>
                <h1 className="text-gray-400 "> {t.startTime} </h1>
              </div>
              <div
                onClick={() => setActiveTask(t.id)}
                className={`flex flex-col  ${
                  activeTask === t.id
                    ? "bg-[#4B7BE5] rounded py-2 px-2"
                    : "bg-white text-black"
                } w-90 md:w-110 `}
              >
                <h1
                  className={`${
                    activeTask === t.id ? "text-white" : "text-gray-700"
                  } font-bold`}
                >
                  {t.title}
                </h1>
                <div className="flex gap-3">
                  <p
                    className={`${
                      activeTask === t.id ? "text-gray-400" : "text-gray-700"
                    }  text-sm`}
                  >
                    {t.startTime}
                  </p>
                  <p
                    className={`${
                      activeTask === t.id ? "text-gray-400" : "text-gray-700"
                    }  text-sm`}
                  >
                    -
                  </p>
                  <p
                    className={`${
                      activeTask === t.id ? "text-gray-400" : "text-gray-700"
                    }  text-sm`}
                  >
                    {t.endTime}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div> ) : 
      
      (<div className="flex justify-center items-center">
        <h1 className="text-gray-400 ">No Tasks scheduled for this Date</h1>
      </div>)
      
      }
    
    </>)
}