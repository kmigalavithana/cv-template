import React, { useState } from "react";
import { templates } from "../utilities/fields-data/template.ts";

const TemplateSelector:React.FC = () => {

  const [template, setTemplate] = useState();
  return (
    <div>
      <h2 className="text-xl font-bold">Choose template</h2>
      <div className='grid-cols-1 gap-6'>
        {templates.map((template) => (
          <h1
            key={template.id}
            className="text-xl font-semibold text-gray-500">
            {template.name}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;