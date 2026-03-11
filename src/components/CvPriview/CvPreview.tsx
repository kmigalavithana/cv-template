import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store.ts";

const CvPreview: React.FC = () => {

  const cvData = useSelector<RootState>((state) => state.cv )
  console.log({ cvData });
  return (
    <div className="h-full overflow-y-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Cv Preview</h2>

        <div className="flex items-center space-x-3">
          {/*TODO:NEED TO GET TEMPLATE FROM STORE*/}
          <div className="text-sm">
            <span> Template: Modern Template</span>
          </div>
          {/*TODO: Check if have any data and need to render below part*/}
          <div className="flex space-x-2">
            <button className="bg-gray-500 text-white px-3 py-2 rounded-md">
              Print your CV
            </button>
            <button className="bg-blue-600 text-white px-3 py-2 rounded-md">
              Downlord Your CV
            </button>
          </div>
        </div>
      </div>
       <div>
         cv tem
       </div>
    </div>
  );
};

export default CvPreview;
