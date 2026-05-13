'use client';

import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';

export default function LienHe() {
  const handleCall = () => {
    window.location.href = 'tel:0919562568';
  };

  const handleZalo = () => {
    window.open('https://zalo.me/0919562568', '_blank');
  };

  const locations = [
    {
      name: 'Cơ Sở 1',
      address: '302 Dương Văn Bé, Hà Nội',
    },
    {
      name: 'Cơ Sở 2',
      address: 'Nhà số 50 ngõ 46 Quan Nhân, Hà Nội',
    },
    {
      name: 'Cơ Sở 3',
      address: 'Số 58 Xuân Đỉnh, Hà Nội',
    },
    {
      name: 'Cơ Sở 4',
      address: 'Ngõ 268 nhà số 6 Nguyễn Văn Cừ, Hà Nội',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className="w-full h-64 md:h-80 relative overflow-hidden">
        <Image
          src="/sub-banner.jpg"
          alt="Liên Hệ Với Chúng Tôi"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Liên Hệ Với Chúng Tôi
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#155C8A] rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Điện Thoại</h3>
                <p className="text-gray-600 text-sm">Gọi ngay để được tư vấn</p>
              </div>
            </div>
            <button
              onClick={handleCall}
              className="w-full bg-[#155C8A] hover:bg-[#0f4a6f] text-white px-6 py-3 rounded font-bold transition-colors"
            >
              0919.562.568
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Zalo</h3>
                <p className="text-gray-600 text-sm">Chat trực tiếp qua Zalo</p>
              </div>
            </div>
            <button
              onClick={handleZalo}
              className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-bold transition-colors"
            >
              Chat Zalo
            </button>
          </div>
        </div>

        {/* Working Hours */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#155C8A] rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Giờ Làm Việc</h3>
              <p className="text-gray-600">Thứ 2 - Chủ Nhật: 8:00 - 20:00</p>
              <p className="text-sm text-gray-500">Làm việc cả ngày lễ, tết</p>
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hệ Thống Cơ Sở</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#155C8A] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">{location.name}</h3>
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
