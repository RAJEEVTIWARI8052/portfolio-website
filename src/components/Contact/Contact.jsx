import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_email: '',
    user_name: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate email sending
    setTimeout(() => {
      setStatus('success');
      setFormData({
        user_email: '',
        user_name: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="flex flex-col items-center justify-center py-24 px-4 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">CONTACT</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            I'd love to hear from you—reach out for any opportunities or questions!
          </p>
        </div>

        <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-white text-center mb-6">
            Connect With Me
          </h3>

          {status === 'success' && (
            <div className="mb-4 p-3 bg-green-600 text-white rounded-lg text-center">
              Message sent successfully!
            </div>
          )}

          <form onSubmit={sendEmail} className="space-y-4">
            <input 
              type="email" 
              name="user_email" 
              placeholder="Your Email" 
              required 
              value={formData.user_email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-500" 
            />
            <input 
              type="text" 
              name="user_name" 
              placeholder="Your Name" 
              required 
              value={formData.user_name}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-500" 
            />
            <input 
              type="text" 
              name="subject" 
              placeholder="Subject" 
              required 
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-500" 
            />
            <textarea 
              name="message" 
              placeholder="Message" 
              rows="4" 
              required 
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-500 resize-none" 
            />

            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;