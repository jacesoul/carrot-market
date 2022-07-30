import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <form className=" bg-blue-500 p-5 flex flex-col space-y-2 focus-within:bg-blue-100">
      <input
        type="text"
        required
        placeholder="Username"
        className=" required:border-2 border-yellow-500 invalid:bg-red-500 placeholder:text-blue-500"
      />
      <input
        type="password"
        required
        placeholder="Password"
        className=" placeholder-shown:bg-teal-300"
      />
      <input
        type="text"
        placeholder="Nickname"
        required
        className=" valid:bg-teal-500"
      />
      <input type="submit" value="Login" className=" bg-white" />
    </form>
  );
};

export default Home;
