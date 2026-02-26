import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}! We've received your message and will get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>Contact Us</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem', fontSize: '1.1rem' }}>
        We'd love to hear from you! Get in touch with us for any inquiries or feedback.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        {/* Contact Info Card 1 */}
        <div style={{ backgroundColor: '#f5f5f5', padding: '2rem', borderRadius: '10px', textAlign: 'center' }}>
          <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>📧 Email</h3>
          <p style={{ color: '#555', marginBottom: '0.5rem' }}>techgadget123atgmail.com</p>
          <p style={{ color: '#999', fontSize: '0.9rem' }}>Response time: 24-48 hours</p>
        </div>

        {/* Contact Info Card 2 */}
        <div style={{ backgroundColor: '#f5f5f5', padding: '2rem', borderRadius: '10px', textAlign: 'center' }}>
          <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>📱 Phone</h3>
          <p style={{ color: '#555', marginBottom: '0.5rem' }}>+234 801 234 5678</p>
          <p style={{ color: '#555', marginBottom: '0.5rem' }}>+234 805 987 6543</p>
          <p style={{ color: '#999', fontSize: '0.9rem' }}>Mon-Fri: 9AM-5PM (WAT)</p>
        </div>

        {/* Contact Info Card 3 */}
        <div style={{ backgroundColor: '#f5f5f5', padding: '2rem', borderRadius: '10px', textAlign: 'center' }}>
          <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>📍 Location</h3>
          <p style={{ color: '#555', marginBottom: '0.5rem' }}>APTECH KUBWA</p>
          <p style={{ color: '#555' }}>NIGERIA</p>
        </div>
      </div>

      {/* Contact Form */}
      <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '10px', maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#333' }}>Send us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #ddd',
                borderRadius: '5px',
                fontSize: '1rem',
                fontFamily: 'inherit'
              }}
              placeholder="Your name"
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #ddd',
                borderRadius: '5px',
                fontSize: '1rem',
                fontFamily: 'inherit'
              }}
              placeholder="your@email.com"
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #ddd',
                borderRadius: '5px',
                fontSize: '1rem',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#5568d3'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#667eea'}
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Hours */}
      <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '10px' }}>
        <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Business Hours</h3>
        <p style={{ color: '#555', marginBottom: '0.5rem' }}>Monday - Friday: 9:00 AM - 5:00 PM</p>
        <p style={{ color: '#555', marginBottom: '0.5rem' }}>Saturday: 10:00 AM - 2:00 PM</p>
        <p style={{ color: '#999' }}>Sunday: Closed</p>
      </div>
    </div>
  );
}

export default Contact;
