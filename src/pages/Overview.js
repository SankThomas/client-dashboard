import React from "react";
import {
  AiOutlineCreditCard,
  AiOutlineArrowUp,
  AiOutlineCalendar,
} from "react-icons/ai";
import Chart from "../components/Chart";

export default function Overview() {
  return (
    <>
      <section className="max-width">
        <h1 className="text-3xl text-slate-800 drop-shadow-lg mb-8 font-bold">
          Welcome Back, Thomas
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="bg-white p-8 rounded shadow-lg">
            <button className="bg-emerald-100 mb-4 p-2 rounded-full shadow">
              <AiOutlineCreditCard className="text-emerald-400" />
            </button>
            <h2 className="text-3xl text-slate-800 drop-shadow-lg mb-4 font-bold">
              $25,000
            </h2>
            <p>Starting budget</p>
          </article>

          <article className="bg-white p-8 rounded shadow-lg">
            <button className="bg-emerald-100 mb-4 p-2 rounded-full shadow">
              <AiOutlineArrowUp className="text-emerald-400" />
            </button>
            <h2 className="text-3xl text-slate-800 drop-shadow-lg mb-4 font-bold">
              $5,030
            </h2>
            <p>Total spend</p>
          </article>

          <article className="bg-white p-8 rounded shadow-lg">
            <button className="bg-purple-100 mb-4 p-2 rounded-full shadow">
              <AiOutlineCalendar className="text-purple-400" />
            </button>
            <h2 className="text-3xl text-slate-800 drop-shadow-lg mb-4 font-bold">
              21 June 2022
            </h2>
            <p>Launch date</p>
          </article>
        </div>

        <div className="mt-10 lg:mt-20 mb-10 bg-white p-8 shadow-lg rounded">
          <Chart />
        </div>
      </section>
    </>
  );
}
