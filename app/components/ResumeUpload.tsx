export default function ResumeUpload() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">
        Upload Resume
      </h2>

      <input
        type="file"
        className="border p-3 rounded-lg w-full"
      />

      <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Analyze Resume
      </button>
    </div>
  );
}