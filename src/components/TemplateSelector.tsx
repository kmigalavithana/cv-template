import { templates } from "../utilities/fields-data/template.ts";
import { useDispatch} from "react-redux";
import { setSelectedTemplate } from "../store/cvSlice.ts";
import React from "react";

const TemplateSelector:React.FC = () => {

  const dispatch = useDispatch();
  // const selectedtemplate = useSelector((state) =>state.cv.selectedTemplate);

  return (
    <div>
      <h2 className="text-xl font-bold">Choose template</h2>
      <div className='grid grid-cols-1 gap-6'>
        {templates.map((template) => (
          <button
            key={template.id}
            className="text-xl font-semibold text-gray-400"
           onClick={() => dispatch(setSelectedTemplate(template.id))}
            // mokakd select kre kiyala blanna tempalt ekai id ekai gatte
          >
            {template.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;