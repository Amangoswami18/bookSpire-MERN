import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Close Button */}
          <Link
            to="/"
            className="absolute right-4 top-4 text-white-500 hover:text-white-800 text-xl font-bold"
          >
            ✕
          </Link>

          <h3 className="text-2xl font-extrabold text-center text-purple-700">Create Account</h3>
          <p className="text-center text-gray-600 text-sm">
            Join us and get started!
          </p>

          {/* Full Name */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && <span className="text-sm text-red-500 mt-1">This field is required</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-sm text-red-500 mt-1">This field is required</span>}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-sm text-red-500 mt-1">This field is required</span>}
          </div>

          {/* Button & Login Link */}
          <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
            <button className="w-full sm:w-auto bg-purple-600 text-white font-semibold rounded-lg px-6 py-2 hover:bg-purple-700 transition-all duration-200 shadow-md">
              Signup
            </button>
            <p className="text-gray-600 text-sm text-center sm:text-left">
              Already have an account?{" "}
              <button
                className="text-purple-600 hover:underline"
                onClick={() =>
                  document.getElementById("my_modal_3")?.showModal()
                }
              >
                Login
              </button>
              <Login />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
