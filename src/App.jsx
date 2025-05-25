import React from 'react';
import { BrowserRouter } from 'react-router-dom';  // <-- import BrowserRouter
import Navbar from './components/Navbar';
import FooterLinks from './components/FooterLinks';

import './index.css';

function App() {
  return (
    <BrowserRouter>   {/* <-- wrap your app in BrowserRouter */}
      <Navbar />

      {/* Add top padding equal or greater than navbar height (e.g., 72px) */}
      <main className="pt-20 max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Welcome to NokariSarkari</h1>
        
        <p className="mb-4 text-gray-700">
          Design a professional website footer with Tailwind CSS featuring essential elements like social media links, copyright notices,
          and additional navigation that supports your overall site structure.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Footer Examples</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Modern Footer</li>
            <li>Company Footer</li>
            <li>Newsletter Footer</li>
            <li>Feature-Rich UI Library - Tailwind CSS Components</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Ready-to-use UI Elements</h2>
          <p className="text-gray-700">
            Beautifully Designed, and Fully Customizable UI Elements for Every Project.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Website Links</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Home</li>
            <li>Components</li>
            <li>Docs</li>
            <li>Privacy Policy</li>
          </ul>
        </section>
      </main>

      <FooterLinks />
    </BrowserRouter>
  );
}

export default App;
