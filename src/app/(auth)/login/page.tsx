"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[var(--primary-bg)] relative overflow-hidden p-4">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-bg)] via-white to-[var(--secondary-bg)] -z-20"></div>
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[var(--primary-red)]/5 rounded-full blur-[100px] -z-10"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary-red)]/5 rounded-full blur-[100px] -z-10"></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-2xl shadow-[var(--primary-red)]/10 rounded-3xl p-8 text-center border border-white/50"
                >
                    <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
                        <svg
                            className="w-10 h-10 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-black text-[var(--text-primary)] mb-4">
                        Welcome Back!
                    </h2>
                    <p className="text-[var(--text-secondary)] mb-8">
                        You have successfully logged in. Redirecting to your dashboard...
                    </p>
                    <Link href="/">
                        <button className="w-full py-4 bg-[var(--primary-red)] text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[var(--primary-red)]/20 transition-all transform hover:-translate-y-1">
                            Go to Dashboard
                        </button>
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--primary-bg)] relative overflow-hidden p-4">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-bg)] via-white to-[var(--secondary-bg)] -z-20"></div>
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[var(--primary-red)]/5 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary-red)]/5 rounded-full blur-[100px] -z-10"></div>

            {/* Noise Texture */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none -z-10"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-white shadow-2xl shadow-[var(--primary-red)]/5 rounded-[2.5rem] overflow-hidden border border-[var(--border-color)]"
            >
                {/* Left Side - Visual */}
                <div className="relative hidden lg:flex flex-col justify-between p-12 bg-[var(--primary-red)] text-white overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 z-0"></div> {/* Optional pattern */}

                    {/* Abstract Shapes */}
                    <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl z-0"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-black/10 rounded-full blur-3xl z-0"></div>

                    <div className="relative z-20">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                <span className="text-[var(--primary-red)] font-bold">nfcs</span>
                            </div>
                            <span className="font-bold tracking-wider text-sm opacity-80">ST. MALACHY'S</span>
                        </div>

                        <h1 className="text-5xl font-black leading-tight mb-6">
                            Welcome <br /> Back.
                        </h1>
                        <p className="text-lg text-white/80 max-w-sm leading-relaxed">
                            Sign in to access your account, manage your profile, and stay connected with the community.
                        </p>
                    </div>

                    <div className="relative z-20">
                        <div className="flex items-center gap-4 text-sm font-medium text-white/60">
                            <span>© 2025 NFCS</span>
                            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                            <span>Privacy Policy</span>
                            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                            <span>Terms</span>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Sign In</h2>
                        <p className="text-[var(--text-secondary)]">
                            Don't have an account?{" "}
                            <Link href="/register" className="text-[var(--primary-red)] font-bold hover:underline">
                                Create one
                            </Link>
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[var(--text-primary)] ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-secondary)] group-focus-within:text-[var(--primary-red)] transition-colors" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john.doe@example.com"
                                    className="w-full pl-12 pr-4 py-4 bg-[var(--secondary-bg)] border border-transparent rounded-xl focus:bg-white focus:border-[var(--primary-red)]/20 focus:ring-4 focus:ring-[var(--primary-red)]/5 outline-none transition-all font-medium text-[var(--text-primary)] placeholder:text-gray-400"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-sm font-bold text-[var(--text-primary)]">Password</label>
                                <Link href="/forgot-password" className="text-sm text-[var(--primary-red)] font-medium hover:underline">
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-secondary)] group-focus-within:text-[var(--primary-red)] transition-colors" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-12 py-4 bg-[var(--secondary-bg)] border border-transparent rounded-xl focus:bg-white focus:border-[var(--primary-red)]/20 focus:ring-4 focus:ring-[var(--primary-red)]/5 outline-none transition-all font-medium text-[var(--text-primary)] placeholder:text-gray-400"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full py-4 bg-[var(--primary-red)] text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[var(--primary-red)]/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                            >
                                Sign In
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
