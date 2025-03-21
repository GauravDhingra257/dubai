import React, { useState, ChangeEvent } from "react";

interface FormData {
  companyName: string;
  jurisdiction: string;
  businessActivity: string;
  visits: string;
  fullName: string;
  phoneCode: string;
  phoneNumber: string;
  email: string;
}

const CalculateSetup: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    jurisdiction: "",
    businessActivity: "",
    visits: "",
    fullName: "",
    phoneCode: "+52",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Calculate your business cost here
      </h1>

      <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left sidebar */}
          <div className="bg-blue-50 p-8 md:w-64">
            <h2 className="text-lg font-semibold mb-12">Your business</h2>

            <div className="space-y-10">
              <div className="flex items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm ${
                    step >= 1 ? "bg-blue-400 text-white" : "bg-gray-200"
                  }`}
                >
                  {step > 1 ? "✓" : "1"}
                </div>
                <span className="ml-4 font-medium">Step</span>
              </div>

              <div className="flex items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm ${
                    step >= 2 ? "bg-blue-400 text-white" : "bg-gray-200"
                  }`}
                >
                  {step > 2 ? "✓" : "2"}
                </div>
                <span className="ml-4 font-medium">Step</span>
              </div>

              <div className="flex items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm ${
                    step >= 3 ? "bg-blue-400 text-white" : "bg-gray-200"
                  }`}
                >
                  {step === 3 ? "✓" : "3"}
                </div>
                <span className="ml-4 font-medium">Step</span>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="p-8 flex-1">
            <h2 className="text-xl font-semibold mb-8">
              {step === 3 ? "Thank you!" : "Calculate your business cost here"}
            </h2>

            {/* Step 1: Business Information */}
            {step === 1 && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Company name
                    </label>
                    <select
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full p-3 h-12 border border-gray-300 rounded-md text-gray-700"
                    >
                      <option value="">Select</option>
                      <option value="company1">Company 1</option>
                      <option value="company2">Company 2</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Choose Jurisdiction
                    </label>
                    <select
                      name="jurisdiction"
                      value={formData.jurisdiction}
                      onChange={handleChange}
                      className="w-full p-3 h-12 border border-gray-300 rounded-md text-gray-700"
                    >
                      <option value="">Select</option>
                      <option value="dubai">Dubai</option>
                      <option value="northern">Northern Emirates</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Business Activity
                    </label>
                    <select
                      name="businessActivity"
                      value={formData.businessActivity}
                      onChange={handleChange}
                      className="w-full p-3 h-12 border border-gray-300 rounded-md text-gray-700"
                    >
                      <option value="">Select</option>
                      <option value="retail">Retail</option>
                      <option value="services">Services</option>
                      <option value="manufacturing">Manufacturing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Number of visas
                    </label>
                    <select
                      name="visits"
                      value={formData.visits}
                      onChange={handleChange}
                      className="w-full p-3 h-12 border border-gray-300 rounded-md text-gray-700"
                    >
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2-5">2-5</option>
                      <option value="6-10">6-10</option>
                      <option value="10+">10+</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Personal Information */}
            {step === 2 && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Enter your name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full p-3 h-12 border border-gray-300 rounded-md text-gray-700"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Enter phone number
                    </label>
                    <div className="flex h-12">
                      <select
                        name="phoneCode"
                        value={formData.phoneCode}
                        onChange={handleChange}
                        className="w-20 p-3 border border-gray-300 rounded-l-md text-gray-700"
                      >
                        <option value="+52">+52</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+971">+971</option>
                      </select>
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="flex-1 p-3 border border-gray-300 border-l-0 rounded-r-md text-gray-700"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Enter your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 h-12 border border-gray-300 rounded-md text-gray-700"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Estimate Result */}
            {step === 3 && (
              <div>
                <p className="mb-6 text-gray-700">Below is your estimate</p>

                <div className="space-y-6 mb-10">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-700">
                      Northern Emirates Freezone:
                    </span>
                    <span className="font-bold">
                      AED 9740 (Visa fee excluded)
                    </span>
                  </div>

                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-700">Dubai Freezone:</span>
                    <span className="font-bold">
                      AED 9740 (Visa fee excluded)
                    </span>
                  </div>

                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-700">Dubai Mainland:</span>
                    <span className="font-bold">AED 11845 (Starting From)</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold mb-4 text-lg">
                    Our sales team will contact you shortly.
                  </h3>
                  <ul className="text-sm space-y-3 list-disc pl-6 text-gray-600">
                    <li>
                      Provide your contact information so we can send you the
                      results and keep you informed about your progress.
                    </li>
                    <li>
                      One of our representatives will discuss your requirements
                      in detail to provide a solution tailored to your unique
                      situation.
                    </li>
                    <li>
                      View the options once you receive your business setup
                      options and proceed to your desired option.
                    </li>
                    <li>
                      Feel free to reach out anytime if you have questions or
                      need more information.
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-end mt-10 space-x-4">
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="px-8 py-3 bg-gray-800 text-white rounded text-sm font-medium hover:bg-gray-700"
                >
                  Back
                </button>
              )}

              {step < 3 && (
                <button
                  onClick={handleNext}
                  className="px-8 py-3 bg-blue-400 text-white rounded text-sm font-medium hover:bg-blue-400"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculateSetup;
