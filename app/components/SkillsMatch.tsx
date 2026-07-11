export default function SkillsMatch() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">
        Skills Match
      </h2>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Python</span>
          <span className="text-green-600 font-bold">95%</span>
        </div>

        <div className="flex justify-between">
          <span>React</span>
          <span className="text-green-600 font-bold">90%</span>
        </div>

        <div className="flex justify-between">
          <span>Next.js</span>
          <span className="text-green-600 font-bold">88%</span>
        </div>

        <div className="flex justify-between">
          <span>Communication</span>
          <span className="text-yellow-600 font-bold">80%</span>
        </div>
      </div>
    </div>
  );
}