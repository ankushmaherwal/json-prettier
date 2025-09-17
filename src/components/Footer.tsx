import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">JSON Formatter / Prettifier</h3>
            <p className="text-gray-600 text-sm">
              Free online JSON Formatter / Prettifier for developers. Format, validate, parse, and minify JSON data instantly.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Tools</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
                  JSON Formatter / Prettifier
                </Link>
              </li>
              <li>
                <Link href="/json-validator" className="text-sm text-gray-600 hover:text-gray-900">
                  JSON Validator
                </Link>
              </li>
              <li>
                <Link href="/json-parser" className="text-sm text-gray-600 hover:text-gray-900">
                  JSON Parser
                </Link>
              </li>
              <li>
                <Link href="/json-minifier" className="text-sm text-gray-600 hover:text-gray-900">
                  JSON Minifier
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-sm text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} JSON Formatter / Prettifier. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
