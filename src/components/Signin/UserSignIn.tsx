import React, { useEffect, useState } from "react";
import type { ILoginInfo } from "../../utilities/types/UserSign.ts";
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import type { AppDispatch, RootState } from "../../store/store.ts";
import { UserSigninAPI } from "../../utilities/api/UserSigninAPI.ts";
import { useNavigate } from "react-router";

const UserSignIn: React.FC = () => {
  const [LoginInfo, setLoginInfo] = useState<ILoginInfo>({
    email: "",
    password: "",
  });

  const dispatch = useDispatch<AppDispatch>();
  const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector; // Replace with actual useSelector hook from react-redux
  const isAuthenticated = useTypeSelector(
    (state) => state.auth.isAuthenticated,
  ); // Replace with actual authentication state from Redux store
  // Handle change event for input fields

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      // Redirect to the dashboard or home page after successful login
       // Replace with your desired route
      navigate("/cv-template");
    }
  }, [isAuthenticated]);

  const handleChnage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Update the state with the new value for the corresponding field

    setLoginInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //Handle form submission

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Dispatch the UserSigninAPI action with the login information
    await dispatch(UserSigninAPI({ LoginInfo }));
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900 max-h-screen justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Sign in to Flowbite
            </h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChnage}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChnage}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    name="remember"
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>
                <div className="ms-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="font-medium text-gray-500 dark:text-gray-400"
                  >
                    Remember this device
                  </label>
                </div>
                <a
                  href="#"
                  className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login to your account
              </button>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                Not registered yet?{" "}
                <a className="text-blue-600 hover:underline dark:text-blue-500">
                  Create account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserSignIn;
