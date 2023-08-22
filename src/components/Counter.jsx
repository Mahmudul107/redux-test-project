import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/features/counter/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="grid justify-center items-center">
      <div className="w-80 flex justify-center items-center gap-4">
        <button
          className="bg-green-600 shadow-lg border-b-4 p-1 text-white text-lg rounded-xl"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <div>
          <h1 className="text-2xl text-center shadow-orange-500 shadow-2xl">{count}</h1>
        </div>
        <button
          className="bg-red-400 shadow-lg border-b-4 p-1 text-white text-lg rounded-xl"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <button
          className="bg-yellow-500 shadow-lg border-b-4 p-1 text-white text-lg rounded-xl"
          onClick={() => dispatch(incrementByValue(5))}
        >
          Increment By Value
        </button>
    </div>
  );
};

export default Counter;
