import React, { useState, ChangeEvent } from "react";
import { Fade } from "react-awesome-reveal";

interface FormData {
  companyName: string;
  jurisdiction: string;
  businessActivity: string;
  visas: string;
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
    visas: "",
    fullName: "",
    phoneCode: "+92",
    phoneNumber: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.companyName) {
        newErrors.companyName = "Company name is required";
      }
      if (!formData.jurisdiction) {
        newErrors.jurisdiction = "Jurisdiction is required";
      }
      if (!formData.businessActivity) {
        newErrors.businessActivity = "Business activity is required";
      }
      if (!formData.visas) {
        newErrors.visas = "Number of visas is required";
      }
    } else if (step === 2) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required";
      }
      if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = "Phone number is required";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  // Render progress steps for mobile view
  const renderMobileSteps = () => (
    <div className="flex justify-between px-4 mb-6 relative">
      <div className="absolute w-[85%] h-0.5 bg-gray-200 left-8 top-4 z-1"></div>
      {[1, 2, 3].map((stepNumber) => (
        <div key={stepNumber} className="flex flex-col items-center z-10">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm 
              ${
                step > stepNumber
                  ? "bg-blue-400 text-white"
                  : step === stepNumber
                  ? "bg-blue-400 text-white"
                  : "bg-gray-200"
              }`}
          >
            {step > stepNumber ? "✓" : stepNumber}
          </div>
          <span className="text-xs mt-1">Step {stepNumber}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="font-sans w-full max-w-5xl mx-auto px-4 mt-8 md:mt-40 mb-16 md:mb-65">
      <Fade triggerOnce direction="down" damping={0.1}>
      <h1 className="text-2xl md:text-3xl font-medium text-center mb-6 md:mb-25 font-lora">
        Calculate your business cost here
      </h1>
      </Fade>
      <Fade triggerOnce direction="up" damping={0.1}>
      <div className="w-full bg-white rounded-xl md:rounded-3xl overflow-hidden border border-gray-200 shadow-sm mt-4 md:mt-7 transition-all duration-300 ease-in-out">
        {/* Mobile Progress Indicator - only visible on small screens */}
        <div className="md:hidden py-4 bg-blue-50">{renderMobileSteps()}</div>

        <div className="flex flex-col md:flex-row">
          {/* Left sidebar - hidden on mobile */}
          <div className="hidden md:block bg-blue-50 p-8 w-64">
            <h2 className="text-lg font-medium mb-12">Your business</h2>

            <div className="relative">
              <div className="absolute h-[80%] w-0.5 bg-gray-200 left-4 top-5"></div>

              <div className="space-y-12 relative">
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                      step > 1
                        ? "bg-blue-400 text-white"
                        : step === 1
                        ? "bg-blue-400 text-white"
                        : "bg-gray-200"
                    } z-10`}
                  >
                    {step > 1 ? "✓" : "1"}
                  </div>
                  <span className="ml-4 font-medium">Step</span>
                </div>

                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                      step > 2
                        ? "bg-blue-400 text-white"
                        : step === 2
                        ? "bg-blue-400 text-white"
                        : "bg-gray-200"
                    } z-10`}
                  >
                    {step > 2 ? "✓" : "2"}
                  </div>
                  <span className="ml-4 font-medium">Step</span>
                </div>

                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                      step === 3 ? "bg-blue-400 text-white" : "bg-gray-200"
                    } z-10`}
                  >
                    {step === 3 ? "✓" : "3"}
                  </div>
                  <span className="ml-4 font-medium">Step</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="p-4 md:p-8 flex-1">
            <h2 className="text-xl font-medium mb-6 md:mb-8">
              {step === 3 ? "Thank you!" : "Calculate your business cost here"}
            </h2>

            {/* Step 1: Business Information */}
            {step === 1 && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Company name
                    </label>
                    <select
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className={`w-full p-2.5 h-10 border ${
                        errors.companyName
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md text-sm text-gray-700 bg-gray-50`}
                    >
                      <option value="">Select</option>
                      <option value="company1">Company 1</option>
                      <option value="company2">Company 2</option>
                    </select>
                    {errors.companyName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Choose Jurisdiction
                    </label>
                    <select
                      name="jurisdiction"
                      value={formData.jurisdiction}
                      onChange={handleChange}
                      required
                      className={`w-full p-2.5 h-10 border ${
                        errors.jurisdiction
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md text-sm text-gray-700 bg-gray-50`}
                    >
                      <option value="">Select</option>
                      <option value="dubai">Dubai</option>
                      <option value="northern">Northern Emirates</option>
                    </select>
                    {errors.jurisdiction && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.jurisdiction}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Business Activity
                    </label>
                    <select
                      name="businessActivity"
                      value={formData.businessActivity}
                      onChange={handleChange}
                      required
                      className={`w-full p-2.5 h-10 border ${
                        errors.businessActivity
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md text-sm text-gray-700 bg-gray-50`}
                    >
                      <option value="">Select</option>
                      <option value="retail">Retail</option>
                      <option value="services">Services</option>
                      <option value="manufacturing">Manufacturing</option>
                    </select>
                    {errors.businessActivity && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.businessActivity}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Number of visas
                    </label>
                    <select
                      name="visas"
                      value={formData.visas}
                      onChange={handleChange}
                      required
                      className={`w-full p-2.5 h-10 border ${
                        errors.visas ? "border-red-500" : "border-gray-300"
                      } rounded-md text-sm text-gray-700 bg-gray-50`}
                    >
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2-5">2-5</option>
                      <option value="6-10">6-10</option>
                      <option value="10+">10+</option>
                    </select>
                    {errors.visas && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.visas}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-end mt-8 md:mt-55">
                  <button
                    onClick={handleNext}
                    className="px-6 md:px-8 py-2.5 bg-blue-400 text-white rounded text-sm font-medium hover:bg-blue-400 w-full md:w-38"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Personal Information */}
            {step === 2 && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
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
                      required
                      className={`w-full p-2.5 h-10 border ${
                        errors.fullName ? "border-red-500" : "border-gray-300"
                      } rounded-md text-sm text-gray-700 bg-gray-50`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Enter phone number
                    </label>
                    <div className="flex h-10">
                      <div className="w-16 md:w-20 p-2.5 border border-gray-300 bg-gray-50 rounded-l-md text-sm text-gray-700 flex items-center justify-center">
                        <span>+92</span>
                      </div>
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        className={`flex-1 p-2.5 border ${
                          errors.phoneNumber
                            ? "border-red-500"
                            : "border-gray-300"
                        } border-l-0 rounded-r-md text-sm text-gray-700 bg-gray-50`}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm mb-2 text-gray-700">
                    Enter your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full md:w-81 p-2.5 h-10 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md text-sm text-gray-700 bg-gray-50`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 mt-8 md:mt-55">
                  <button
                    onClick={handleBack}
                    className="px-6 md:px-8 py-2.5 bg-gray-800 text-white rounded text-sm font-medium hover:bg-gray-700 w-full md:w-38"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-6 md:px-8 py-2.5 bg-blue-400 text-white rounded text-sm font-medium hover:bg-blue-400 w-full md:w-38"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Estimate Result */}
            {step === 3 && (
              <div>
                <p className="mb-6 text-sm text-gray-700 font-medium">
                  Below is your estimate
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex flex-col md:flex-row md:justify-between py-2">
                    <span className="text-sm text-gray-700">
                      Northern Emirates Freezone:
                    </span>
                    <span className="text-sm font-bold mt-1 md:mt-0">
                      AED 9740{" "}
                      <span className="font-normal text-gray-600">
                        (Visa fee excluded)
                      </span>
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:justify-between py-2">
                    <span className="text-sm text-gray-700">
                      Dubai Freezone:
                    </span>
                    <span className="text-sm font-bold mt-1 md:mt-0">
                      AED 9740{" "}
                      <span className="font-normal text-gray-600">
                        (Visa fee excluded)
                      </span>
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:justify-between py-2">
                    <span className="text-sm text-gray-700">
                      Dubai Mainland:
                    </span>
                    <span className="text-sm font-bold mt-1 md:mt-0">
                      AED 31650{" "}
                      <span className="font-normal text-gray-600">
                        (Starting From)
                      </span>
                    </span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-medium mb-4 text-base">
                    Our sales team will contact you shortly.
                  </h3>
                  <ul className="text-xs space-y-2 list-disc pl-6 text-gray-600">
                    <li>
                      Provide your contact information so we can send you the
                      results and keep you informed about your progress.
                    </li>
                    <li>
                      Now, we'll calculate your setup costs. Based on your
                      choices, we'll provide you with an estimate tailored to
                      your unique situation.
                    </li>
                    <li>
                      Keep the details safe! We'll email you a summary of your
                      choices and costs for your records.
                    </li>
                    <li>
                      Feel free to reach out anytime if you have questions or
                      need more information.
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default CalculateSetup;
