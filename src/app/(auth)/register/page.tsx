"use client";

import { useState } from "react";
import { signup } from "./actions";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [registrationFee] = useState(2000);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullname) newErrors.fullname = "Full name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4 mt-5 md:mt-15">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-1 text-gray-800">
          Student Registration
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Join the chaplaincy community
        </p>

        {errors.form && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
            {errors.form}
          </div>
        )}

        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-500"
              value={formData.fullname}
              onChange={handleChange}
            />
            {errors.fullname && (
              <p className="text-sm text-red-500">{errors.fullname}</p>
            )}
          </div>
          {/* Phone Number */}
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-500"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>
          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-500"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-500"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-500"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">{errors.confirmPassword}</p>
            )}
          </div>
          {/* Payment Summary */}
          <div className="p-4 border rounded bg-gray-50 flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-800">Registration Fee</h4>
              <p className="text-sm text-gray-500">
                Pay once and be registered for life
              </p>
            </div>
            <span className="font-bold text-xl text-gray-700">
              ₦{registrationFee.toLocaleString()}
            </span>
          </div>

          {/* Submit Button */}
          <button
            formAction={signup}
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 text-white rounded-md font-semibold transition ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {isLoading ? "Processing..." : "Continue Registration & Pay"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-gray-800 font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
