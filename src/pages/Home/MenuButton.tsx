import React from "react";

type propType = {
  type: string;
  choosed: string;
  setChoosed: React.Dispatch<React.SetStateAction<string>>;
};

const MenuButton: React.FC<propType> = ({ type, choosed, setChoosed }) => {
  const changeTypeOfFoods = () => {
    setChoosed(type);
  };

  return (
    <button
      onClick={changeTypeOfFoods}
      className={
        "cursor-pointer text-base bg-gray-200 font-semibold rounded-md mr-3 capitalize py-2 px-3 hover:bg-green-500 hover:text-white " +
        (choosed === type ? "bg-green-500" : "")
      }
    >
      {type}
    </button>
  );
};

export default MenuButton;
