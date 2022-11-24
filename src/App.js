import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Apps from "./pages/Apps";
import Assets from "./pages/Assets";
import Documents from "./pages/Documents";
import Overview from "./pages/Overview";
import Progress from "./pages/Progress";
import Project from "./pages/Project";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Overview />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/documents" element={<Documents />}></Route>
          <Route path="/progress" element={<Progress />}></Route>
          <Route path="/assets" element={<Assets />}></Route>
          <Route path="/apps" element={<Apps />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
