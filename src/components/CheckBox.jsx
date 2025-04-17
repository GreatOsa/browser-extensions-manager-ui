import React from "react";

const CheckBox = ({ data, toggleExtension }) => {
  return (
    <div className=" ">
      <label className="group relative inline-flex cursor-pointer flex-col items-center">
        <input
          className="peer sr-only"
          type="checkbox"
          checked={data.isActive}
          onChange={() => toggleExtension(data.name)}
        />
        <div className="relative h-6 w-10 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] transition-all duration-500 after:absolute after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-gradient-to-br after:from-gray-100 after:to-gray-300 after:shadow-[2px_2px_8px_rgba(0,0,0,0.3)] after:transition-all after:duration-500 peer-checked:bg-gradient-to-r dark:peer-checked:from-[var(--Red-500)] peer-checked:from-[var(--Red-700)] dark:peer-checked:to-[var(--Red-500)] peer-checked:to-[var(--Red-700)] peer-checked:after:translate-x-4 peer-checked:after:from-white peer-checked:after:to-gray-100 hover:after:scale-95 active:after:scale-90">
          <span className="absolute inset-1 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-transparent"></span>
          <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 peer-checked:animate-glow peer-checked:opacity-100 [box-shadow:0_0_15px_rgba(167,139,250,0.5)]"></span>
        </div>
      </label>
    </div>
  );
};

export default CheckBox;
