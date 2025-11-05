import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Logged in Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-6 sm:p-8 w-full max-w-md rounded-2xl shadow-xl bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-50">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="space-y-6">
            {/* Close Button */}
            <Link
              to="/signup"
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="text-2xl font-extrabold text-center text-purple-700">Welcome Back!</h3>
            <p className="text-center text-gray-600 text-sm">Login to continue to your account</p>

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

            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
              <button className="w-full sm:w-auto bg-purple-600 text-white font-semibold rounded-lg px-6 py-2 hover:bg-purple-700 transition-all duration-200 shadow-md">
                Login
              </button>
              <p className="text-gray-600 text-sm text-center sm:text-left">
                Not registered?{" "}
                <Link to="/signup" className="text-purple-600 hover:underline">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
