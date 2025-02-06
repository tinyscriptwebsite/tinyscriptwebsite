"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import { useLoader } from "../context/Load";

function Page() {
  const { showLoader, hideLoader } = useLoader();
  const cookies = new Cookies();
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [isLogin, setIsLogin] = useState(true);
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isLogin) {
      setCredentials({ ...credentials, [name]: value });
    } else {
      setSignupData({ ...signupData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      showLoader();
      if (isLogin) {
        const { data } = await axios.post("/api/user/login", credentials);
        cookies.set("token", data.token);
        cookies.set("access", "admin");
        router.push("/");
      } else {
        const { data } = await axios.post("/api/user/signup", signupData);
        toast.success("Signup successful!");
        cookies.set("token", data.token);
        cookies.set("access", "admin");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error("Error during signup:", error);
    } finally {
      hideLoader();
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(`/api/user`);
      if (data.usersLength > 0) setIsLogin(true);
    };
    fetchUser();
  }, [isLogin]);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isLogin ? "Admin Login" : "Admin Signup"}
        </h2>
        <form onSubmit={handleSubmit}>
          {isLogin ? (
            <>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </>
          ) : (
            <>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={signupData.username}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={signupData.password}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>
        <p className="text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={toggleForm}
            className="text-blue-500 hover:underline focus:outline-none transition-all"
          >
            {isLogin ? "Sign Up here" : "Log In here"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Page;
