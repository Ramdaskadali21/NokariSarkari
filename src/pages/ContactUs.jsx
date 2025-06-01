import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    details: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send formData to backend or API
    console.log('Form submitted:', formData);
    alert('Form submitted! (Implement actual submission logic)');
    // Optionally reset form after submit
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      details: '',
    });
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-white">
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Contact us</h1>
          <p className="mt-1 text-neutral-400">
            We'd love to talk about how we can help you.
          </p>
        </div>

        <div className="mt-12 grid items-start lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Contact Form Card */}
          <div className="flex flex-col border border-slate-700 rounded-xl bg-slate-800 p-6 lg:p-8 hover:border-blue-500 transition-all duration-300">
            <h2 className="mb-8 text-xl font-semibold text-white">Fill in the form</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                    placeholder="First Name"
                    className="py-2.5 sm:py-3 px-4 w-full bg-slate-900 border border-slate-700 rounded-lg text-sm placeholder-neutral-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  />
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Last Name"
                    className="py-2.5 sm:py-3 px-4 w-full bg-slate-900 border border-slate-700 rounded-lg text-sm placeholder-neutral-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="py-2.5 sm:py-3 px-4 w-full bg-slate-900 border border-slate-700 rounded-lg text-sm placeholder-neutral-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="Phone Number"
                  className="py-2.5 sm:py-3 px-4 w-full bg-slate-900 border border-slate-700 rounded-lg text-sm placeholder-neutral-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />

                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Details"
                  className="py-2.5 sm:py-3 px-4 w-full bg-slate-900 border border-slate-700 rounded-lg text-sm placeholder-neutral-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-6 w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition"
              >
                Send inquiry
              </button>

              <p className="mt-3 text-center text-sm text-neutral-400">
                We'll get back to you in 1–2 business days.
              </p>
            </form>
          </div>

          {/* Info Blocks */}
          <div className="divide-y divide-slate-700 space-y-6">
            {[
              {
                title: 'Knowledgebase',
                description: "We're here to help with any questions or code.",
                link: '#',
                linkText: 'Contact support',
                icon: (
                  <svg
                    className="shrink-0 size-6 mt-1.5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                ),
              },
              {
                title: 'FAQ',
                description: 'Search our FAQ for answers to anything you might ask.',
                link: '#',
                linkText: 'Visit FAQ',
                icon: (
                  <svg
                    className="shrink-0 size-6 mt-1.5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5Z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                ),
              },
              {
                title: 'Developer APIs',
                description: 'Check out our development quickstart guide.',
                link: '#',
                linkText: 'Contact sales',
                icon: (
                  <svg
                    className="shrink-0 size-6 mt-1.5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="m7 11 2-2-2-2" />
                    <path d="M11 13h4" />
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  </svg>
                ),
              },
              {
                title: 'Contact us by email',
                description: 'If you wish to write us an email instead please use',
                link: '#',
                linkText: 'example@site.com',
                icon: (
                  <svg
                    className="shrink-0 size-6 mt-1.5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-x-6 pt-6 first:pt-0">
                {item.icon}
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-neutral-400">{item.description}</p>
                  <a
                    href={item.link}
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-blue-400 hover:text-blue-300"
                  >
                    {item.linkText}
                    <svg
                      className="size-4 transition-transform group-hover:translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0.976 6.922c-.539 0-.976.456-.976 1.02 0 .564.437 1.02.976 1.02h11.048l-3.342 3.273a1.068 1.068 0 0 0 0 1.52.92.92 0 0 0 1.293 0l5.085-4.97a1.041 1.041 0 0 0 .028-1.479l-5.078-4.97a.92.92 0 0 0-1.292 0 1.069 1.069 0 0 0 0 1.519l3.35 3.273z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
