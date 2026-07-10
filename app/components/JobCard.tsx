type JobCardProps = {
  title: string;
  company: string;
  location: string;
};

export default function JobCard({
  title,
  company,
  location,
}: JobCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold">{title}</h2>

      <p className="text-gray-600 mt-2">
        {company}
      </p>

      <p className="text-gray-500">
        {location}
      </p>

      <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
        Apply Now
      </button>
    </div>
  );
}