import { templates } from "../utilities/fields-data/template.ts";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTemplate } from "../store/cvSlice.ts";
import React from "react";

const TemplateSelector:React.FC = () => {

  const dispatch = useDispatch();
  const selectedTemplate = useSelector((state) => state.selectedTemplate);
  console.log(selectedTemplate);
  return (
    <div>
      <h2 className="text-xl font-bold">Choose template</h2>
      <div className='grid grid-cols-1 gap-6'>
        {templates.map((template) => (
          <div
            className={selectedTemplate === template.id ?`bg-blue-500`: `bg-white`}
            key={template.id}
            // className="text-xl font-semibold text-gray-400"
           onClick={() => dispatch(setSelectedTemplate(template.id))}
            // mokakd select kre kiyala blanna tempalt ekai id ekai gatte
          >
            {template.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;