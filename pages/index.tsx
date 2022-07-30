import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className=" flex flex-col space-y-2 p-5">
        <details className="select-none open:text-white open:bg-indigo-400">
          <summary className="cursor-pointer">
            What is my favorite food.
          </summary>
          <span>김치</span>
        </details>
      </div>
      <div className=" flex flex-col space-y-2 p-5">
        <ul className=" list-disc marker:text-teal-500">
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
        </ul>
      </div>
      <div className=" flex flex-col space-y-2 p-5">
        <input
          type="file"
          className=" file:cursor-pointer file:hover:text-purple-400 file:hover:bg-white file:hover:border-purple-400 file:hover:border file:transition-colors file:border-0 file:rounded-xl file:bg-purple-400 file:px-5 file:text-white "
        />
      </div>
      <div>
        <p className=" first-letter:text-7xl first-letter:hover:text-purple-400 first-line:bg-teal-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore id
          corrupti dolores quos optio nesciunt voluptates? Commodi, dolorum
          fugiat minus, iste fugit tenetur optio quisquam mollitia quis harum
          accusamus quos.
        </p>
      </div>
    </>
  );
};

export default Home;
