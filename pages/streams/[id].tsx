import type { NextPage } from "next";
import Layout from "../../components/layout";
import Message from "../../components/message";

const StreamDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className=" py-10 px-4 space-y-4 ">
        <div className=" w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
        <div className="mt-5">
          <h1 className=" text-3xl font-bold text-gray-900">Galaxy S50</h1>
          <span className=" text-2xl block mt-3 text-gray-900">$140</span>
          <p className=" my-3 text-gray-700">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
        </div>
        <div>
          <h2 className=" text-2xl font-bold text-gray-900">Live Chat</h2>
          <div className=" py-10 pb-16 h-[50vh] overflow-y-scroll px-4 space-y-4">
            <Message message="Hi how much are you selling them for?" />
            <Message message="I want $140" reversed />
            <Message message="미쳤어" />
          </div>
          <div className=" fixed bottom-2 inset-x-0 py-2">
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StreamDetail;
