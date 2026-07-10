export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h2>TalentFlow AI</h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <p>Home</p>
        <p>Features</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </nav>
  );
}