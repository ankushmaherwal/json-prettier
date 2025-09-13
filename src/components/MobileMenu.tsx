'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';

interface MobileMenuProps {
  currentPage?: string;
}

export const MobileMenu = ({ currentPage = '/' }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'JSON Formatter / Prettifier', isActive: currentPage === '/' },
    { href: '/json-validator', label: 'JSON Validator', isActive: currentPage === '/json-validator' },
    { href: '/json-parser', label: 'JSON Parser', isActive: currentPage === '/json-parser' },
    { href: '/json-minifier', label: 'JSON Minifier', isActive: currentPage === '/json-minifier' },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setIsOpen(false)}>
          <div className="bg-gray-50 w-80 h-full shadow-2xl border-r border-gray-200" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-900 rounded-xl">
                    <span className="text-white font-mono text-lg font-bold">&lt;/&gt;</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900">JSON Formatter / Prettifier</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-lg transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <nav className="p-6">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        item.isActive
                          ? 'text-blue-600 bg-blue-100'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
