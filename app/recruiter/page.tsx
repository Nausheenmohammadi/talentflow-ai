import Sidebar from "@/app/components/Sidebar";
import Topbar from "@/app/components/Topbar";
import StatCard from "@/app/components/StatCard";
import JobTable from "@/app/components/JobTable";

export default function RecruiterPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1">
        <Topbar />

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Total Jobs" value="12" />
            <StatCard title="Applicants" value="248" />
            <StatCard title="Interviews" value="34" />
            <StatCard title="Hired" value="9" />
          </div>

          <JobTable />
        </div>
      </main>
    </div>
  );
}