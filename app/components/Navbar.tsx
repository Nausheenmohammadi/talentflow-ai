export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">
        TalentFlow AI
      </h1>

      <div className="flex gap-8 text-gray-700 font-medium">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
        Login
      </button>
    </nav>
  );
}