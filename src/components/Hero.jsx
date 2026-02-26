function Hero() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "80vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        color: "#fff",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background elements */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          top: "-100px",
          right: "-100px",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "50%",
          bottom: "-50px",
          left: "-50px",
        }}
      ></div>

      {/* Hero Content */}
      <div
        style={{
          maxWidth: "700px",
          zIndex: 2,
          animation: "fadeInUp 0.8s ease-out",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            fontWeight: "800",
            marginBottom: "1rem",
            lineHeight: "1.2",
            textShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          Welcome to TechGadget
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 3vw, 1.5rem)",
            marginBottom: "2rem",
            fontWeight: "300",
            opacity: "0.95",
            lineHeight: "1.6",
          }}
        >
          Discover the latest and greatest gadgets and tech products. 
          Transform your lifestyle with cutting-edge innovation at unbeatable prices.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="/products" style={{ textDecoration: 'none' }}>
          <button
            style={{
              padding: "1rem 2.5rem",
              fontSize: "1.1rem",
              fontWeight: "600",
              backgroundColor: "#fff",
              color: "#667eea",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
            }}
          >
            Shop Now
          </button>
          </a>

          <a href="/contact" style={{ textDecoration: 'none' }}>
          <button
            style={{
              padding: "1rem 2.5rem",
              fontSize: "1.1rem",
              fontWeight: "600",
              backgroundColor: "transparent",
              color: "#fff",
              border: "2px solid #fff",
              borderRadius: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Learn More
          </button>
          </a>
        </div>
      </div>

      {/* Add animation keyframes using style tag */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          section {
            min-height: 60vh;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
