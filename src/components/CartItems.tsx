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
    }[];
  };
}

const CartItems = () => {
  const allCartItems = useSelector(
    (state: stateType) => state.cartReducer.cart
  );

  console.log(allCartItems);

  return (
    <div className="w-full mt-4 flex gap-2 flex-wrap justify-start items-start overflow-auto">
      {allCartItems.map((food) => {
        return (
          <div
            key={food.id}
            className="flex gap-2 rounded-lg shadow-md lg:w-full"
          >
            <img
              src={food.img}
              className="w-[60px] h-12 transition-all duration-500 ease-in-out hover:scale-110"
            />
            <div className="font-semibold">
              <h3 className="text-sm">{food.name}</h3>
              <p className="text-sm text-green-500">{food.price}$</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
