import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@components/layout";

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
      <div className="  divide-y-[1px]">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Link key={i} href={`/chats/${i}`}>
            <a className=" flex cursor-pointer py-5 items-center space-x-3 px-4 ">
              <div className=" w-12 h-12 bg-slate-300 rounded-full" />
              <div>
                <p className=" text-gray-700">Steve Jobs</p>
                <p className=" text-sm text-gray-500">
                  See you tomorrow in the corner at 2pm!
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
