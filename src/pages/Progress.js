import React, { useState } from "react";

const data = [
  {
    title: "Define",
    desc: "Due Date: February 10th",
  },
  {
    title: "Research",
    desc: "Due Date: March 10th",
  },
  {
    title: "Ideation",
    desc: "Due Date: April 10th",
  },
  {
    title: "Prototyping",
    desc: "Due Date: May 10th",
  },
  {
    title: "Testing",
    desc: "Due Date: June 10th",
  },
];

export default function Progress() {
  const [items] = useState(data);
  const [value, setValue] = useState(0);

  const { title, desc } = items[value];

  return (
    <>
      <section className="max-width">
        <h1 className="text-3xl text-slate-800 drop-shadow-lg mb-8 font-bold">
          Progress
        </h1>

        <ul className="flex flex-wrap gap-8 items-center justify-start lg:justify-between mb-10 bg-white p-4 rounded shadow-lg">
          {items.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => setValue(index)}
                className={`text-slate-800 py-2 px-4 rounded shadow-lg ${
                  index === value && "bg-blue-400 text-white"
                }`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <article className="bg-white p-4 rounded shadow-lg">
            <h2 className="font-bold text-xl text-slate-800">{title}</h2>
            <p>{desc}</p>
          </article>

          <div className="md:col-span-2 grid grid-cols-1 gap-8">
            <article className="bg-white p-4 rounded shadow-lg">
              <h2 className="font-bold text-xl text-slate-800">
                What is a Rich Text element?
              </h2>
              <p>
                The rich text element allows you to create and format headings,
                paragraphs, blockquotes, images, and video all in one place
                instead of having to add and format them individually. Just
                double-click and easily create content.
              </p>

              <h3 className="mt-4 font-bold text-slate-800">
                Static and dynamic content editing
              </h3>
              <p>
                A rich text element can be used with static or dynamic content.
                For static content, just drop it into any page and begin
                editing. For dynamic content, add a rich text field to any
                collection and then connect a rich text element to that field in
                the settings panel. Voila!
              </p>

              <h3 className="mt-4 font-bold text-slate-800">
                How to customize formatting for each rich text
              </h3>
              <p>
                Headings, paragraphs, blockquotes, figures, images, and figure
                captions can all be styled after a class is added to the rich
                text element using the "When inside of" nested selector system.
              </p>
            </article>

            <article className="bg-white p-4 rounded shadow-lg">
              <h2 className="font-bold text-xl text-slate-800">
                In Progress: March 15th
              </h2>
              <p>
                The rich text element allows you to create and format headings,
                paragraphs, blockquotes, images, and video all in one place
                instead of having to add and format them individually. Just
                double-click and easily create content.
              </p>

              <h3 className="mt-4 font-bold text-slate-800">
                Static and dynamic content editing
              </h3>
              <p>
                A rich text element can be used with static or dynamic content.
                For static content, just drop it into any page and begin
                editing. For dynamic content, add a rich text field to any
                collection and then connect a rich text element to that field in
                the settings panel. Voila!
              </p>

              <h3 className="mt-4 font-bold text-slate-800">
                How to customize formatting for each rich text
              </h3>
              <p>
                Headings, paragraphs, blockquotes, figures, images, and figure
                captions can all be styled after a class is added to the rich
                text element using the "When inside of" nested selector system.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
