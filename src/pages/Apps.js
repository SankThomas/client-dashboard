import React from "react";
import { IoAnalytics } from "react-icons/io5";
import { SiNamecheap, SiHotjar } from "react-icons/si";
import { BsChatLeftText } from "react-icons/bs";

export default function Apps() {
  return (
    <>
      <section className="max-width">
        <h1 className="text-3xl text-slate-800 drop-shadow-lg mb-8 font-bold">
          Apps
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <article className="bg-white p-4 rounded shadow-lg flex items-start flex-wrap gap-6">
            <IoAnalytics className="text-orange-400 text-4xl" />
            <div>
              <h2 className="font-bold text-xl text-slate-800">
                Google Analytics
              </h2>
              <p>All-in-one site analytics</p>
            </div>
          </article>

          <article className="bg-white p-4 rounded shadow-lg flex items-start flex-wrap gap-6">
            <SiHotjar className="text-rose-400 text-4xl" />
            <div>
              <h2 className="font-bold text-xl text-slate-800">Hotjar</h2>
              <p>The visual way to understand your users</p>
            </div>
          </article>

          <article className="bg-white p-4 rounded shadow-lg flex items-start flex-wrap gap-6">
            <SiNamecheap className="text-rose-400 text-4xl" />
            <div>
              <h2 className="font-bold text-xl text-slate-800">Namecheap</h2>
              <p>Domain management and hosting</p>
            </div>
          </article>
        </div>

        <h2 className="text-3xl text-slate-800 drop-shadow-lg my-8 font-bold">
          General
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <article className="bg-white p-4 rounded shadow-lg flex items-start flex-wrap gap-6">
            <BsChatLeftText className="text-rose-400 text-4xl" />
            <div>
              <h2 className="font-bold text-xl text-slate-800">Chat</h2>
              <p>Customer support using modern messaging</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
