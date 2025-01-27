// 'use client';
// import { useState } from 'react';

// const SignupForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleSignup = (e) => {
//     e.preventDefault();
//     if (name && email && password) {
//       setSuccessMessage('Successfully signed up!');
//       setTimeout(() => setSuccessMessage(''), 3000);
//     } else {
//       alert('Please fill out all fields!');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6">
//         <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>
//         <form onSubmit={handleSignup}>
//           {/* Name Input */}
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Name
//             </label>
//             <input
//               id="name"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your name"
//             />
//           </div>

//           {/* Email Input */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//             />
//           </div>

//           {/* Password Input */}
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//             />
//           </div>

//           {/* Signup Button */}
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-500 text-white border border-transparent rounded-lg font-medium hover:bg-white hover:text-blue-500 hover:border-blue-500 transition"
//           >
//             Sign Up
//           </button>
//         </form>

//         {/* Success Notification */}
//         {successMessage && (
//           <div className="mt-4 bg-green-100 text-green-800 p-2 rounded-lg text-center text-sm">
//             {successMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignupForm;























"use client";
import { useState } from "react";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Define the event type as React.FormEvent<HTMLFormElement>
  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email && password) {
      setSuccessMessage("Successfully signed up!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>
        <form onSubmit={handleSignup}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white border border-transparent rounded-lg font-medium hover:bg-white hover:text-blue-500 hover:border-blue-500 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Success Notification */}
        {successMessage && (
          <div className="mt-4 bg-green-100 text-green-800 p-2 rounded-lg text-center text-sm">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
