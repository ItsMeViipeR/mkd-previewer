"use client";

import { useState } from "react";
import { marked } from "marked";

export default function Home() {
  const [mkd, setMkd] = useState("");

  return (
    <div className="flex flex-col lg:flex-row h-screen m-5 gap-3">
      <div className="border border-black dark:border-gray-500 flex flex-col w-full">
        <div className="m-6 border border-black dark:border-gray-500">
          <h1 className="text-2xl font-bold p-3 text-center">
            Write Markdown here
          </h1>
        </div>
        <div className="ml-6 mr-6 mb-6 border p-3 flex-grow">
          <textarea
            className="w-full h-full p-3"
            onChange={(e) => setMkd(marked(e.target.value))}
          ></textarea>
        </div>
      </div>
      <div className="border border-black dark:border-gray-500 flex flex-col h-full w-full">
        <div className="m-6 border border-black dark:border-gray-500">
          <h1 className="text-2xl font-bold p-3 text-center">
            Markdown result here
          </h1>
        </div>
        <div className="ml-6 mr-6 mb-6 border p-3 flex-grow">
          <div
            className="content bg-black dark:bg-gray-800 w-full h-full p-3"
            dangerouslySetInnerHTML={{
              __html: mkd,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
