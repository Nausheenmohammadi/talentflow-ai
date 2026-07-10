export default function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "120px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "55px",
        }}
      >
        AI Powered Applicant Tracking System
      </h1>

      <p
        style={{
          marginTop: "20px",
          fontSize: "22px",
        }}
      >
        Screen resumes intelligently using Artificial Intelligence.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "15px 35px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontSize: "18px",
        }}
      >
        Get Started
      </button>
    </section>
  );
}