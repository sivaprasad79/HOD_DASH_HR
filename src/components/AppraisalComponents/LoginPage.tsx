import React, { useState } from 'react';
import { Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';

interface LoginPageProps {
    onLogin: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple Hardcoded Credentials for Demo
        if (username === 'faculty' && password === 'gni@123') {
            onLogin();
        } else {
            setError('Invalid credentials. Try "faculty" / "gni@123"');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl flex overflow-hidden max-w-4xl w-full">

                {/* Left Side - Image/Brand */}
                <div className="hidden md:flex flex-col justify-center items-center w-1/2 p-12 bg-blue-50 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
                    </div>

                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg z-10">
                        <ShieldCheck size={48} className="text-blue-900" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-blue-900 mb-2 z-10">GNI HR Portal</h2>
                    <p className="text-gray-600 z-10">Secure Appraisal Management System</p>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-12">
                    <div className="mb-10 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-800">Welcome Back</h3>
                        <p className="text-gray-500">Please sign in to continue</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Username</label>
                            <div className="relative">
                                <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="Enter username"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                            <div className="relative">
                                <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100 flex items-center gap-2">
                                <span className="font-bold">!</span> {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg shadow-blue-900/20"
                        >
                            Sign In <ArrowRight size={18} />
                        </button>
                    </form>

                    <div className="mt-8 text-center text-xs text-gray-400">
                        &copy; 2024 Guru Nanak Institutions
                    </div>
                </div>
            </div>
        </div>
    );
};
