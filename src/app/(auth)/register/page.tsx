"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    forumName: "",
    dateOfBirth: "",
    gender: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [registrationFee] = useState(2000);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.forumName) newErrors.forumName = "Forum name is required";
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("User created:", userCredential.user);
      router.push("/login");
    } catch (error: any) {
      setErrors({ form: error.message || "Registration failed" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4 mt-15">
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

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-500"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <p className="text-sm text-red-500">{errors.fullName}</p>
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

          {/* Phone Number */}
          <div>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-500"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <p className="text-sm text-red-500">{errors.phoneNumber}</p>
            )}
          </div>

          {/* Forum Name */}
          <div>
            <select
              name="forumName"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-500"
              value={formData.forumName}
              onChange={handleChange}
            >
              <option value="">Select Forum</option>
              <option value="Triumphant Family">Triumphant Family</option>
              <option value="Golden Phoenix Family">
                Golden Phoenix Family
              </option>
              <option value="Luminous Family">Luminous Family</option>
              <option value="Excellers In Christ Family">
                Excellers In Christ Family
              </option>
              <option value="Exquisite Family">Exquisite Family</option>
            </select>
            {errors.forumName && (
              <p className="text-sm text-red-500">{errors.forumName}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <input
              type="date"
              name="dateOfBirth"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-500"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
            {errors.dateOfBirth && (
              <p className="text-sm text-red-500">{errors.dateOfBirth}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <select
              name="gender"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-500"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-sm text-red-500">{errors.gender}</p>
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
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 text-white rounded-md font-semibold transition ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {isLoading ? "Processing..." : "Complete Registration & Pay"}
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
