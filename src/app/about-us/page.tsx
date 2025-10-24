import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdsterraAd } from '@/components/AdsterraAd';

export const metadata: Metadata = {
  title: 'About Us - JSON Formatter / Prettifier',
  description: 'Learn about our mission to build productivity tools that boost efficiency for developers and tech enthusiasts.',
  keywords: 'about us, tech enthusiast, productivity tools, JSON tools, developer tools',
};

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage="/about-us" />
      
      {/* Adsterra Ad - After Header */}
      <AdsterraAd />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About Us
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We&apos;re passionate about creating tools that make developers&apos; lives easier and boost productivity across the tech community.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            As a tech enthusiast and developer, I&apos;ve always been fascinated by the power of well-designed tools to transform complex tasks into simple, efficient workflows. This passion drives everything we do at JSON Formatter / Prettifier.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to build productivity tools that genuinely boost productivity for developers, designers, and tech professionals worldwide. We believe that the right tool at the right time can save hours of work and eliminate frustration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why We Build</h3>
            <p className="text-gray-700 leading-relaxed">
              Every tool we create stems from real-world problems we&apos;ve encountered. Whether it&apos;s formatting JSON data, validating API responses, or parsing complex structures, we understand the pain points because we&apos;ve been there.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
            <p className="text-gray-700 leading-relaxed">
              We focus on simplicity, speed, and reliability. Our tools are designed to work instantly without requiring registration, downloads, or complex setup processes. Just open, use, and get results.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Story Behind JSON Tools</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            As a tech enthusiast who loves to build productivity tools, I&apos;ve spent countless hours working with JSON data across various projects. From API integrations to configuration files, JSON is everywhere in modern development.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I noticed that developers often struggle with:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6">
            <li>Formatting messy JSON for better readability</li>
            <li>Validating JSON before sending it to APIs</li>
            <li>Parsing complex JSON structures to understand data flow</li>
            <li>Minifying JSON to reduce payload sizes</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed">
            This inspired me to create a comprehensive suite of JSON tools that address all these needs in one place. The result is a collection of fast, reliable, and user-friendly tools that boost productivity for developers worldwide.
          </p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Speed</h3>
              <p className="text-gray-700">Lightning-fast processing with instant results</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Privacy</h3>
              <p className="text-gray-700">Your data stays on your device, always secure</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Precision</h3>
              <p className="text-gray-700">Accurate results you can trust every time</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Community</h2>
          <p className="text-lg text-gray-700 mb-8">
            We&apos;re always looking to improve our tools and add new features. Your feedback and suggestions help us build better products for the entire tech community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get in Touch
            </a>
            <Link
              href="/"
              className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              Try Our Tools
            </Link>
          </div>
        </div>
      </div>
      </div>
      
      <Footer />
    </div>
  );
}
