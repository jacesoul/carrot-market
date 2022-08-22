import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <form className=" px-4 py-10">
      <textarea
        className=" mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
        id="description"
        rows={4}
        placeholder="Ask a question!"
      ></textarea>
      <button className=" bg-orange-500 hover:bg-orange-600 text-white px-2 py-4 border border-transparent rounded-md shadow-sm text-sm font-medium mt-2 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none w-full">
        Submit
      </button>
    </form>
  );
};

export default Write;
