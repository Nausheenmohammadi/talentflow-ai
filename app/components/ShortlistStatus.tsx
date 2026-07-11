export default function ShortlistStatus() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">
        AI Decision
      </h2>

      <div className="text-green-600 text-2xl font-bold">
        ✅ Shortlisted
      </div>

      <p className="text-gray-600 mt-3">
        The candidate meets the required skills and ATS score.
      </p>
    </div>
  );
}