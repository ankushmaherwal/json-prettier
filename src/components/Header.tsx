import Link from 'next/link';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
  currentPage?: string;
}

export const Header = ({ currentPage = '/' }: HeaderProps) => {
  const navItems = [
    { href: '/', label: 'Formatter', isActive: currentPage === '/' },
    { href: '/json-validator', label: 'Validator', isActive: currentPage === '/json-validator' },
    { href: '/json-parser', label: 'Parser', isActive: currentPage === '/json-parser' },
    { href: '/json-minifier', label: 'Minifier', isActive: currentPage === '/json-minifier' },
  ];

  return (
    <header className="bg-gray-50 border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-900 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
              <span className="text-white font-mono text-lg font-bold">&lt;/&gt;</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                JSON Formatter / Prettifier
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  item.isActive
                    ? 'text-blue-600 bg-blue-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <MobileMenu currentPage={currentPage} />
        </div>
      </div>
    </header>
  );
};
