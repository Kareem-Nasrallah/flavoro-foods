import { useState } from "react";

const CartBar = () => {
  const [showCart, setShowCart] = useState<Boolean>(false);
  console.log(showCart);
  return (
    <>
      <div
        className={
          "px-1 flex flex-col justify-between items-center text-gray-800 py-5 z-20 bg-white fixed h-screen w-full top-0 transition-all duration-500 ease-in-out lg:w-68 lg:px-5 " +
          (showCart ? "right-0" : "-right-full lg:-right-72")
        }
      >
        <div className="w-full flex flex-col items-center pt-3">
          <div className="flex w-full justify-between items-center">
            <p className="text-xl font-semibold">My Order</p>
            <div
              onClick={() => setShowCart(false)}
              className="cursor-pointer mr-4 flex justify-center items-center w-5 h-5 rounded-md border-2 border-gray-700 group hover:border-red-300 lg:mr-0"
            >
              <i className=" text-xs fa-solid fa-xmark group-hover:text-red-300"></i>
            </div>
          </div>
        </div>
          <p className="text-base font-med text-gray-600">Your cart is empty</p>
        <div className="font-semibold w-full">
          <p>
            Items :<span className="text-green-500"> 0</span>
          </p>
          <p>
            Total Amount :<span className="text-green-500"> 0$</span>
          </p>
          <div className="pt-2 mt-2 w-full border-t border-gray-200">
            <button className="bg-green-500 text-white w-full mx-auto h-10 rounded-lg">
              Checkout
            </button>
          </div>
        </div>
      </div>
      {!showCart && (
        <div
          onClick={() => setShowCart(true)}
          className="z-10 cursor-pointer shadow-lg w-12 h-12 rounded-full flex justify-center items-center fixed bottom-6 right-4 bg-white"
        >
          <i className="text-xl fa-solid fa-cart-shopping"></i>
        </div>
      )}
    </>
  );
};

export default CartBar;
