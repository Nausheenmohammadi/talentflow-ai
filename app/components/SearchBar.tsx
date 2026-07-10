export default function SearchBar() {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search jobs..."
        className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}