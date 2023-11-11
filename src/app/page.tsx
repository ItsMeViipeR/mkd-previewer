export default function Home() {
  return (
    <div className="flex flex-row h-full m-5 gap-3">
      <div className="left-0 border border-black dark:border-gray-500 h-full w-1/2">
        <div className="m-6 border border-black dark:border-gray-500">
          <h1 className="text-2xl font-bold p-3 text-center">
            Write Markdown here
          </h1>
        </div>
      </div>
      <div className="right-0 border border-black dark:border-gray-500 h-full w-1/2">
        <div className="m-6 border border-black dark:border-gray-500">
          <h1 className="text-2xl font-bold p-3 text-center">
            Markdown result here
          </h1>
        </div>
      </div>
    </div>
  );
}
