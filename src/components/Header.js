import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { BsHeart } from "react-icons/bs";
import { AiOutlineFile } from "react-icons/ai";
import { CiFlag1 } from "react-icons/ci";
import { HiOutlinePhoto } from "react-icons/hi2";
import { GoGraph } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  let activeStyle = {
    color: "#2563eb",
    fontWeight: "bold",
  };

  return (
    <>
      <header className="flex flex-col bg-white">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-5 z-50 lg:hidden"
        >
          {isOpen ? (
            <GrClose className="text-slate-800 text-2xl" />
          ) : (
            <FaBars className="text-slate-800 text-2xl" />
          )}
        </button>
        <nav className={`${isOpen && "open"} py-6 px-5 shadow navbar`}>
          <ul className="lg:flex lg:items-center lg:justify-center lg:gap-8">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-start lg:justify-center gap-2 text-slate-600"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <IoPersonOutline /> Overview
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/project"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-start lg:justify-center gap-2 text-slate-600"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <BsHeart /> Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/documents"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-start lg:justify-center gap-2 text-slate-600"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <AiOutlineFile /> Documents
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/progress"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-start lg:justify-center gap-2 text-slate-600"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <CiFlag1 /> Progress
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/assets"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-start lg:justify-center gap-2 text-slate-600"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <HiOutlinePhoto /> Assets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-start lg:justify-center gap-2 text-slate-600"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <GoGraph /> Apps
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
