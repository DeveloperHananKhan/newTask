import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../Store/Auth";
import { useState } from "react";

export const LogIn = () => {
  const {login} = useAuthStore()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const [loader,setLoader]=useState(false)
  const nav = useNavigate()

  const handleLogin = async ()=>{

    if(!email.trim()  || !password.trim()){
    setError("All field required")
    return;
    }
     setLoader(true)
    try {
   await login(email,password)
      nav('/home')
      
    } catch (error) {
      console.log(error)
      setError('Invalid Credentials')
      setLoader(false)
    }
  }
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col justify-center items-center gap-2">
             <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-15"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.52741 6.3023H11.8941C13.8395 6.3023 15.3227 6.55486 16.3436 7.06C17.3784 7.56514 17.8958 8.41158 17.8958 9.59934C17.8958 10.555 17.5991 11.3059 17.0059 11.852C16.6133 12.2133 16.1544 12.5059 15.6289 12.7298C15.3603 12.8442 15.0742 12.9407 14.7708 13.0192C15.0847 13.0794 15.3754 13.1588 15.6429 13.2575C16.1042 13.4278 16.4965 13.6556 16.8196 13.9408C17.3301 14.3913 17.5853 15.0876 17.5853 16.0296C17.5853 17.3948 17.0266 18.4938 15.909 19.3266C14.8053 20.1458 12.9979 20.5553 10.4868 20.5553H5.51996L7.52741 6.3023ZM15.882 12.9803C16.2153 13.1421 16.8867 13.3388 17.1516 13.5725C17.8047 14.1489 18.084 15.004 18.084 16.0296C18.084 17.5523 17.4496 18.7963 16.209 19.7208L16.2082 19.7214C14.9719 20.6389 13.0284 21.0488 10.4868 21.0488H4.94696L7.09341 5.80884H11.8941C13.8689 5.80884 15.4427 6.06293 16.5655 6.61807C17.1542 6.90567 17.6195 7.30306 17.9344 7.8183C18.2489 8.33274 18.3945 8.93359 18.3945 9.59934C18.3945 10.6635 18.0596 11.556 17.3455 12.2133C17.0195 12.5134 16.2837 12.7687 15.882 12.9803Z"
                fill="#1458DD"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.57899 7.25479C6.10773 7.25479 6.56445 7.25479 6.99381 7.25479C7.12811 7.25479 7.25796 6.3023 7.38359 6.3023C8.12272 6.3023 8.71592 6.3023 9.21235 6.3023C9.30434 6.3023 9.39301 7.25479 9.47867 7.25479C10.5513 7.25479 11.1519 7.25479 11.8946 7.25479C13.84 7.25479 11.5228 7.50736 12.5437 8.0125C13.5785 8.51763 12.147 9.36408 12.147 10.5518C12.147 11.5075 11.8503 12.2584 11.2571 12.8045C10.8645 13.1658 10.4055 13.4584 9.88013 13.6822C9.61145 13.7967 9.3254 13.8932 9.02197 13.9717C9.3359 14.0319 9.6266 14.1113 9.89407 14.21C10.3554 14.3803 10.163 14.6081 10.4861 14.8933C10.9966 15.3438 11.2519 16.0401 11.2519 16.9821C11.2519 18.3473 16.15 18.9701 15.0325 19.8029C13.9287 20.622 11.0495 21.5078 8.53842 21.5078H3.57154L5.57899 7.25479ZM10.1332 13.9328C10.4665 14.0946 10.5532 14.2913 10.8181 14.525C11.4712 15.1014 11.7506 15.9565 11.7506 16.9821C11.7506 18.5048 16.5731 19.2726 15.3325 20.1971L15.3317 20.1976C14.0954 21.1152 11.0799 22.0013 8.53842 22.0013H2.99854L5.14498 6.76134H7.09125L7.43231 5.80884H9.28378L9.57612 6.76134H11.8946C13.8693 6.76134 11.6428 7.01543 12.7656 7.57056C13.3543 7.85817 11.8707 8.25555 12.1856 8.7708C12.5001 9.28524 12.6457 9.88608 12.6457 10.5518C12.6457 11.616 12.3108 12.5085 11.5967 13.1658C11.2707 13.4659 10.5348 13.7212 10.1332 13.9328Z"
                fill="#1458DD"
              />
              <path
                d="M17.4385 11.5616C18.4134 11.746 19.1918 12.0919 19.7736 12.5991C20.3554 13.1063 20.6463 13.8902 20.6463 14.9507C20.6463 16.4877 20.0095 17.725 18.7358 18.6626C17.4778 19.5848 15.4179 20.0459 12.5561 20.0459H6.89526L9.18317 3.99951H14.16C16.3771 3.99951 18.0675 4.28386 19.2311 4.85255C20.4104 5.42125 21.0001 6.37419 21.0001 7.71139C21.0001 8.7873 20.662 9.63265 19.9859 10.2475C19.3097 10.8623 18.4606 11.3003 17.4385 11.5616ZM13.8533 10.2013C14.7496 10.2013 15.3393 10.0246 15.6223 9.67108C15.9211 9.30219 16.0705 8.84878 16.0705 8.31082C16.0705 7.94194 15.9211 7.67296 15.6223 7.50389C15.3393 7.33482 14.8597 7.25029 14.1835 7.25029H13.4524L13.0278 10.2013H13.8533ZM13.0278 16.7029C14.0813 16.7029 14.7968 16.5185 15.1742 16.1496C15.5673 15.7653 15.7639 15.2274 15.7639 14.5357C15.7639 13.6442 15.0956 13.1985 13.759 13.1985H12.6032L12.1079 16.7029H13.0278Z"
                fill="#1458DD"
              />
            </svg>
          <h1 className="text-xl font-bold">Nice to see you again</h1>
        </div>
        <div className="flex flex-col w-80 gap-4">
          {" "}
          <label htmlFor="" className="flex flex-col justify-self-start gap-2">
            Login
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Email" className="border border-2 border-gray-300 rounded py-2 px-2 " />
            {error && <p className="text-red-700 text-xs">{error}</p>}
          </label >
          <label htmlFor="" className="flex flex-col justify-self-start gap-2">
            Password
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" className="border border-2 border-gray-300 rounded py-2 px-2 " />
             {error && <p className="text-red-700 text-xs">{error}</p>}

          </label>
        </div>
        <div className="flex flex-col  gap-3">
          <div className="flex justify-between">
            <p>Remember Me</p>
            <p className="text-blue-600">Forgot Password?</p>
          </div>
          <div className="w-[250px] md:w-[300px] lg:w-[310px]">
            
            <button onClick={handleLogin}  className={`cursor-pointer  w-full ${loader ? 'bg-[#94B0ED]' : 'bg-[#1858E5]' }  py-2 rounded text-white `}>{loader ? 'signing in....' : 'sign in'}</button>
         
          </div>
        </div>
             
        <div className="w-[250px] md:w-[300px] lg:w-[310px] flex flex-col gap-2">
          <button className="cursor-pointer  flex items-center justify-center gap-2 w-full bg-gray-800 py-2 rounded text-white">
            {" "}
            <svg
              width="18"
              height="18"
              viewBox="0 0 533.5 544.3"
              xmlns="http://www.w3.org/2000/svg"
              className="block"
              aria-hidden="true"
            >
              <path
                fill="#4285F4"
                d="M533.5 278.4c0-17.4-1.4-34.1-4-50.4H272v95.3h147.1c-6.3 34-25.4 62.8-54.4 82v68h87.8c51.4-47.3 80.9-117 80.9-195z"
              />
              <path
                fill="#34A853"
                d="M272 544.3c73.7 0 135.6-24.5 180.8-66.5l-87.8-68c-24.4 16.4-55.6 26-93 26-71.4 0-132-48.1-153.6-112.3h-90.9v70.4C83.2 482.9 166.5 544.3 272 544.3z"
              />
              <path
                fill="#FBBC05"
                d="M118.4 320.9c-11-32.6-11-67.6 0-100.2V150.3H27.5C-1.7 207 0 335.3 27.5 393.7l90.9-72.8z"
              />
              <path
                fill="#EA4335"
                d="M272 107.7c39.8 0 75.5 13.7 103.6 40.6l77.8-77.8C402.1 24.5 340.2 0 272 0 166.5 0 83.2 61.4 27.5 150.3l90.9 70.4C140 156 200.6 107.7 272 107.7z"
              />
            </svg>{" "}
            <p>sign in with Google</p>
          </button>

          <div className="flex justify-center"><p className="text-sm md:text-md lg:text-[14px] cursor-pointer ">Don't have an account? <span className="text-blue-600 font-bold underline">SignUp now</span></p></div>
        </div>
      </div>
    </>
  );
};
