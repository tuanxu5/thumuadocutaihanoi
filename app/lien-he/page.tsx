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
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Liên Hệ Với Chúng Tôi
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Sẵn Sàng Phục Vụ 24/7
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            Chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn mọi lúc, mọi nơi
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <button
            onClick={handleCall}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-blue-100 text-left group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Gọi Điện Thoại</h3>
            <p className="text-2xl font-bold text-green-600 mb-2">0919.562.568</p>
            <p className="text-slate-600">Nhấn để gọi ngay</p>
          </button>

          <button
            onClick={handleZalo}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-blue-100 text-left group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Chat Zalo</h3>
            <p className="text-2xl font-bold text-blue-600 mb-2">0919.562.568</p>
            <p className="text-slate-600">Nhấn để chat Zalo</p>
          </button>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Giờ Làm Việc</h3>
              <p className="text-slate-600 text-lg">
                <strong>Thứ 2 - Chủ Nhật:</strong> 8:00 - 20:00
              </p>
              <p className="text-slate-600 mt-2">
                Chúng tôi làm việc cả ngày lễ, tết để phục vụ khách hàng tốt nhất
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Hệ Thống Cơ Sở
          </h2>
          <p className="text-lg text-slate-600">4 cơ sở tại Hà Nội, sẵn sàng phục vụ bạn</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-blue-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{location.name}</h3>
                  <p className="text-slate-600 mb-3">{location.address}</p>
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm"
                  >
                    <MapPin className="w-4 h-4" />
                    Xem trên bản đồ
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-12 mb-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Gửi Tin Nhắn Cho Chúng Tôi
            </h2>
            <p className="text-lg text-slate-600">
              Để lại thông tin, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                Họ và Tên *
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="Nhập họ và tên của bạn"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                Số Điện Thoại *
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="Nhập số điện thoại"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-slate-700 mb-2">
                Địa Chỉ
              </label>
              <input
                type="text"
                id="address"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="Nhập địa chỉ của bạn"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                Nội Dung *
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                placeholder="Mô tả đồ cần bán hoặc câu hỏi của bạn..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg font-bold"
            >
              Gửi Tin Nhắn
            </button>
          </form>
          <p className="text-center text-sm text-slate-500 mt-6">
            Hoặc liên hệ trực tiếp qua hotline: <strong className="text-blue-600">0919.562.568</strong>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cần Tư Vấn Ngay?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Gọi điện hoặc chat Zalo để được tư vấn và định giá miễn phí!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleCall}
              className="flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg font-bold w-full sm:w-auto justify-center"
            >
              <Phone className="w-6 h-6" />
              0919.562.568
            </button>
            <button
              onClick={handleZalo}
              className="flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg font-bold w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-6 h-6" />
              Chat Zalo Ngay
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
