import React, { useEffect, useState } from "react";
// import logo from "./assets/images/logo-link-checker.svg";
import CheckBox from "./components/CheckBox";
import "./App.css";
import data from "./data.json";
import ExtentionTab from "./components/ExtentionTab";

const App = () => {
  const [active, setActive] = useState([]);
  const [inActive, setInActive] = useState([]);
  const [extensions, setExtensions] = useState(data);
  const [ligthMode, setLigthMode] = useState(true);

  useEffect(() => {
    const activeExtensions = extensions.filter((ext) => ext.isActive);
    const inActiveExtensions = extensions.filter((ext) => !ext.isActive);
    setActive(activeExtensions);
    setInActive(inActiveExtensions);
  }, [extensions]);

  const toggleLigthMode = () => {
    setLigthMode(!ligthMode);
  };

  const toggleExtension = (name) => {
    setExtensions(
      extensions.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };
  return (
    <div className={ligthMode ? "dark" : ""}>
      <div className="[background-image:linear-gradient(180deg,_#EBF2FC_0%,_#EEF8F9_100%)] dark:[background-image:linear-gradient(180deg,#040918_0%,#091540_100%)] bg- min-h-[100vh]  flex justify-center ">
        <div className="w-[90%] lg:max-w-[1440px] h-[100%] flex flex-col gap-[2rem] mt-5.5 mb-11 ">
          <div className="w-full dark:bg-[var(--Neutral-800)] bg-[var(--Neutral-0)]  border-[var(--Neutral-700)] flex flex-row justify-between items-center px-2.5 py-1.5 rounded-lg  ">
            <img
              src={"/assets/images/logo.svg"}
              alt="Logo"
              className="h-[30px] w-auto "
            />
            <button
              className="p-2 rounded-lg cursor-pointer dark:bg-[var(--Neutral-700)] bg-[var(--Neutral-300)] "
              onClick={() => toggleLigthMode()}
            >
              {ligthMode ? (
                <img src={"/assets/images/icon-sun.svg"} alt="LightMode" />
              ) : (
                <img src={"/assets/images/icon-moon.svg"} alt="LightMode" />
              )}
            </button>
          </div>
          <Extention
            extensions={extensions}
            active={active}
            inActive={inActive}
            toggleExtension={toggleExtension}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

function Extention({ extensions, active, inActive, toggleExtension }) {
  const contextList = [extensions, active, inActive];

  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex flex-col gap-[1.5rem] ">
      <div className="flex lg:flex-row flex-col gap-3  justify-between items-center ">
        <h1 className="text-4xl dark:text-[var(--Neutral-0)] text-[var(--Neutral-900)]  font-bold">
          Extension List
        </h1>
        <ExtentionTab activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {contextList.map((contextList, i) => {
        if (activeTab === i) {
          return (
            <ExtentionList
              key={i}
              extensions={contextList}
              toggleExtension={toggleExtension}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

function ExtentionList({ extensions, toggleExtension }) {
  return (
    <ul className="flex flex-col gap-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 ">
      {extensions.map((data, i) => (
        <ExtentionCard key={i} data={data} toggleExtension={toggleExtension} />
      ))}
    </ul>
  );
}

function ExtentionCard({ data, toggleExtension }) {
  return (
    <li className="min-w-[300px] shadow-lg   h-[160px] dark:bg-[var(--Neutral-800)] bg-[var(--Neutral-0)] dark:text-[var(--Neutral-300)] text-[var(--Neutral-800)] rounded-2xl p-3.5 flex flex-col justify-between">
      <div className=" flex flex-row gap-3 items-start">
        <img src={data.logo} alt={data.name} className="w-[50px] h-[50px] " />
        <div>
          <p className="font-bold ">{data.name} </p>
          <p className="text-sm/4  ">{data.description}</p>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <button className="border-1 border-[var(--Neutral-600)] rounded-2xl px-2.5 text-xs font-bold cursor-pointer">
          Remove
        </button>
        <CheckBox data={data} toggleExtension={toggleExtension} />
      </div>
    </li>
  );
}
