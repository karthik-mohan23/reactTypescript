import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="max-w-5xl mx-auto w-[90%]">
      <div className="min-h-screen flex justify-center items-center flex-col gap-5">
        <h1 className="text-center text-3xl pb-5">Count : {count}</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="border border-gray-500 rounded-md px-2 py-1">
            Increment
          </button>
          <button
            onClick={() => setCount(0)}
            className="border border-gray-500 rounded-md px-2 py-1">
            Reset
          </button>
          <button
            onClick={() => setCount((c) => c - 1)}
            className="border border-gray-500 rounded-md px-2 py-1">
            Decrement
          </button>
        </div>
      </div>
    </section>
  );
}
export default Counter;
