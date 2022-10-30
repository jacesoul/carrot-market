import type { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import TextArea from "@components/textarea";

const Write: NextPage = () => {
  return (
    <Layout title="Write Post" canGoBack>
      <form className=" px-4 py-10 space-y-4">
        <TextArea placeholder="Ask a question!" required></TextArea>
        <Button text="Submit" large={true}></Button>
      </form>
    </Layout>
  );
};

export default Write;
