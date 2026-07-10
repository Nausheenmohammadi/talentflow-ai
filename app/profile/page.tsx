import ProfileHeader from "@/app/components/ProfileHeader";
import ProfileCard from "@/app/components/ProfileCard";
import ResumeSection from "@/app/components/ResumeSection";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <ProfileHeader />

      <ProfileCard />

      <ResumeSection />
    </main>
  );
}