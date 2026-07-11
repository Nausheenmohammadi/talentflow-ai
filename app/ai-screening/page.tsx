import ResumeUpload from "@/app/components/ResumeUpload";
import ScoreCard from "@/app/components/ScoreCard";
import SkillsMatch from "@/app/components/SkillsMatch";
import ShortlistStatus from "@/app/components/ShortlistStatus";

export default function AIScreeningPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        AI Resume Screening
      </h1>

      <ResumeUpload />

      <div className="grid md:grid-cols-2 gap-6">

        <ScoreCard />

        <SkillsMatch />

      </div>

      <div className="mt-6">

        <ShortlistStatus />

      </div>

    </main>
  );
}