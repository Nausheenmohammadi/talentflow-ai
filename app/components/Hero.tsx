"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h1 className="text-5xl font-bold mb-6">
          Welcome to TalentFlow AI
        </h1>

        <p className="text-xl mb-10">
          AI-powered recruitment platform for smarter hiring.
          Find jobs, screen resumes, and manage recruitment from one place.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          <Link
            href="/signup"
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100"
          >
            Get Started
          </Link>

          <Link
            href="/login"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-950"
          >
            Login
          </Link>

          <Link
            href="/jobs"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Browse Jobs
          </Link>

          <Link
            href="/candidate"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
          >
            Candidate Dashboard
          </Link>

          <Link
            href="/recruiter"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
          >
            Recruiter Dashboard
          </Link>

          <Link
            href="/ai-screening"
            className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700"
          >
            AI Resume Screening
          </Link>

        </div>
      </div>
    </section>
  );
}