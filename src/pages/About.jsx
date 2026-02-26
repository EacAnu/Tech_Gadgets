function About() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem', color: '#333' }}>
        About TechGadget
      </h1>

      {/* Mission Section */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.8rem' }}>Our Mission</h2>
        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
          At TechGadget, we're passionate about bringing the latest innovative technology to your doorstep. 
          Our mission is to make cutting-edge gadgets and tech products accessible to everyone at affordable prices. 
          We believe that technology should enhance your lifestyle, and we're here to help you find the perfect products for your needs.
        </p>
      </div>

      {/* Why Choose Us */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.8rem' }}>Why Choose Us?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div style={{ backgroundColor: '#f5f5f5', padding: '1.5rem', borderRadius: '10px' }}>
            <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>🚀 Latest Technology</h3>
            <p style={{ color: '#555' }}>We stock the newest and most innovative gadgets from trusted brands worldwide.</p>
          </div>
          <div style={{ backgroundColor: '#f5f5f5', padding: '1.5rem', borderRadius: '10px' }}>
            <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>💰 Best Prices</h3>
            <p style={{ color: '#555' }}>Competitive pricing and regular deals to ensure you get the best value for your money.</p>
          </div>
          <div style={{ backgroundColor: '#f5f5f5', padding: '1.5rem', borderRadius: '10px' }}>
            <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>🤝 Excellent Service</h3>
            <p style={{ color: '#555' }}>Our dedicated team is always ready to help with product recommendations and support.</p>
          </div>
          <div style={{ backgroundColor: '#f5f5f5', padding: '1.5rem', borderRadius: '10px' }}>
            <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>📦 Fast Delivery</h3>
            <p style={{ color: '#555' }}>Quick and reliable shipping to get your products to you in perfect condition.</p>
          </div>
          <div style={{ backgroundColor: '#f5f5f5', padding: '1.5rem', borderRadius: '10px' }}>
            <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>🛡️ Quality Guaranteed</h3>
            <p style={{ color: '#555' }}>All products are authentic and come with manufacturer warranties for your peace of mind.</p>
          </div>
          <div style={{ backgroundColor: '#f5f5f5', padding: '1.5rem', borderRadius: '10px' }}>
            <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>💳 Secure Checkout</h3>
            <p style={{ color: '#555' }}>Safe and encrypted payment options to protect your personal and financial information.</p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div style={{ marginBottom: '3rem', backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '10px' }}>
        <h2 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.8rem' }}>Our Story</h2>
        <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.8', marginBottom: '1rem' }}>
          TechGadget was founded with a simple vision: to democratize access to the world's best technology products. 
          What started as a small passion project has grown into Nigeria's trusted platform for quality gadgets and electronics.
        </p>
        <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.8' }}>
          Today, we serve thousands of satisfied customers across Nigeria, providing them with authentic products, 
          competitive prices, and exceptional customer service. We're committed to staying at the forefront of technology 
          trends and continuously expanding our product range to meet your evolving needs.
        </p>
      </div>

      {/* Call to Action */}
      <div style={{ textAlign: 'center', backgroundColor: '#667eea', color: 'white', padding: '2rem', borderRadius: '10px' }}>
        <h2 style={{ marginBottom: '1rem' }}>Ready to Explore?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Browse our extensive collection of gadgets and tech products today!
        </p>
        <a href="/products" style={{
          display: 'inline-block',
          padding: '0.75rem 2rem',
          backgroundColor: 'white',
          color: '#667eea',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          fontSize: '1rem',
          transition: 'transform 0.3s'
        }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Shop Now →
        </a>
      </div>
    </div>
  );
}

export default About;
