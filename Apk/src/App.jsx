function App() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Download Our Mobile App</h1>
      <p>Click below to download the latest Android APK.</p>

      <a
        href="https://github.com/PiyushGupta-45/apk/releases/download/1.0.0/app-release.apk"
        download
        style={{
          padding: "12px 25px",
          background: "#4C5BF1",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "20px",
        }}
      >
        Download APK
      </a>
    </div>
  );
}

export default App;
