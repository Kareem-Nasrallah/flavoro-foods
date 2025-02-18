import { useState } from "react";

const NotRegistered = () => {
    const [test,setTest] = useState<boolean>(false)
  return (
    <div className={"z-50 bg-white rounded-lg py-2.5 px-4 shadow-md shadow-gray-400 flex gap-2 items-center fixed right-[50%] translate-x-[50%] transition-all duration-500 " + (test? 'top-4 scale-0':'-top-full scale-90')}>
      <i className="text-xl text-rose-500 fa-solid fa-circle-xmark"></i>
      <p className="text-gray-800">Please login to add to cart</p>
    </div>
  );
};

export default NotRegistered;
