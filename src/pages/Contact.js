import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container">
      <div className="hero">
        <h2>Contact Us</h2>
        <p>We would love to hear from you!</p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <h3>Get in touch</h3>
          <p>📧 bookstore@gmail.com</p>
          <p>📞 +7 747 053 5677</p>
          <p>📍 Almaty, Kazakhstan</p>
        </div>

        <form className="add-book-form" onSubmit={handleSubmit}>
          <h3 className="form-title">Send a Message</h3>

          {sent && <p className="form-success">✅ Message sent successfully!</p>}

          <div className="form-group">
            <label>Name</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows={4}
              style={{ padding: "10px 14px", borderRadius: "8px", border: "1.5px solid #dde3f0", fontFamily: "Poppins, sans-serif", fontSize: "14px", resize: "vertical", outline: "none", width: "100%" }}
            />
            {errors.message && <span className="form-error">{errors.message}</span>}
          </div>

          <button type="submit" className="btn-full">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;