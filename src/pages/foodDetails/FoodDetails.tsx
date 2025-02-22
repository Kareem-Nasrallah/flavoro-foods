import { useParams } from "react-router-dom";
import foodData from "../../data/foodData";
import { cartActions } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

interface foodItem {
  quantity: number;
  id: number;
  img: string;
  name: string;
  price: number;
  desc: string;
  category: string;
  rating: number;
}

const FoodDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>();
  const FoodItem: foodItem = foodData.find((food) => food.id === Number(id));
  return (
    <div className="flex flex-col gap-3 justify-evenly h-screen bg-white p-5 md:flex-row">
      <div className="w-[75vw] h-full flex justify-center items-center max-w-[800px] m-auto md:w-[50vw]">
        <img
          src={FoodItem?.img}
          className="border w-full border-gray-400 shadow-xl rounded-lg transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="flex flex-col h-full justify-evenly gap-4 p-8 pe-10 w-[75vw] m-auto md:w-[50vw]">
        <div className="font-semibold flex justify-between">
          <h3 className=" text-lg">{FoodItem?.name}</h3>
        </div>
        <p className="text-base">{FoodItem?.desc}</p>
        <div className="flex font-semibold justify-evenly items-center">
          <p className="flex items-center gap-1.5">
            <i className="fa-solid fa-star text-xs text-yellow-400"></i>
            <span>{FoodItem?.rating}</span>
          </p>
          <p className="text-base text-green-500">{FoodItem?.price}$</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(cartActions.add_item(FoodItem));
          }}
          className="cursor-pointer rounded-lg text-sm text-white bg-green-500 p-1 w-full hover:bg-green-600"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodDetails;
