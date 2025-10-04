import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  document.title = "Contact | MovieZone";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#1F1E24] text-white relative p-4 sm:p-6 md:p-12
                    flex flex-col justify-start sm:justify-center items-center">

      {/* Back button */}
      <i
        onClick={() => navigate(-1)}
        className="hover:text-[#6556CD]  absolute top-4 left-4 text-4xl sm:text-5xl text-white ri-arrow-left-fill cursor-pointer"
      ></i>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md sm:max-w-lg bg-gray-900 p-6 sm:p-8 rounded-lg shadow-md mt-8 sm:mt-0"
      >
        <label className="block mb-4">
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 rounded bg-[#2A2932] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />
        </label>
        <label className="block mb-4">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 rounded bg-[#2A2932] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />
        </label>
        <label className="block mb-4">
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 rounded bg-[#2A2932] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            rows="5"
          ></textarea>
        </label>
        <button
          type="submit"
          className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition text-sm sm:text-base"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
