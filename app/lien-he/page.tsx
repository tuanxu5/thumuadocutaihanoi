'use client';

import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';

export default function LienHe() {
  const handleCall = () => {
    window.location.href = 'tel:0919562568';
  };

  const handleZalo = () => {
    window.open('https://zalo.me/0919562568', '_blank');
  };

  const locations = [
    { 
      id: 1, 
      name: 'Cơ Sở 1', 
      address: '302 Dương Văn Bé, Hà Nội',
      mapUrl: 'https://maps.google.com/?q=302+Duong+Van+Be+Ha+Noi'
    },
    { 
      id: 2, 
      name: 'Cơ Sở 2', 
      address: 'Nhà số 50 ngõ 46 Quan Nhân, Hà Nội',
      mapUrl: 'https://maps.google.com/?q=50+ngo+46+Quan+Nhan+Ha+Noi'
    },
    { 
      id: 3, 
      name: 'Cơ Sở 3', 
      address: 'Số 58 Xuân Đỉnh, Hà Nội',
      mapUrl: 'https://maps.google.com/?q=58+Xuan+Dinh+Ha+Noi'
    },
    { 
      id: 4, 
      name: 'Cơ Sở 4', 
      address: 'Ngõ 268 nhà số 6 Nguyễn Văn Cừ, Hà Nội',
      mapUrl: 'https://maps.google.com/?q=6+ngo+268+Nguyen+Van+Cu+Ha+Noi'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            Liên Hệ Với Chúng Tôi
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Sẵn sàng tư vấn và hỗ trợ bạn 24/7
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <button
            onClick={handleCall}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-blue-100 text-left group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">Gọi Điện</h3>
            <p className="text-xl font-bold text-green-600">0919.562.568</p>
          </button>

          <button
            onClick={handleZalo}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-blue-100 text-left group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">Chat Zalo</h3>
            <p className="text-xl font-bold text-blue-600">0919.562.568</p>
          </button>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-3">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">Giờ Làm Việc</h3>
            <p className="text-slate-600 font-semibold">T2 - CN: 8:00 - 20:00</p>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            Hệ Thống Cơ Sở
          </h2>
          <p className="text-slate-600">4 cơ sở tại Hà Nội</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all border border-blue-100"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-1">{location.name}</h3>
                  <p className="text-slate-600 text-sm mb-2">{location.address}</p>
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold text-sm"
                  >
                    <MapPin className="w-3 h-3" />
                    Xem bản đồ
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-8 mb-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center shadow-2xl max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Cần Tư Vấn Ngay?
          </h2>
          <p className="text-blue-100 mb-6">
            Gọi điện hoặc chat Zalo để được tư vấn miễn phí!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={handleCall}
              className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-all shadow-xl transform hover:scale-105 font-bold w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              0919.562.568
            </button>
            <button
              onClick={handleZalo}
              className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all shadow-xl transform hover:scale-105 font-bold w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Chat Zalo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
