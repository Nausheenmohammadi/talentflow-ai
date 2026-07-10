import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">
        TalentFlow AI
      </h1>

      <nav className="flex flex-col gap-4">

        <Link
          href="/recruiter"
          className="hover:bg-slate-700 rounded-lg p-2"
        >
          Dashboard
        </Link>

        <Link
          href="/jobs"
          className="hover:bg-slate-700 rounded-lg p-2"
        >
          Jobs
        </Link>

        <Link
          href="/candidate"
          className="hover:bg-slate-700 rounded-lg p-2"
        >
          Candidates
        </Link>

        <Link
          href="/profile"
          className="hover:bg-slate-700 rounded-lg p-2"
        >
          Profile
        </Link>

        <Link
          href="/login"
          className="hover:bg-slate-700 rounded-lg p-2"
        >
          Logout
        </Link>

      </nav>
    </aside>
  );
}