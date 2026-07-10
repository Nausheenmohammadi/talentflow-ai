import CandidateHeader from "@/app/components/CandidateHeader";
import CandidateProfile from "@/app/components/CandidateProfile";
import JobCard from "@/app/components/JobCard";

export default function CandidatePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <CandidateHeader />

      <CandidateProfile />

      <h2 className="text-2xl font-bold mb-4">
        Available Jobs
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <JobCard
          title="Frontend Developer"
          company="Google"
          location="Hyderabad"
        />

        <JobCard
          title="Backend Developer"
          company="Microsoft"
          location="Bengaluru"
        />

        <JobCard
          title="AI Engineer"
          company="OpenAI"
          location="Remote"
        />

      </div>

    </main>
  );
}