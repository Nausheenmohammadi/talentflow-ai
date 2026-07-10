export default function JobList() {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Google",
      location: "Hyderabad",
      salary: "₹12 LPA",
    },
    {
      title: "Backend Developer",
      company: "Microsoft",
      location: "Bengaluru",
      salary: "₹15 LPA",
    },
    {
      title: "AI Engineer",
      company: "OpenAI",
      location: "Remote",
      salary: "₹20 LPA",
    },
  ];

  return (
    <div className="grid gap-6">
      {jobs.map((job, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <h2 className="text-xl font-bold">{job.title}</h2>

          <p>{job.company}</p>

          <p>{job.location}</p>

          <p className="font-semibold">{job.salary}</p>

          <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Apply Now
          </button>
        </div>
      ))}
    </div>
  );
}