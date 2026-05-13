'use client';

import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const locations = [
    { name: 'Cơ Sở 1', address: '302 Dương Văn Bé, Hà Nội' },
    { name: 'Cơ Sở 2', address: 'Nhà số 50 ngõ 46 Quan Nhân, Hà Nội' },
    { name: 'Cơ Sở 3', address: 'Số 58 Xuân Đỉnh, Hà Nội' },
    { name: 'Cơ Sở 4', address: 'Ngõ 268 nhà số 6 Nguyễn Văn Cừ, Hà Nội' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">
              THU MUA ĐỒ CŨ HÀ NỘI
            </h3>
            <p className="text-gray-400 mb-4">
              Dịch vụ thu mua đồ cũ uy tín, giá cao nhất thị trường tại Hà Nội.
            </p>
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Clock className="w-5 h-5" />
              <span>8:00 - 20:00 (Cả tuần)</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Liên Hệ</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-lg font-semibold text-white">0919.562.568</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <span>Zalo: 0919.562.568</span>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Dịch Vụ</h4>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>• Thu mua điều hòa, tủ lạnh</li>
                <li>• Thu mua máy giặt, điện tử</li>
                <li>• Thu mua đồ gia dụng</li>
                <li>• Định giá miễn phí tận nơi</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Hệ Thống Cơ Sở</h3>
            <div className="space-y-3">
              {locations.map((location, index) => (
                <div key={index} className="text-sm">
                  <div className="flex items-start gap-2 text-gray-400">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-red-400" />
                    <div>
                      <span className="font-semibold text-white">{location.name}:</span>
                      <br />
                      <span>{location.address}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; 2026 Thu Mua Đồ Cũ Hà Nội. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/gioi-thieu" className="text-gray-400 hover:text-white transition-colors">
                Giới Thiệu
              </Link>
              <Link href="/lien-he" className="text-gray-400 hover:text-white transition-colors">
                Liên Hệ
              </Link>
              <Link href="/tin-tuc" className="text-gray-400 hover:text-white transition-colors">
                Tin Tức
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
