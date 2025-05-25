import React from "react";

const ContactUs = () => (
  <form className="flex flex-col items-center text-sm text-white px-4 pb-12">
    <p className="text-xs bg-indigo-700 text-pink-400 font-medium px-3 py-1 rounded-full mt-8">
      Contact Us
    </p>
    <h1 className="text-4xl text-white font-bold py-4 text-center">Let’s Get In Touch.</h1>
    <p className="max-md:text-sm text-gray-300 pb-10 text-center">
      Or just reach out manually to us at{" "}
      <a
        href="mailto:Contact@NokariSarkari.com"
        className="text-pink-400 hover:text-white transition-colors"
      >
        Contact@NokariSarkari.com
      </a>
    </p>

    <div className="max-w-md w-full">
      {/* Full Name */}
      <label className="font-medium text-white">Full Name</label>
      <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-gray-600 rounded-full focus-within:ring-2 focus-within:ring-pink-400 transition-all overflow-hidden bg-black/30">
        <svg width="20" height="20" fill="#f472b6" viewBox="0 0 20 20">
          <path d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0" />
        </svg>
        <input
          type="text"
          className="h-full px-2 w-full outline-none bg-transparent placeholder-gray-400 text-white"
          placeholder="Enter your full name"
          required
        />
      </div>

      {/* Email */}
      <label className="font-medium mt-4 text-white">Email Address</label>
      <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-gray-600 rounded-full focus-within:ring-2 focus-within:ring-pink-400 transition-all overflow-hidden bg-black/30">
        <svg width="20" height="20" fill="#f472b6" viewBox="0 0 20 20">
          <path d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z" />
        </svg>
        <input
          type="email"
          className="h-full px-2 w-full outline-none bg-transparent placeholder-gray-400 text-white"
          placeholder="Enter your email address"
          required
        />
      </div>

      {/* Message */}
      <label className="font-medium mt-4 text-white">Message</label>
      <textarea
        rows="4"
        className="w-full mt-2 p-2 bg-black/30 border border-gray-600 rounded-lg resize-none outline-none placeholder-gray-400 text-white focus:ring-2 focus-within:ring-pink-400 transition-all"
        placeholder="Enter your message"
        required
      ></textarea>

      {/* Submit Button */}
      <button
        type="submit"
        className="flex items-center justify-center gap-1 mt-5 bg-pink-700 hover:bg-pink-800 text-white py-2 w-full rounded-full transition"
      >
        Submit Form
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
          <path
            d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33"
            fill="#fff"
          />
        </svg>
      </button>
    </div>
  </form>
);

export default ContactUs;
