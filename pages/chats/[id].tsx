import type { NextPage } from "next";
import Layout from "@components/layout";
import Message from "@components/message";

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack title="Steve">
      <div className=" py-10 px-4 space-y-4 pb-16">
        <Message message="Hi how much are you selling them for?" />
        <Message message="I want $400" reversed />
        <Message message="미쳤어" />
        <form className=" fixed bottom-2 inset-x-0 py-2">
          <div className=" flex items-center relative max-w-md w-full mx-auto">
            <input
              type="text"
              className=" shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500 pr-12"
            />
            <div className=" absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button className="flex items-center bg-orange-500 rounded-full px-3 hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 text-sm text-white">
                &rarr;
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ChatDetail;
