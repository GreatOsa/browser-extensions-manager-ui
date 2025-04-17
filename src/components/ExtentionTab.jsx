import React from "react";

const ExtentionTab = ({ activeTab, setActiveTab }) => {
  const tabs = ["All", "Active", "Inactive"];
  return (
    <div>
      <div className="flex gap-3">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-3 py-1.5 ${
              activeTab === i
                ? "dark:bg-[var(--Red-500)] bg-[var(--Red-700)] text-[var(--Neutral-0)]"
                : "dark:bg-[var(--Neutral-700)] bg-[var(--Neutral-0)] dark:text-[var(--Neutral-100)] text-[var(--Neutral-900)] "
            } text-sm uppercase   cursor-pointer  items-center justify-center rounded-full p-1 transition-transform duration-150  active:scale-95`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExtentionTab;
