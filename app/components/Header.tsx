'use client';

import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
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
        {/* Top Row */}
        <div className="flex justify-between items-center py-3 border-b border-gray-100">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-11 h-11 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Phú Gia Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Phú Gia</h1>
              <p className="text-xs text-[#51a2ff] font-semibold">Thu Mua Đồ Cũ Hà Nội</p>
            </div>
          </Link>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCall}
              className="flex items-center gap-2 bg-gradient-to-r from-[#51a2ff] to-[#3b8eef] hover:from-[#3b8eef] hover:to-[#2a7edf] text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">0919.562.568</span>
            </button>
            <button
              onClick={handleZalo}
              className="hidden md:flex items-center gap-2 bg-white border-2 border-[#51a2ff] text-[#51a2ff] hover:bg-[#51a2ff] hover:text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Zalo</span>
            </button>
          </div>
        </div>

        {/* Bottom Row - Navigation */}
        <div className="py-2.5">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                  pathname === item.href
                    ? 'bg-gradient-to-r from-[#51a2ff] to-[#3b8eef] text-white shadow-md'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-[#51a2ff]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex justify-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 bg-gradient-to-r from-[#51a2ff] to-[#3b8eef] text-white px-6 py-2 rounded-full font-medium text-sm shadow-lg"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span>Menu</span>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-5 py-3 font-medium text-sm transition-all ${
                    pathname === item.href
                      ? 'bg-gradient-to-r from-[#51a2ff] to-[#3b8eef] text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-[#51a2ff]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
