import { navTab } from "../../utilities/fields-data/nav-tab-button.ts";
import React, { useState } from "react";
import TemplateSelector from "./TemplateSection/TemplateSelector.tsx";
import PersonalDetailsFrom from "./TemplateSection/PersonalDetailsFrom.tsx";
import EducationDetailsFrom from "./TemplateSection/EducationDetailsFrom.tsx";
import ProfessionalDetailsFrom from "./TemplateSection/ProfessionalDetailsFrom.tsx";
import SkillsDetailsFrom from "./TemplateSection/SkillsDetailsFrom.tsx";
import CvPreview from "../CvPriview/CvPreview.tsx";

const CVTemplateSection = () => {
  const [activeTab, setActiveTab] = useState<string>("template");

  const renderContent = () => {
    const componets: Record<string, React.JSX.Element> = {
      template: <TemplateSelector />,
      personal: <PersonalDetailsFrom />,
      education: <EducationDetailsFrom />,
      professional: <ProfessionalDetailsFrom />,
      skills: <SkillsDetailsFrom />,
    };

    return componets[activeTab];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <nav className="flex space-x-1">
            {navTab.map((tab) => (
              <button
                key={tab.id}
                className={`flex flex-1 items-center justify-cente border rounded-b-md ${activeTab === tab.id ? "bg-blue-500" : "bg-white "} `}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
          {/*rendring the content based on the active tab*/}
          <div className="min-h-[500px] ">{renderContent()}</div>
        </div>
        {/*templt preview part*/}
        <div className='bg-gray-50 rounded-md p-4'>
        <CvPreview />
        </div>
      </div>
    </div>
  );
};

export default CVTemplateSection;
