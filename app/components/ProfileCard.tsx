export default function ProfileCard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center gap-6">

        <div className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center text-3xl font-bold">
          N
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Nausheen Mohammadi
          </h2>

          <p className="text-gray-600">
            Computer Science Student
          </p>

          <p className="text-gray-500">
            Hyderabad, India
          </p>
        </div>

      </div>

      <hr className="my-6" />

      <h3 className="font-bold text-xl mb-2">
        Skills
      </h3>

      <p>
        Python • C • Java • HTML • CSS • JavaScript • React • Next.js
      </p>

      <h3 className="font-bold text-xl mt-6 mb-2">
        Education
      </h3>

      <p>
        B.Tech in Computer Science and Engineering
      </p>

      <h3 className="font-bold text-xl mt-6 mb-2">
        Experience
      </h3>

      <p>
        AI Recruitment Platform Project Developer
      </p>
    </div>
  );
}