'use client'
import Link from 'next/link';
import { FaBriefcase } from 'react-icons/fa'; // Changed to briefcase icon
import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Bar */}
      <nav className="bg-transparent backdrop-blur-sm fixed w-full z-10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <FaBriefcase className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Job Searcher
              </span>
            </div>
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
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 transition-colors duration-200">
                Home
              </Link>
              <Link href="/menu" className="text-gray-700 hover:text-indigo-600 px-3 py-2 transition-colors duration-200">
                Dashboard
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 transition-colors duration-200">
                About
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-indigo-600 px-3 py-2 transition-colors duration-200">
                Login
              </Link>
              <Link
                href="/register"
                className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Register
              </Link>
            </div>
          </div>
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg mt-2 shadow-lg">
              <Link
                href="/"
                className="block text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                href="/menu"
                className="block text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-base font-medium"
              >
                Dashboard
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Link>
              <Link
                href="/login"
                className="block text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-base font-medium"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-base font-medium"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Track Your Job Search Journey
              <span className="block text-indigo-600">Organize, Apply, Succeed</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Streamline your job applications, track progress, and land your dream job with our comprehensive job application tracking system.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/register"
                className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl text-lg font-semibold"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="bg-white text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition-all duration-200 shadow-lg hover:shadow-xl text-lg font-semibold"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-24 grid md:grid-cols-3 gap-8 px-4">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Applications</h3>
              <p className="text-gray-600">Keep all your job applications organized in one place with status updates and important dates.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics</h3>
              <p className="text-gray-600">Get insights into your application process with detailed statistics and progress tracking.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reminders</h3>
              <p className="text-gray-600">Never miss a deadline with customizable alerts for interviews and follow-ups.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}