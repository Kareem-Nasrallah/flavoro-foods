import { useState } from "react";

const CartBar = () => {
  const [showCart, setShowCart] = useState<Boolean>(false);

  const cartIconClicked = () => {
    setShowCart(true);
  };
  const exitIconClicked = () => {
    setShowCart(false);
  };

  return (
    <>
      <div
        className={
          "px-1  flex flex-col justify-between text-gray-800 pt-8 z-20 bg-white fixed h-screen w-full right-0 top-0 lg:w-20"
        }
      >
        <div className="w-full flex flex-col items-center">
          <div className="flex w-full justify-between items-center">
            <p className="text-xl font-semibold">My Order</p>
            <div
              onClick={exitIconClicked}
              className="cursor-pointer mr-4 flex justify-center items-center w-5 h-5 rounded-md border-2 border-gray-700 group hover:border-red-300"
            >
              <i className=" text-xs fa-solid fa-xmark group-hover:text-red-300"></i>
            </div>
          </div>
          <p className="mt-3 text-xl font-semibold">Your cart is empty</p>
        </div>
        <div className="font-semibold">
          <p>
            Items :<span className="text-green-500"> 0</span>
          </p>
          <p>
            Total Amount :<span className="text-green-500"> 0$</span>
          </p>
          <button>Checkout</button>
        </div>
      </div>
      {!showCart && (
        <div
          onClick={cartIconClicked}
          className="z-10 cursor-pointer shadow-lg w-12 h-12 rounded-full flex justify-center items-center absolute bottom-10 right-4 bg-white"
        >
          <i className="text-xl fa-solid fa-cart-shopping"></i>
        </div>
      )}
    </>
  );
};

export default CartBar;
