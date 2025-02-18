import { FC } from "react";
import foodData from "../data/foodData";
interface propsType {
    choosed:string;
    search:string
}

const FoodMenu:FC<propsType> = ({choosed, search}) => {
    
const typeChoosed = choosed==="All"? foodData : foodData.filter(food=>food.category===choosed)
const searchFood = search==''? typeChoosed : typeChoosed.filter(food=>food.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="flex flex-wrap justify-evenly gap-10">
      {searchFood.map((food) => {
        return (
          <div key={food.id} className="flex flex-col justify-between gap-2 bg-white p-5 w-[250px] rounded-lg">
            <img src={food.img} className="h-[130px] rounded-lg transition-all duration-500 ease-in-out hover:scale-110" />
            <div className="font-semibold flex justify-between">
              <h3 className=" text-sm">{food.name}</h3>
              <p className="text-sm text-green-500">{food.price}$</p>
            </div>
            <p className="text-sm">{food.desc.split("", 50)}...</p>
            <div className="flex font-semibold justify-between items-center">
              <p className="flex items-center gap-1.5">
                <i className="fa-solid fa-star text-xs text-yellow-400"></i>
                <span>{food.rating}</span>
              </p>
              <button className="cursor-pointer rounded-lg text-sm text-white bg-green-500 p-1 hover:bg-green-600">
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodMenu;
