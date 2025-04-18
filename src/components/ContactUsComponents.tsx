// // Testimonial Component
// const Testimonial = ({ rating, quote, personName, role, company, avatar }) => {
//   // Create star rating display
//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         <span
//           key={i}
//           className={`text-lg ${
//             i <= rating ? "text-orange-400" : "text-gray-300"
//           }`}
//         >
//           ★
//         </span>
//       );
//     }
//     return stars;
//   };

//   return (
//     <div className="mb-6">
//       <div className="flex mb-1">{renderStars(rating)}</div>
//       <p className="text-sm text-gray-700 mb-2 italic">"{quote}"</p>
//       <div className="flex items-center">
//         <img
//           loading="lazy"
//           src={avatar}
//           alt={personName}
//           className="w-8 h-8 rounded-full mr-2"
//         />
//         <div>
//           <p className="text-sm font-medium">{personName}</p>
//           <p className="text-xs text-gray-600">
//             {role}, {company}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Business Goal Option Component
// const BusinessGoalOption = ({ label }) => {
//   return (
//     <div className="flex items-center mb-4">
//       <div className="w-5 h-5 rounded-full bg-blue-400 text-white flex items-center justify-center mr-2">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-3 w-3"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fillRule="evenodd"
//             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </div>
//       <span className="text-sm">{label}</span>
//     </div>
//   );
// };

// // Contact Form Component
// const ContactForm = ({
//   countries = ["Pakistan", "United States", "Canada", "UK"],
// }) => {
//   const [formState, setFormState] = useState({
//     firstName: "",
//     companyName: "",
//     businessEmail: "",
//     phoneNumber: "",
//     selectedCountry: "Pakistan",
//     phoneCode: "+92",
//     message: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormState((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCountryChange = (e) => {
//     const selectedCountry = e.target.value;
//     let phoneCode = "+92"; // Default Pakistan

//     // Set phone code based on country (simplified example)
//     if (selectedCountry === "United States") phoneCode = "+1";
//     if (selectedCountry === "Canada") phoneCode = "+1";
//     if (selectedCountry === "UK") phoneCode = "+44";

//     setFormState((prev) => ({
//       ...prev,
//       selectedCountry,
//       phoneCode,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formState);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="grid grid-cols-1 gap-4">
//         <div>
//           <label className="block text-sm text-gray-700 mb-1">
//             First name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             name="firstName"
//             value={formState.firstName}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
//             placeholder="Name "
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm text-gray-700 mb-1">
//             Company name
//           </label>
//           <input
//             type="text"
//             name="companyName"
//             value={formState.companyName}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
//             placeholder="Company name"
//           />
//         </div>

//         <div>
//           <label className="block text-sm text-gray-700 mb-1">
//             Business email <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="email"
//             name="businessEmail"
//             value={formState.businessEmail}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
//             placeholder="Business email"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm text-gray-700 mb-1">
//             Phone number <span className="text-red-500">*</span>
//           </label>
//           <div className="flex">
//             <select
//               name="selectedCountry"
//               value={formState.selectedCountry}
//               onChange={handleCountryChange}
//               className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-400"
//             >
//               {countries.map((country) => (
//                 <option key={country} value={country}>
//                   {country}
//                 </option>
//               ))}
//             </select>
//             <input
//               type="text"
//               value={formState.phoneCode}
//               className="w-16 px-2 py-2 border-t border-b border-gray-300 focus:outline-none bg-gray-50"
//               readOnly
//             />
//             <input
//               type="tel"
//               name="phoneNumber"
//               value={formState.phoneNumber}
//               onChange={handleInputChange}
//               className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-1 focus:ring-blue-400"
//               required
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm text-gray-700 mb-1">
//             How can we help? <span className="text-red-500">*</span>
//           </label>
//           <textarea
//             name="message"
//             value={formState.message}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
//             rows="4"
//             placeholder="How can we help?"
//             required
//           ></textarea>
//         </div>

//         <div className="mt-2">
//           <div className="g-recaptcha mb-4">
//             {/* ReCAPTCHA would go here in a real implementation */}
//             <div className="border border-gray-300 rounded p-2 flex items-center justify-center bg-gray-50 text-xs text-gray-500">
//               reCAPTCHA placeholder
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-400 hover:bg-blue-400 text-white font-medium py-2 px-4 rounded transition-colors"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// // Main Contact Section Component
// const ContactSection = () => {
//   // List of business goals as data
//   const businessGoals = [
//     "Digital Transformation / BPO",
//     "Modernise Legacy Systems &Technology",
//     "Develop Robust Apps & Products",
//     "Scale or Building In-House Tech Teams",
//     "Unlock Value With Data & Analytiecs",
//     "Create Stunning Digital Experiences",
//   ];

//   const testimonials = [
//     {
//       rating: 4,
//       quote:
//         "Excellent service. Would definitely recommend for any visa related services. Applied golden visa via them. The service was quick and the communication at each step was much appreciated",
//       personName: "kartikeya singh",
//       role: "Client",
//       company: "",
//       avatar: "/api/placeholder/40/40",
//     },
//     {
//       rating: 5,
//       quote:
//         "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout",
//       personName: "Adrian Borak",
//       role: "Manager",
//       company: "",
//       avatar: "/api/placeholder/40/40",
//     },
//   ];

//   return (
//     <div className="bg-gray-50 py-10">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row">
//           {/* Left Column */}
//           <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
//             <div className="text-orange-500 font-medium mb-2">
//               Let's Contact
//             </div>

//             <h2 className="text-3xl font-bold mb-6">
//               We'll contact you within a couple of hours to schedule a meeting
//               to discuss your goals.
//             </h2>

//             <div className="flex space-x-3 mb-12">
//               <button className="bg-blue-400 hover:bg-blue-400 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
//                 Schedule Now
//               </button>
//               <button className="bg-white hover:bg-gray-50 text-gray-700 text-sm font-medium py-2 px-4 border border-gray-300 rounded transition-colors">
//                 Drop A Message
//               </button>
//             </div>

//             <div>
//               <h3 className="text-lg font-medium mb-4">
//                 What's your immediate business goal
//               </h3>
//               <div>
//                 {businessGoals.map((goal, index) => (
//                   <BusinessGoalOption key={index} label={goal} />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="w-full md:w-1/2">
//             <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
//               {testimonials.map((testimonial, index) => (
//                 <Testimonial
//                   key={index}
//                   rating={testimonial.rating}
//                   quote={testimonial.quote}
//                   personName={testimonial.personName}
//                   role={testimonial.role}
//                   company={testimonial.company}
//                   avatar={testimonial.avatar}
//                 />
//               ))}
//             </div>

//             <div className="bg-white rounded-lg shadow-sm p-6">
//               <ContactForm />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;
