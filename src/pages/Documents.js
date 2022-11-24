import React from "react";
import { AiOutlineFileExcel, AiOutlineFileWord } from "react-icons/ai";
import { BsFileEarmarkPdf } from "react-icons/bs";

export default function Documents() {
  return (
    <>
      <section className="max-width">
        <h1 className="text-3xl text-slate-800 drop-shadow-lg mb-8 font-bold">
          Documents
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="bg-white p-4 rounded shadow-lg">
            <BsFileEarmarkPdf className="text-rose-400 text-6xl mb-8" />
            <h2 className="text-lg font-bold text-slate-800 mb-4">Proposal</h2>
            <p className="mb-4">
              To the right, you'll find a live preview of your site. Please take
              some time to look it over, and submit your thoughts via the chat.{" "}
              <br />
              <br />
              You can check in for updates at any time.
            </p>
            <small className="text-slate-600">27 Jan 2022</small>
          </article>

          <article className="bg-white p-4 rounded shadow-lg">
            <AiOutlineFileWord className="text-sky-400 text-6xl mb-8" />
            <h2 className="text-lg font-bold text-slate-800 mb-4">Terms</h2>
            <p className="mb-4">
              To the right, you'll find a live preview of your site. Please take
              some time to look it over, and submit your thoughts via the chat.{" "}
              <br />
              <br />
              You can check in for updates at any time.
            </p>
            <small className="text-slate-600">27 Jan 2022</small>
          </article>

          <article className="bg-white p-4 rounded shadow-lg">
            <AiOutlineFileExcel className="text-emerald-400 text-6xl mb-8" />
            <h2 className="text-lg font-bold text-slate-800 mb-4">Budget</h2>
            <p className="mb-4">
              To the right, you'll find a live preview of your site. Please take
              some time to look it over, and submit your thoughts via the chat.{" "}
              <br />
              <br />
              You can check in for updates at any time.
            </p>
            <small className="text-slate-600">27 Jan 2022</small>
          </article>

          <article className="bg-white p-4 rounded shadow-lg">
            <AiOutlineFileWord className="text-sky-400 text-6xl mb-8" />
            <h2 className="text-lg font-bold text-slate-800 mb-4">Contract</h2>
            <p className="mb-4">
              To the right, you'll find a live preview of your site. Please take
              some time to look it over, and submit your thoughts via the chat.{" "}
              <br />
              <br />
              You can check in for updates at any time.
            </p>
            <small className="text-slate-600">27 Jan 2022</small>
          </article>

          <article className="bg-white p-4 rounded shadow-lg">
            <AiOutlineFileExcel className="text-emerald-400 text-6xl mb-8" />
            <h2 className="text-lg font-bold text-slate-800 mb-4">Members</h2>
            <p className="mb-4">
              To the right, you'll find a live preview of your site. Please take
              some time to look it over, and submit your thoughts via the chat.{" "}
              <br />
              <br />
              You can check in for updates at any time.
            </p>
            <small className="text-slate-600">27 Jan 2022</small>
          </article>
        </div>
      </section>
    </>
  );
}
