import { useSelector } from "react-redux";

interface stateType {
  cartReducer: {
    cart: {
      id: number;
      img: string;
      name: string;
      price: number;
      desc: string;
      category: string;
      rating: number;
      quantity: number;
    }[];
  };
}

const CartItems = () => {
  const allCartItems = useSelector(
    (state: stateType) => state.cartReducer.cart
  );

  return (
    <div className="mt-4 flex gap-4 flex-wrap justify-start items-start overflow-auto">
      {allCartItems.map((food) => {
        return (
          <div
            key={food.id}
            className="w-full flex justify-evenly gap-2 rounded-lg shadow-md lg:w-full"
          >
            <img
              src={food.img}
              className="w-[60px] h-12 transition-all duration-500 ease-in-out"
            />
            <div className="font-semibold">
              <h3 className="text-sm">{food.name}</h3>
              <p className="text-sm text-green-500">{food.price}$</p>
            </div>
            <div className="flex flex-col items-center justify-between ms-2">
              <div>
                <i className="text-xs cursor-pointer border p-0.5 fa-solid fa-plus border-black hover:text-green-700"></i>
                <span className="text-sm text-green-500 mx-2">
                  {food.quantity}
                </span>
                <i className="text-xs cursor-pointer border p-0.5 fa-solid fa-minus border-black hover:text-red-700"></i>
              </div>
              <i className="fa-solid fa-trash text-sm cursor-pointer p-0.5 hover:text-red-500"></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
