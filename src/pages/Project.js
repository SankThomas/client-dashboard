import React from "react";
import projects from "../images/projects.png";

export default function Project() {
  return (
    <>
      <section className="max-width">
        <h1 className="text-3xl text-slate-800 drop-shadow-lg mb-8 font-bold">
          Project Overview
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <article className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-lg font-bold text-slate-800 mb-4">
              Hi, Thomas
            </h2>
            <p>
              To the right, you'll find a live preview of your site. Please take
              some time to look it over, and submit your thoughts via the chat.{" "}
              <br />
              <br />
              You can check in for updates at any time.
            </p>
          </article>

          <article className="bg-white p-4 rounded shadow-lg lg:col-span-2">
            <img src={projects} alt="" />
          </article>
        </div>
      </section>
    </>
  );
}
