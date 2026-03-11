import React, {  useState } from "react";
import type { IpersonalDetails } from "../../../utilities/types/cvTemplate.ts";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store/store.ts";
import { setPersonalDetails } from "../../../store/cvSlice.ts";

const PersonalDetailsFrom: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();

  // Define the initial state for personal details
  // @ts-ignore
  const personalDetailsInSlice = useSelector<RootState>((state) => state.cv?.personalDetails)as IpersonalDetails

  const personalDetails: IpersonalDetails = {
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  };
// Create a local state to manage form data
  const [fromData, setFromData] = useState(personalDetailsInSlice || personalDetails);


  console.log({ personalDetailsInSlice });
  // Handle input change for form fields

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.name, event.target.value);
    const {name, value} = event.target;
    setFromData(prevState => ({
      ...prevState,
      [name]: value
    }))
  };

  const HandleSave = () => {
    dispatch(setPersonalDetails(fromData));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Personal Details</h2>
        <button
          onClick={HandleSave}
          className="bg-blue-600 px-4 py-2 rounded-md text-gray-400"
        >
          Save Change
        </button>
      </div>
      <form onSubmit={HandleSave}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fromData.fullName}
              onChange={handleInput}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="emial"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="emial"
              onChange={handleInput}
              value={fromData.email}
              name="emial"
              className="mt-1 block w-full border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              PhoneNumber
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={fromData.phoneNumber}
              onChange={handleInput}
              className="mt-1 block w-full border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              value={fromData.address}
              name="address"
              onChange={handleInput}
              className="mt-1 block w-full border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsFrom;
