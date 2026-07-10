export default function Hero() {
  return (
    <section className="bg-gray-50 py-24 px-8 text-center">
      <h1 className="text-5xl font-bold text-gray-900">
        AI-Powered Hiring Made Simple
      </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        TalentFlow AI helps recruiters screen resumes, rank candidates,
        and hire top talent faster using Artificial Intelligence.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Get Started
        </button>

        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
          Learn More
        </button>
      </div>
    </section>
  );
}