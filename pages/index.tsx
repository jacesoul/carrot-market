import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className=" flex flex-col space-y-2 p-5">
      <details>
        <summary className="cursor-pointer select-none">
          What is my favorite food.
        </summary>
        <span className=" selection:bg-indigo-500 selection:text-white">
          김치
        </span>
      </details>
    </div>
  );
};

export default Home;
