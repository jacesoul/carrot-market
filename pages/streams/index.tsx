import type { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "@components/floating-button";
import Layout from "@components/layout";

const Stream: NextPage = () => {
  return (
    <Layout title="라이브" hasTabBar>
      <div className="  space-y-4 divide-y-2">
        {[1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Link href={`/streams/${i}`} key={i}>
            <a className=" pt-5 px-4 block">
              <div className=" w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
              <h1 className=" text-gray-900 text-2xl mt-2 font-bold">
                Galaxy S50
              </h1>
            </a>
          </Link>
        ))}
        <FloatingButton href="/streams/create">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Stream;
