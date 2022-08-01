import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className=" bg-slate-400 dark py-20 px-20 xl:place-content-center grid lg:grid-cols-2 xl:grid-cols-3 gap-10  min-h-screen">
      <div className=" bg-white dark:bg-black p-6 rounded-3xl shadow-xl flex flex-col justify-between">
        <span className=" font-semibold dark:text-white text-3xl">
          Select Item
        </span>
        <ul>
          <div className=" flex justify-between my-2 ">
            <span className=" text-gray-500 dark:text-gray-100">
              Grey Chair
            </span>
            <span className=" font-semibold dark:text-gray-100">$19</span>
          </div>
          <div className=" flex justify-between my-2">
            <span className=" text-gray-500 dark:text-gray-100">
              Tooly Table
            </span>
            <span className=" font-semibold dark:text-gray-100">$80</span>
          </div>
        </ul>
        <div className=" flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className=" font-semibold">$99</span>
        </div>
        <button className=" mt-5 bg-blue-500 dark:bg-black dark:border-white dark:border text-white p-3 text-center rounded-xl w-3/4 mx-auto dark:hover:bg-white hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500">
          Checkout
        </button>
      </div>
      <div className=" bg-white rounded-3xl shadow-xl overflow-hidden group">
        <div className=" portrait:bg-yellow-400 landscape:bg-pink-400 p-6 pb-14 xl:pb-52">
          <span className=" text-white text-xl">Profile</span>
        </div>
        <div className=" rounded-3xl p-6 bg-white relative -top-6">
          <div className=" flex justify-between items-end relative -top-16">
            <div className=" flex flex-col items-center">
              <span className=" text-sm text-gray-500">Orders</span>
              <span className=" font-medium">340</span>
            </div>
            <div className=" h-24 w-24 bg-teal-400 rounded-full group-hover:bg-yellow-500 transition-colors"></div>
            <div className=" flex flex-col items-center">
              <span className=" text-sm text-gray-500">Spent</span>
              <span className=" font-medium">$340</span>
            </div>
          </div>
          <div className=" relative flex flex-col items-center -mt-10 -mb-5">
            <span className=" text-lg font-medium">Tony Molloy</span>
            <span className=" text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className=" bg-white p-10 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-1">
        <div className=" flex justify-between items-center mb-5">
          <span>⬅️</span>
          <div className=" space-x-3">
            <span>⭐️ 4.9</span>
            <span className=" shadow-xl p-2 rounded-md">❤️</span>
          </div>
        </div>
        <div className=" bg-zinc-400 h-64 mb-5"></div>
        <div className=" flex flex-col ">
          <span className=" font-medium text-xl">Swoon Lounge</span>
          <span className=" text-xs text-gray-500">Chair</span>
          <div className=" mt-3 mb-5 flex justify-between items-center">
            <div className=" space-x-2">
              <button className=" w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
              <button className=" w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition"></button>
              <button className=" w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition"></button>
            </div>
            <div className=" flex items-center space-x-3">
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className=" flex justify-between items-center ">
            <span className=" font-medium text-xl">$450</span>
            <button className=" bg-blue-500 text-center text-white text-xs rounded-lg py-2 px-6">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
