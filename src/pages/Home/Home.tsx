import { useState } from "react";
import MenuButton from "../../components/MenuButton";
import FoodMenu from "../../components/FoodMenu";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [choosed, setChoosed] = useState<string>("All");
  const [search, setSearch] = useState<string>("");

  const date: Date = new Date();

  const todaysDate = () =>
    date.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  return (
    <>
      <nav className="relative flex flex-col justify-between gap-5 mb-12 lg:flex-row">
        <div>
          <p className="text-xl font-semibold text-neutral-600">
            {todaysDate()}
          </p>
          <h1 className="text-2xl font-semibold">Flavoro Foods</h1>
        </div>
        <div className="lg:relative">
          <input
            className="w-full text-sm border border-neutral-400 rounded-lg bg-white p-3 outline-0 lg:w-[25vw]"
            type="text"
            placeholder="Search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <i
            className={
              "absolute text-2xl cursor-pointer text-gray-500 top-2 right-0 fa-solid lg:right-2 lg:top-3 " +
              (isOpen ? "fa-xmark" : "fa-bars")
            }
            onClick={() => setIsOpen(!isOpen)}
          ></i>
        </div>
      </nav>
      <div
        className={
          "fixed shadow-md top-12 border border-white py-3 px-3 font-semibold rounded-lg bg-white/10 backdrop-blur-sm transition-all duration-400 ease-in-out " +
          (isOpen ? "right-5" : "-right-24")
        }
      >
        <p className="cursor-pointer text-gray-600 hover:text-black">Login</p>
        <p className="cursor-pointer text-gray-600 hover:text-black">Signup</p>
      </div>
      <h2 className="text-xl mt-13 mb-4 font-semibold">Find the best food</h2>
      <div className="my-5">
        <MenuButton type="All" choosed={choosed} setChoosed={setChoosed} />
        <MenuButton type="Lunch" choosed={choosed} setChoosed={setChoosed} />
        <MenuButton
          type="Breakfast"
          choosed={choosed}
          setChoosed={setChoosed}
        />
        <MenuButton type="Dinner" choosed={choosed} setChoosed={setChoosed} />
        <MenuButton type="Snacks" choosed={choosed} setChoosed={setChoosed} />
      </div>
      <div className="my-10">
        <FoodMenu choosed={choosed} search={search} />
      </div>
    </>
  );
};

export default Home;
