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
    <div className="flex justify-between gap-10 bg-white p-5 rounded-lg">
      <img
        src={FoodItem?.img}
        className="w-1/2 rounded-lg transition-all duration-500 ease-in-out"
      />
      <div className=" p-8 pe-10">
        <div className="font-semibold flex justify-between">
          <h3 className=" text-lg">{FoodItem?.name}</h3>
        </div>
        <p className="text-base py-4">{FoodItem?.desc}</p>
        <p className="flex items-center gap-1.5">
          <i className="fa-solid fa-star text-xs text-yellow-400"></i>
          <span>{FoodItem?.rating}</span>
        </p>
        <div className="flex font-semibold justify-between items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(cartActions.add_item(FoodItem));
            }}
            className="cursor-pointer rounded-lg text-sm text-white bg-green-500 p-1 hover:bg-green-600"
          >
            Add to cart
          </button>
          <p className="text-base text-green-500">{FoodItem?.price}$</p>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
