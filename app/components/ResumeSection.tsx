export default function ResumeSection() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">

      <h2 className="text-2xl font-bold mb-4">
        Resume
      </h2>

      <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
        Upload Resume
      </button>

      <button className="ml-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Edit Profile
      </button>

    </div>
  );
}