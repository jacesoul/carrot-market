import type { NextPage } from "next";
import Button from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";

const Create: NextPage = () => {
  return (
    <Layout canGoBack title="Go Live">
      <form className=" space-y-4 py-5 px-4">
        <Input required label="Name" name="name" type="text"></Input>
        <Input
          required
          label="Price"
          name="price"
          type="text"
          kind="price"
          placeholder="0.00"
        ></Input>
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
        <Button text="Go live" large></Button>
      </form>
    </Layout>
  );
};

export default Create;
