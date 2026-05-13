'use client';

import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCall = () => {
    window.location.href = 'tel:0919562568';
  };

  const handleZalo = () => {
    window.open('https://zalo.me/0919562568', '_blank');
  };

  const navItems = [
    { href: '/', label: 'Trang Chủ' },
    { href: '/gioi-thieu', label: 'Giới Thiệu' },
    { href: '/thu-mua-dieu-hoa', label: 'Thu Mua Điều Hòa' },
    { href: '/thu-mua-tu-lanh', label: 'Thu Mua Tủ Lạnh' },
    { href: '/tin-tuc', label: 'Tin Tức' },
    { href: '/lien-he', label: 'Liên Hệ' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-3 border-b">
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold text-red-600">
              THU MUA ĐỒ CŨ HÀ NỘI
            </h1>
          </Link>
          <div className="flex gap-2">
            <button
              onClick={handleCall}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 md:px-4 py-2 rounded font-semibold text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">0919.562.568</span>
            </button>
            <button
              onClick={handleZalo}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 md:px-4 py-2 rounded font-semibold text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Zalo</span>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="py-3">
          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center justify-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded font-medium transition-colors ${
                    pathname === item.href
                      ? 'bg-red-600 text-white'
                      : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex justify-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded font-medium"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span>Menu</span>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 bg-white rounded-lg shadow-lg border overflow-hidden">
              <ul className="py-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 font-medium transition-colors ${
                        pathname === item.href
                          ? 'bg-red-600 text-white'
                          : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
