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
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Phú Gia"
              width={60}
              height={60}
              className="object-fill w-16 h-16"
              priority
            />
            <div>
              <h1 className="text-2xl font-bold text-[#155C8A]">PHÚ GIA</h1>
              <p className="text-sm text-gray-600">Thu Mua Đồ Cũ Hà Nội</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleCall}
              className="flex items-center gap-2 bg-[#155C8A] hover:bg-[#0f2d6f] text-white px-5 py-3 rounded font-bold transition-colors"
            >
              <Phone className="w-5 h-5" />
              <div className="text-left">
                <div>0919.562.568</div>
              </div>
            </button>
            <button
              onClick={handleZalo}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded font-bold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat Zalo</span>
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#155C8A]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Navigation with full width background */}
      <nav className="bg-[#155C8A]">
        <div className="container mx-auto px-4">
          <ul className="hidden md:flex items-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-6 py-3 font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-white bg-[#0f4a6f]'
                      : 'text-white/90 hover:text-white hover:bg-[#0f4a6f]'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {mobileMenuOpen && (
            <div className="md:hidden py-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-white bg-[#0f4a6f]'
                      : 'text-white/90 hover:text-white hover:bg-[#0f4a6f]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-3 space-y-2 border-t border-white/20 mt-2">
                <button
                  onClick={handleCall}
                  className="w-full flex items-center justify-center gap-2 bg-white text-[#155C8A] px-4 py-3 rounded font-bold"
                >
                  <Phone className="w-5 h-5" />
                  <span>0919.562.568</span>
                </button>
                <button
                  onClick={handleZalo}
                  className="w-full flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded font-bold"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat Zalo</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
