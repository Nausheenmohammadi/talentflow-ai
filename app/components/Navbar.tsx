"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700"
        >
          TalentFlow AI
        </Link>

        <div className="flex flex-wrap items-center gap-5">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="/jobs" className="hover:text-blue-600">
            Jobs
          </Link>

          <Link href="/candidate" className="hover:text-blue-600">
            Candidate
          </Link>

          <Link href="/recruiter" className="hover:text-blue-600">
            Recruiter
          </Link>

          <Link href="/profile" className="hover:text-blue-600">
            Profile
          </Link>

          <Link href="/ai-screening" className="hover:text-blue-600">
            AI Screening
          </Link>

          <Link
            href="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}