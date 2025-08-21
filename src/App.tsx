import { navTab } from "./utilities/fields-data/nav-tab-button.ts";
import { useState } from "react";

const App = () => {

  const [activeTab, setActiveTab] = useState<string>('skills');
  console.log(activeTab);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8">
        <div>
          <nav className="flex space-x-1">
            {navTab.map((tab) => (
              <button
                key={tab.id}
                className={ `flex flex-1 items-center justify-cente border rounded-b-md ${activeTab === tab.id ? 'bg-blue-500' : 'bg-white'} `}
                onClick={() => setActiveTab(tab.id)}

              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default App;
