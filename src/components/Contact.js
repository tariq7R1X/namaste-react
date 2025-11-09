const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        We'd love to hear from you! Fill out the form below and we’ll get in
        touch soon.
      </p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
