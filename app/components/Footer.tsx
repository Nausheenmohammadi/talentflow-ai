export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">TalentFlow AI</h2>
          <p className="text-gray-400 text-sm mt-2">
            AI-powered recruitment platform for smarter hiring.
          </p>
        </div>

        <div className="flex gap-6 mt-6 md:mt-0">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">Features</a>
          <a href="#" className="hover:text-blue-400">About</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        © 2026 TalentFlow AI. All Rights Reserved.
      </div>
    </footer>
  );
}