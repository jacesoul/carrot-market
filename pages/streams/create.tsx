import type { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <div className=" px-4 py-10 space-y-5">
      <div>
        <label
          htmlFor="name"
          className=" mb-1 text-sm font-medium text-gray-700 block"
        >
          Name
        </label>
        <div className=" rounded-md relative flex items-center shadow-sm">
          <input
            type="text"
            className=" appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="price"
          className=" mb-1 text-sm font-medium text-gray-700 block"
        >
          Price
        </label>
        <div className=" rounded-md shadow-sm relative flex items-center">
          <div className=" absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
            <span className=" text-gray-500 text-sm">$</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className=" appearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 "
          />
          <div className=" absolute right-0 pr-3 flex items-center pointer-events-none">
            <span className=" text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor="description"
          className=" mb-1 text-sm font-medium text-gray-700 block"
        >
          Description
        </label>

        <textarea
          className=" mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
          id="description"
          rows={4}
        ></textarea>
      </div>
      <button className=" bg-orange-500 hover:bg-orange-600 text-white px-2 py-4 border border-transparent rounded-md shadow-sm text-sm font-medium mt-5 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none w-full">
        Go live
      </button>
    </div>
  );
};

export default Create;
