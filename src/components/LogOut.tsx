import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../Store/Auth";
import { useLogOutModal } from "../Store/Modal";
export const Logout = () => {
    const {setIsOpen}= useLogOutModal()
    const  {logout}= useAuthStore()
 const nav = useNavigate()
    const handleLogout = ()=> {
        logout()
        nav('/login')
        setIsOpen(false)
    }

  return (
    <>
      <div className="bg-white border-1 text-gray-300 h-10 flex items-center px-2 py-2 rounded z-100 relative bottom-7 right-16">
        <button className="text-sm flex gap-2 items-center cursor-pointer text-black " onClick={handleLogout}>
          Logout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-red-500 h-4 w-4"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </button>
      </div>
    </>
  );
};
