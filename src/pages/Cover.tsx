import { Link } from "react-router-dom";
export const Cover = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center gap-20 justify-center  ">
        <div className="flex flex-col items-center gap-3">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/business-task-management-6352767-5254142.png?f=webp"
            className="h-50 md:h-80"
          ></img>
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-xl font-bold">Enjoy Your Time</h1>
            <div>
              <p className="text-sm text-gray-400">
                When You Are Confused About{" "}
              </p>{" "}
              <p className="text-sm text-gray-400">
                {" "}
                Managing Your Tasks Come To Us
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[250px]">
          <div>
            <Link to={'/login'}>
            <button className="text-white font-bold bg-[#4B7BE5] w-full  py-2 rounded cursor-pointer lg:hover:bg-[#1858E5]">Login</button>
            </Link>
          </div>
          <div>
            <button className="text-white font-bold bg-[#4B7BE5] w-full  py-2 rounded opacity-70 cursor-pointer active:opacity-100 lg:hover:opacity-100">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};
