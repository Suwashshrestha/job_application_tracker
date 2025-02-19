"use client"
import { useState } from "react";
import { addJob } from "../../lib/jobService";
import { FaBriefcase, FaBuilding, FaCalendar, FaStickyNote } from 'react-icons/fa';

export default function JobsPage() {
  const [jobData, setJobData] = useState({
    company: "",
    position: "",
    status: "Applied",
    deadline: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await addJob(jobData);
    if (success) {
      alert("Job added successfully!");
      setJobData({ company: "", position: "", status: "Applied", deadline: "", notes: "" });
    } else {
      alert("Error adding job.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-16 p-6 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Add New Job Application</h2>
        <p className="text-gray-600 mt-2">Track your job applications in one place</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaBuilding className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Company Name"
            value={jobData.company}
            onChange={(e) => setJobData({ ...jobData, company: e.target.value })}
            required
            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaBriefcase className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Position"
            value={jobData.position}
            onChange={(e) => setJobData({ ...jobData, position: e.target.value })}
            required
            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaCalendar className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="date"
            value={jobData.deadline}
            onChange={(e) => setJobData({ ...jobData, deadline: e.target.value })}
            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="relative">
          <div className="absolute top-3 left-3">
            <FaStickyNote className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            placeholder="Notes"
            value={jobData.notes}
            onChange={(e) => setJobData({ ...jobData, notes: e.target.value })}
            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-h-[100px]"
          />
        </div>

        <div>
          <select
            value={jobData.status}
            onChange={(e) => setJobData({ ...jobData, status: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offered">Offered</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <FaBriefcase className="h-5 w-5" />
          <span>Add Job Application</span>
        </button>
      </form>
    </div>
  );
}