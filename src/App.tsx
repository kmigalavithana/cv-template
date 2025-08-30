import { navTab } from "./utilities/fields-data/nav-tab-button.ts";
import React, { useState } from "react";
import TemplateSelector from "./components/TemplateSelector.tsx";
import PersonalDetailsFrom from "./components/PersonalDetailsFrom.tsx";
import EducationDetailsFrom from "./components/EducationDetailsFrom.tsx";
import ProfessionalDetailsFrom from "./components/ProfessionalDetailsFrom.tsx";
import SkillsDetailsFrom from "./components/SkillsDetailsFrom.tsx";

const App = () => {

  const [activeTab, setActiveTab] = useState<string>('template');

  const renderContent = () => {
    console.log("work");
      const componets: Record<string, React.JSX.Element> = {
        template: <TemplateSelector />,
        personal:<PersonalDetailsFrom/>,
        education:<EducationDetailsFrom/>,
        professional:<ProfessionalDetailsFrom/>,
        skills:<SkillsDetailsFrom/>,
      }
    console.log("work",componets.activeTab);

    return componets[activeTab];
  }

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
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
