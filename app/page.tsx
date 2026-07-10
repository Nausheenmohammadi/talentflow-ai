 export default function Home() {
  return (
    <main>

      <nav style={{
        display:"flex",
        justifyContent:"space-between",
        padding:"20px 60px",
        background:"#0f172a",
        color:"white"
      }}>
        <h2>TalentFlow AI</h2>

        <div style={{
          display:"flex",
          gap:"30px"
        }}>
          <p>Home</p>
          <p>Features</p>
          <p>About</p>
          <p>Contact</p>
        </div>

      </nav>

      <section style={{
        textAlign:"center",
        padding:"120px 20px"
      }}>

        <h1 style={{
          fontSize:"55px"
        }}>
          AI Powered Applicant Tracking System
        </h1>

        <p style={{
          marginTop:"20px",
          fontSize:"22px"
        }}>
          Screen resumes intelligently using Artificial Intelligence.
        </p>

        <button style={{
          marginTop:"30px",
          padding:"15px 35px",
          background:"#2563eb",
          color:"white",
          border:"none",
          borderRadius:"10px",
          fontSize:"18px"
        }}>
          Get Started
        </button>

      </section>

      <section style={{
        display:"flex",
        justifyContent:"space-around",
        padding:"70px"
      }}>

        <div>
          <h2>Resume Screening</h2>
          <p>Automatically analyze resumes.</p>
        </div>

        <div>
          <h2>AI Ranking</h2>
          <p>Rank applicants intelligently.</p>
        </div>

        <div>
          <h2>Dashboard</h2>
          <p>Track recruitment progress.</p>
        </div>

      </section>

      <footer style={{
        textAlign:"center",
        padding:"30px",
        background:"#0f172a",
        color:"white"
      }}>
        © 2026 TalentFlow AI
      </footer>

    </main>
  );
} 