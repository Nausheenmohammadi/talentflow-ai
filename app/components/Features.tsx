export default function Features() {
  const features = [
    {
      title: "AI Resume Screening",
      description:
        "Automatically analyze resumes and shortlist the best candidates using AI.",
    },
    {
      title: "Smart Candidate Ranking",
      description:
        "Rank applicants based on skills, experience, and job requirements.",
    },
    {
      title: "Recruiter Dashboard",
      description:
        "Manage job postings, applications, and hiring progress from one place.",
    },
  ];

  return (
    <section className="py-20 px-8 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-900">
        Why Choose TalentFlow AI?
      </h2>

      <p className="text-center text-gray-600 mt-4 mb-12">
        Powerful features designed to simplify the hiring process.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}