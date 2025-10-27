import "../index.css";
import { useState, useEffect } from "react";
import { useEditStore, useTaskStore, type TaskItem } from "../Store/Task";
import { CategoryOptions } from "./CategoryOptions";
import { useSelectedCategoryStore } from "../Store/Category";

export const TaskModal = () => {
  const { createUpdateTask } = useTaskStore();
  const { currentTask, setIsTaskOpen, setCurrentTask } = useEditStore();
  const { selectedCategory, setSelectedCategory } = useSelectedCategoryStore();
  useEffect(() => {
    if (currentTask) {
      setSelectedCategory(currentTask.category);
    }
  }, [currentTask]);

 
  const [title, setTitle] = useState(currentTask?.title || "");
  const [discription, setDiscription] = useState(
    currentTask?.discription || ""
  );
  const [startTime, setStartTime] = useState(currentTask?.startTime || "");
  const [endTime, setEndTime] = useState(currentTask?.endTime || "");
  const [date, setDate] = useState(currentTask?.date || "");
  const [status, setStatus] = useState(currentTask?.status || "In-Progress");
  const [Error, setError] = useState("");

  const addUpdateTask = () => {
    if (
      !title.trim() ||
      !discription.trim() ||
      !date ||
      !startTime ||
      !endTime ||
      !selectedCategory.trim()
    ) {
      setError("All fields are required");
      return;
    }

    const task: TaskItem = {
      id: currentTask ? currentTask.id : crypto.randomUUID(),
      title,
      discription,
      startTime,
      endTime,
      date,
      category: selectedCategory,
      status,
    };

    createUpdateTask(task);
    setCurrentTask(null);
    console.log(task);

    setIsTaskOpen(false);

    setTitle("");
    setDate("");
    setDiscription("");
    setStartTime("");
    setEndTime("");
    setStatus("");
    setSelectedCategory("");
  };

  return (
    <>
      <div
        id="modal-box"
        className="fixed inset-0  flex justify-center items-center z-10"
      >
        <div className=" bg-white w-screen md:w-[600px] border-2 rounded text-gray-300 h-[700px] flex flex-col py-2 px-2  ">
          <div className="flex justify-end ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-600 cursor-pointer "
              onClick={() => {
                setCurrentTask(null), setIsTaskOpen(false);
              }}
            >
              <line
                x1="18"
                y1="6"
                x2="6"
                y2="18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              ></line>
              <line
                x1="6"
                y1="6"
                x2="18"
                y2="18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              ></line>
            </svg>
          </div>
          <div className="flex justify-center ">
            <h1 className="text-xl font-bold text-gray-700">Add Task</h1>
          </div>
          <div className="flex flex-col justify-center p-4 md:gap-2">
            <div className="flex flex-col ">
              <label className="text-gray-400 text-sm md:text-base" htmlFor="">
                Title
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border border-1-gray-300 py-2 px-2 rounded outline-none"
                  type="text"
                  placeholder="Title"
                />
                {Error && <p className="text-red-500 text-xs ">{Error}</p>}
              </label>
            </div>

            <div>
              <label
                className="text-gray-400 text-sm md:text-base  "
                htmlFor=""
              >
                Date
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border border-1-gray-300 py-2 px-2 rounded outline-none"
                  type="date"
                  name=""
                  id=""
                />
              </label>
              {Error && <p className="text-red-500 text-xs ">{Error}</p>}
            </div>
            <div className="flex flex-col gap-4 items-center md:flex md:flex-row justify-between">
              <div>
                <label
                  className="text-gray-400 flex flex-col items-start text-sm md:flex md:flex-row md:text-base md:items-center md:gap-2"
                  htmlFor=""
                >
                  Start Time
                  <input
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-80 md:w-25 py-3 px-3 border border-1-gray-300 outline-none rounded"
                    type="time"
                    name=""
                    id=""
                  />
                </label>
                {Error && <p className="text-red-500 text-xs ">{Error}</p>}
              </div>
              <div>
                <label
                  className="flex flex-col items-start text-sm text-gray-400 md:flex md:flex-row md:text-base md:items-center md:gap-2"
                  htmlFor=""
                >
                  End Time
                  <input
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-80 md:w-25 py-3 px-3 border border-1-gray-300 outline-none rounded"
                    type="time"
                    name=""
                    id=""
                  />
                </label>
                {Error && <p className="text-red-500 text-xs ">{Error}</p>}
              </div>
            </div>

            <div>
              <label className="text-gray-400 text-sm md:text-base" htmlFor="">
                Discription{" "}
                <textarea
                  value={discription}
                  onChange={(e) => setDiscription(e.target.value)}
                  className="w-full border border-1-gray-300 py-2 px-2 rounded outline-none"
                  placeholder="Add Discription..."
                />
              </label>
              {Error && <p className="text-red-500 text-xs ">{Error}</p>}
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-2  md:flex md:flex-row  md:justify-between md:items-center">
              <div className="flex flex-col items-start  md:gap-2 items-center mb-2">
                {}
                <div className="flex items-center gap-2">
                  <label className="text-gray-400 flex flex-col text-sm md:text-base">
                    Add Category
                    <input
                      type="text"
                      value={selectedCategory}
                      onChange={(e) => {
                        setSelectedCategory(e.target.value);
                      }}
                      className=" outline-none py-2 w-70 md:py-2 px-2 border border-gray-400 rounded"
                    />
                  </label>
                  <div className="relative top-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
                      <path
                        d="M20.3334 15H9.66669M15 9.66666V20.3333"
                        stroke="#F8F7FF"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>

                {Error && <p className="text-red-500 text-xs ">{Error}</p>}
              </div>
              <div className="relative top-[-5px]">
                <label
                  htmlFor=""
                  className="flex flex-col text-gray-400 text-sm md:text-base"
                >
                  Status
                  <select
                    className="outline-none py-2 px-2 border border-gray-400 rounded"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    name=""
                    id=""
                  >
                    <option value="In Progress">In-Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </label>
              </div>
            </div>
            <div className=" hidden md:block md:flex gap-2 flex-wrap justify-center">
              <CategoryOptions />
            </div>
            <div>
              <button
                onClick={() => addUpdateTask()}
                className="w-full bg-[#4B7BE5] py-2 text-sm md:p-3 rounded text-white md:text-lg cursor-pointer md:mt-3"
              >
                Create a Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
