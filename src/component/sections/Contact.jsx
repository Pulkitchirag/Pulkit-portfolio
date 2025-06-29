import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';
import emailjs from 'emailjs-com';

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit =(e) => {
    e.preventDefault()
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        setFormData({name: "", email: "", message: ""}); // Reset form data
        console.log(result.text);
        alert("Message sent successfully!");
      }, (error) => {
        console.error(error.text);
        alert("Failed to send message. Please try again later.");
      });
  }
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      <RevealOnScroll>
        <div className="px-4 w-full max-w-xl">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <form action="#" className="space-y-6"onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5 resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-lg w-full font-semibold"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
