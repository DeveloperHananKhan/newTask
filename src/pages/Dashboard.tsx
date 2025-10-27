
import { Link } from "react-router-dom";
import { useTaskStore } from "../Store/Task";

export const Dashboard = () => {
  const {task} = useTaskStore()
     const today = new Date()
  const month = ['December','January','Feburay','March','April','May','June','July','August','September','October','November']
  const currentDay = {
        monthday: month[today.getMonth()],
        day: today.getDay(),
        year: today.getFullYear(),
       time: today.getTime()
  }
  const totalTasksDone = task.filter((t)=> t.status === 'Completed')
  const totalTasksPending = task.filter((t) => t.status === 'In-Progress')
  const totalPendingLength = totalTasksPending.length
  const tasksLengthDone = totalTasksDone.length
  return (
    <>
      <div className="h-screen w-screen  ">
        <div className="flex items-center px-2 py-2 md:px-4 py-4">
          <div >
            <Link  to={'/home'}>
           
            <svg
             
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 md:h-8"
              
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
             <h1 className="absolute text-gray-700 left-1/2 transform -translate-x-1/2 font-bold text-xl">Profile</h1>
        </div>
        
        <div className="flex bg-white justify-around items-center p-4 md:px-10 py-20 ">
          <div>
            <h3>{tasksLengthDone}</h3>
            <p className="text-gray-400 text-xs md:text-base">Projects Done</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
           
            <img className="rounded" src='https://reqres.in/img/faces/2-image.jpg' alt="" />
            <div className="flex justify-center">
              <h3 className="flex flex-col font-semi-bold md:text-sm">
                Eve Holt{" "}
                <span className="text-xs text-gray-400">Web Developer</span>
              </h3>
            </div>
          </div>

          <div>
          <h3>{totalPendingLength}</h3>
            <p className="text-gray-400 text-xs md:text-base">Projects Pending</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 ">
          <div className="w-30">
            <button className="cursor-pointer bg-[#4B7BE5] w-full rounded text-white py-2">
              Edit Profile
            </button>
          </div>

          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                d="M1 18C1 15.75 4 15.75 5.5 14.25C6.25 13.5 4 13.5 4 9.75C4 7.25025 4.99975 6 7 6C9.00025 6 10 7.25025 10 9.75C10 13.5 7.75 13.5 8.5 14.25C10 15.75 13 15.75 13 18"
                stroke="#4B7BE5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 11H14"
                stroke="#4B7BE5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 7V15"
                stroke="#4B7BE5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div>
            <svg
              width="5"
              height="23"
              viewBox="0 0 5 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <circle cx="2" cy="2" r="2" fill="#4B7BE5" />
              <circle cx="2" cy="11" r="2" fill="#4B7BE5" />
              <circle cx="2" cy="20" r="2" fill="#4B7BE5" />
            </svg>
          </div>
        </div>

        <div className="py-10 md:py-20 ">
          <ul className="flex flex-col px-3 gap-4 md:flex md:flex-row md:justify-around ">
            <li className="flex items-center gap-2 ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C16 16.8 18 12.8 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.8 8 16.8 12 21Z"
                  stroke="#FBCB0A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10Z"
                  stroke="#FBCB0A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="flex flex-col text-sm lg: text-xl">
                Location
                <span className="text-gray-400 text-xs">
                  Street 14, Seokarno hatta
                </span>
              </p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#37E2D5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 5V12L16 16"
                  stroke="#37E2D5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="flex flex-col text-sm lg: text-xl">
                Local Time
                <span className="text-gray-400 text-xs">
                  {currentDay.day} {currentDay.monthday} ,{currentDay.year}
                </span>
              </p>
            </li>
            <li className="flex items-center gap-2 ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 5H2V19H22V5Z"
                  stroke="#F73D93"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 5L12 14L22 5"
                  stroke="#F73D93"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="flex flex-col text-sm lg: text-xl">
                Email
                <span className="text-gray-400 text-xs">
                  eve.holt@reqres.in
                </span>
              </p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7408 18.4036L15.8976 15.2467L21.1147 18.8853L19.9444 20.0556C19.1648 20.8351 18.0206 21.1243 16.9643 20.8088C13.7351 19.8441 10.8342 18.0755 8.26172 15.503C5.68922 12.9305 3.92062 10.0296 2.95593 6.8004C2.64037 5.74412 2.92956 4.59987 3.70908 3.82035L4.87937 2.65005L8.51796 7.86707L5.3611 11.0239"
                  stroke="#EE5007"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="flex flex-col text-sm lg: text-xl">
                Phone
                <span className="text-gray-400 text-xs">+01 123454256</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
