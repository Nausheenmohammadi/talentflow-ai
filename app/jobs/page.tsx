import SearchBar from "@/app/components/SearchBar";
import JobList from "@/app/components/JobList";

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-6">
        Find Your Dream Job
      </h1>

      <SearchBar />

      <div className="flex gap-3 mb-6 flex-wrap">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          All
        </button>

        <button className="bg-white px-4 py-2 rounded-lg shadow">
          IT
        </button>

        <button className="bg-white px-4 py-2 rounded-lg shadow">
          Remote
        </button>

        <button className="bg-white px-4 py-2 rounded-lg shadow">
          Full Time
        </button>
      </div>

      <JobList />

    </main>
  );
}