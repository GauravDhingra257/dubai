import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [countryCode, setCountryCode] = useState("+92");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* First Name */}
      <div>
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          First name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 py-2 focus:border-blue-500 focus:outline-none"
          placeholder="Name"
          required
        />
      </div>

      {/* Company Name */}
      <div>
        <label
          htmlFor="companyName"
          className="block text-sm font-medium text-gray-700"
        >
          Company name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 py-2 focus:border-blue-500 focus:outline-none"
          placeholder="Company name"
        />
      </div>

      {/* Business Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Business email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 py-2 focus:border-blue-500 focus:outline-none"
          placeholder="Name"
          required
        />
      </div>

      {/* Phone Number */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone number <span className="text-red-500">*</span>
        </label>
        <div className="mt-1 flex">
          <div className="relative w-1/4 mr-2">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="block w-full border-b border-gray-300 py-2 pr-8 pl-2 focus:border-blue-500 focus:outline-none appearance-none"
            >
              <option value="+92">Pakistan</option>
              <option value="+1">USA</option>
              <option value="+44">UK</option>
              <option value="+91">India</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="block w-3/4 border-b border-gray-300 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="+92"
            required
          />
        </div>
      </div>

      {/* How can we help */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          How can we help <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 py-2 focus:border-blue-500 focus:outline-none resize-none"
          placeholder="Name"
          rows={3}
          required
        />
      </div>

      {/* reCAPTCHA */}
      <div className="flex items-center">
        <div className="g-recaptcha border border-gray-200 rounded p-4 w-fit">
          <div className="flex items-center">
            <input type="checkbox" id="recaptcha" className="mr-2" />
            <label htmlFor="recaptcha" className="text-sm text-gray-600">
              I'm not a robot
            </label>
            <div className="ml-auto m-1 pl-4">
              <img
                src="/api/placeholder/30/30"
                alt="reCAPTCHA logo"
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-fit bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
