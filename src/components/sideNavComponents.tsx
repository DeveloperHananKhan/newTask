import { Link } from "react-router-dom";

export const SideNavCom = () => {
  return (
    <>
      <div className="mt-4 ">
        <ul className="flex flex-col gap-5 text-gray-500 text-[12px]   md:text-lg  ">
          <li className="flex items-center  gap-2 ">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.12271 7.62631H3.76379C2.1195 7.62631 1.21582 6.72263 1.21582 5.07834V3.71942C1.21582 2.07513 2.1195 1.17145 3.76379 1.17145H5.12271C6.767 1.17145 7.67068 2.07513 7.67068 3.71942V5.07834C7.67068 6.72263 6.767 7.62631 5.12271 7.62631ZM3.76379 2.19064C2.69025 2.19064 2.23501 2.64587 2.23501 3.71942V5.07834C2.23501 6.15189 2.69025 6.60712 3.76379 6.60712H5.12271C6.19626 6.60712 6.6515 6.15189 6.6515 5.07834V3.71942C6.6515 2.64587 6.19626 2.19064 5.12271 2.19064H3.76379Z"
                fill="#787486"
              />
              <path
                d="M13.2762 7.62631H11.9173C10.273 7.62631 9.36932 6.72263 9.36932 5.07834V3.71942C9.36932 2.07513 10.273 1.17145 11.9173 1.17145H13.2762C14.9205 1.17145 15.8242 2.07513 15.8242 3.71942V5.07834C15.8242 6.72263 14.9205 7.62631 13.2762 7.62631ZM11.9173 2.19064C10.8438 2.19064 10.3885 2.64587 10.3885 3.71942V5.07834C10.3885 6.15189 10.8438 6.60712 11.9173 6.60712H13.2762C14.3498 6.60712 14.805 6.15189 14.805 5.07834V3.71942C14.805 2.64587 14.3498 2.19064 13.2762 2.19064H11.9173Z"
                fill="#787486"
              />
              <path
                d="M13.2762 15.7798H11.9173C10.273 15.7798 9.36932 14.8761 9.36932 13.2318V11.8729C9.36932 10.2286 10.273 9.32495 11.9173 9.32495H13.2762C14.9205 9.32495 15.8242 10.2286 15.8242 11.8729V13.2318C15.8242 14.8761 14.9205 15.7798 13.2762 15.7798ZM11.9173 10.3441C10.8438 10.3441 10.3885 10.7994 10.3885 11.8729V13.2318C10.3885 14.3054 10.8438 14.7606 11.9173 14.7606H13.2762C14.3498 14.7606 14.805 14.3054 14.805 13.2318V11.8729C14.805 10.7994 14.3498 10.3441 13.2762 10.3441H11.9173Z"
                fill="#787486"
              />
              <path
                d="M5.12271 15.7798H3.76379C2.1195 15.7798 1.21582 14.8761 1.21582 13.2318V11.8729C1.21582 10.2286 2.1195 9.32495 3.76379 9.32495H5.12271C6.767 9.32495 7.67068 10.2286 7.67068 11.8729V13.2318C7.67068 14.8761 6.767 15.7798 5.12271 15.7798ZM3.76379 10.3441C2.69025 10.3441 2.23501 10.7994 2.23501 11.8729V13.2318C2.23501 14.3054 2.69025 14.7606 3.76379 14.7606H5.12271C6.19626 14.7606 6.6515 14.3054 6.6515 13.2318V11.8729C6.6515 10.7994 6.19626 10.3441 5.12271 10.3441H3.76379Z"
                fill="#787486"
              />
            </svg>
            <Link to={"/dashboard"}>
              <p>Dashboard</p>
            </Link>
          </li>
          <Link to={'/tasklist'} >
          <li className="flex items-center  gap-2 ">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.27753 6.65991H13.215"
                stroke="#787486"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.78497 6.65991L5.34747 7.22241L7.03497 5.53491"
                stroke="#787486"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.27753 11.9099H13.215"
                stroke="#787486"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.78497 11.9099L5.34747 12.4724L7.03497 10.7849"
                stroke="#787486"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
                stroke="#787486"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>Tasks</p>
          </li>
          </Link>
          <li className="flex items-center  gap-2 ">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.27753 6.65991H13.215"
                stroke="#787486"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.78497 6.65991L5.34747 7.22241L7.03497 5.53491"
                stroke="#787486"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.27753 11.9099H13.215"
                stroke="#787486"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.78497 11.9099L5.34747 12.4724L7.03497 10.7849"
                stroke="#787486"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
                stroke="#787486"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <Link to={"/tasks"}>
              <p>Schedule</p>
            </Link>
          </li>
          <li className="flex items-center  gap-2 ">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.375 14.25H6C3 14.25 1.5 13.5 1.5 9.75V6C1.5 3 3 1.5 6 1.5H12C15 1.5 16.5 3 16.5 6V9.75C16.5 12.75 15 14.25 12 14.25H11.625C11.3925 14.25 11.1675 14.3625 11.025 14.55L9.9 16.05C9.405 16.71 8.595 16.71 8.1 16.05L6.975 14.55C6.855 14.385 6.5775 14.25 6.375 14.25Z"
                stroke="#787486"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9973 8.25H12.0041"
                stroke="#787486"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.99661 8.25H9.00335"
                stroke="#787486"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.99588 8.25H6.00262"
                stroke="#787486"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Messages</p>
          </li>
          <li className="flex items-center  gap-2 ">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.86998 8.1525C6.79498 8.145 6.70498 8.145 6.62248 8.1525C4.83748 8.0925 3.41998 6.63 3.41998 4.83C3.41998 2.9925 4.90498 1.5 6.74998 1.5C8.58748 1.5 10.08 2.9925 10.08 4.83C10.0725 6.63 8.65498 8.0925 6.86998 8.1525Z"
                stroke="#787486"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.3075 3C13.7625 3 14.9325 4.1775 14.9325 5.625C14.9325 7.0425 13.8075 8.1975 12.405 8.25C12.345 8.2425 12.2775 8.2425 12.21 8.25"
                stroke="#787486"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.11998 10.92C1.30498 12.135 1.30498 14.115 3.11998 15.3225C5.18248 16.7025 8.56498 16.7025 10.6275 15.3225C12.4425 14.1075 12.4425 12.1275 10.6275 10.92C8.57248 9.5475 5.18998 9.5475 3.11998 10.92Z"
                stroke="#787486"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.755 15C14.295 14.8875 14.805 14.67 15.225 14.3475C16.395 13.47 16.395 12.0225 15.225 11.145C14.8125 10.83 14.31 10.62 13.7775 10.5"
                stroke="#787486"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Users</p>
          </li>
        </ul>
      </div>
    </>
  );
};
