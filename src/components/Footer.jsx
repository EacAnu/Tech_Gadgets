import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f5f5f5",
        color: "#333",
        padding: "3rem 2rem",
        marginTop: "4rem",
        borderTop: "2px solid #667eea",
      }}
    >
       <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* About Section */}
        <div>
          <h3 style={{ marginBottom: "1rem", color: "#667eea" }}>
            TechGadget
          </h3>
          <p style={{ lineHeight: "1.6", color: "#555" }}>
            Your one-stop shop for the latest gadgets and tech products. 
            We bring you cutting-edge technology at affordable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ marginBottom: "1rem", color: "#667eea" }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link
                to="/"
                style={{
                  color: "#555",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#667eea")}
                onMouseLeave={(e) => (e.target.style.color = "#555")}
              >
                Home
              </Link>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link
                to="/products"
                style={{
                  color: "#555",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#667eea")}
                onMouseLeave={(e) => (e.target.style.color = "#555")}
              >
                Products
              </Link>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link
                to="/about"
                style={{
                  color: "#555",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#667eea")}
                onMouseLeave={(e) => (e.target.style.color = "#555")}
              >
                About
              </Link>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link
                to="/contact"
                style={{
                  color: "#555",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#667eea")}
                onMouseLeave={(e) => (e.target.style.color = "#555")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ marginBottom: "1rem", color: "#667eea" }}>
            Contact Us
          </h4>
          <p style={{ marginBottom: "0.5rem", color: "#555" }}>
            📧 Email: techgadget123atgmail.com
          </p>
          <p style={{ marginBottom: "0.5rem", color: "#555" }}>
            📱 Phone: +234 801 234 5678
          </p>
          <p style={{ marginBottom: "0.5rem", color: "#555" }}>
            📱 Phone: +234 805 987 6543
          </p>
          <p style={{ marginBottom: "0.5rem", color: "#555" }}>
            📱 Phone: +234 703 456 7890
          </p>
          <p style={{ color: "#555" }}>
            📍 Address: Located at APTECH KUBWA NIGERIA
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          borderTop: "1px solid #ddd",
          marginTop: "2rem",
          paddingTop: "2rem",
          textAlign: "center",
          color: "#666",
        }}
      >
        <p style={{ marginBottom: "0.5rem" }}>
          &copy; 2026 TechGadget Store. All rights reserved.
        </p>
        <p>
          <Link
            to="#"
            style={{ color: "#667eea", textDecoration: "none" }}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
            Privacy Policy
          </Link>
          {" | "}
          <Link
            to="#"
            style={{ color: "#667eea", textDecoration: "none" }}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
