'use client';

import { Phone, MessageCircle, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Phú Gia"
                width={60}
                height={60}
                className="object-fill w-16 h-16"
              />
              <div>
                <h3 className="text-2xl font-bold text-[#155C8A]">PHÚ GIA</h3>
                <p className="text-sm text-white/80">Thu Mua Đồ Cũ Hà Nội</p>
              </div>
            </Link>
            <p className="text-white/80 mb-4">
              Dịch vụ uy tín, giá cao nhất thị trường.
            </p>
            <div className="space-y-2 text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>0919.562.568</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>Zalo: 0919.562.568</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liên Kết</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link href="/gioi-thieu" className="text-white/80 hover:text-white">
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link href="/thu-mua-dieu-hoa" className="text-white/80 hover:text-white">
                  Thu Mua Điều Hòa
                </Link>
              </li>
              <li>
                <Link href="/thu-mua-tu-lanh" className="text-white/80 hover:text-white">
                  Thu Mua Tủ Lạnh
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="text-white/80 hover:text-white">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xl font-bold mb-4">Địa Chỉ</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Cơ Sở 1: 302 Dương Văn Bé, Hà Nội</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Cơ Sở 2: Nhà số 50 ngõ 46 Quan Nhân, Hà Nội</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Cơ Sở 3: Số 58 Xuân Đỉnh, Hà Nội</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Cơ Sở 4: Ngõ 268 nhà số 6 Nguyễn Văn Cừ, Hà Nội</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/60 text-sm">
          <p>&copy; 2026 Phú Gia - Thu Mua Đồ Cũ Hà Nội. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
