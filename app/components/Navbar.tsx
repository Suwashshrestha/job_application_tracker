"use client"
import { FaBriefcase } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { auth } from '../../lib/firebase';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push('/login');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);
    if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
        </div>
      );
    }

    return (
        <nav className="bg-transparent backdrop-blur-sm fixed w-full z-10 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <FaBriefcase className="h-8 w-8 text-indigo-600" />
                        <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                            Job Searcher
                        </span>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-indigo-600 p-2 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 transition-colors duration-200">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 transition-colors duration-200">
                            About
                        </Link>
                        {user ? (
                            <>
                                <Link href="/dashboard" className="text-gray-700 hover:text-indigo-600 px-3 py-2 transition-colors duration-200">
                                    Dashboard
                                </Link>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-700">{user.email}</span>
                                    <button
                                        onClick={handleLogout}
                                        className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className="text-gray-700 hover:text-indigo-600 px-3 py-2 transition-colors duration-200">
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg mt-2 shadow-lg">
                        <Link href="/" className="block text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-base font-medium">
                            Home
                        </Link>
                        <Link href="/about" className="block text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-base font-medium">
                            About
                        </Link>
                        {user ? (
                            <>
                                <Link href="/dashboard" className="block text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-base font-medium">
                                    Dashboard
                                </Link>
                                <div className="px-3 py-2">
                                    <span className="block text-gray-700 mb-2">{user.email}</span>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className="block text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-base font-medium">
                                    Login
                                </Link>
                                <Link href="/register" className="block text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-base font-medium">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}