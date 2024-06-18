import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Inputs = () => {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search by City ..."
          className="text-gray-500 text-lg font-light p-2 w-full focus:outline-none rounded-xl capitalize placeholder:lowercase hover:shadow-2xl transition ease-out duration-300 hover:scale-105 active:scale-105 focus:scale-105"
        />

        <BiSearch
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
        />

        <BiCurrentLocation
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button className="text-2xl font-medium transition ease-out hover:scale-125">°C</button>
        <p className="text-2xl font-medium mx-1">|</p>
        <button className="text-2xl font-medium transition ease-out hover:scale-125">°F</button>
      </div>
    </div>
  );
};

export default Inputs;
