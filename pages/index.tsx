import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className=" bg-slate-400 py-20 px-20 grid gap-10 max-w-md mx-auto">
      <div className=" bg-white p-6 rounded-3xl shadow-xl">
        <span className=" font-semibold text-3xl">Select Item</span>
        <div className=" flex justify-between my-2">
          <span className=" text-gray-500">Grey Chair</span>
          <span className=" font-semibold">$19</span>
        </div>
        <div className=" flex justify-between">
          <span className=" text-gray-500">Tooly Table</span>
          <span className=" font-semibold">$80</span>
        </div>
        <div className=" flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className=" font-semibold">$99</span>
        </div>
        <div className=" mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-3/4 mx-auto">
          Checkout
        </div>
      </div>
      <div className=" bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className=" bg-blue-500 p-6 pb-14">
          <span className=" text-white text-xl">Profile</span>
        </div>
        <div className=" rounded-3xl p-6 bg-white relative -top-6">
          <div className=" flex justify-between items-end relative -top-16">
            <div className=" flex flex-col items-center">
              <span className=" text-sm text-gray-500">Orders</span>
              <span className=" font-medium">340</span>
            </div>
            <div className=" h-24 w-24 bg-red-400 rounded-full"></div>
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
      <div className=" bg-white p-10 rounded-3xl shadow-xl"></div>
      <div className=" bg-white p-10 rounded-3xl shadow-xl"></div>
    </div>
  );
};

export default Home;
