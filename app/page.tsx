'use client';

import { Phone, MessageCircle, MapPin, Clock, CheckCircle, DollarSign } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const handleCall = () => {
    window.location.href = 'tel:0919562568';
  };

  const handleZalo = () => {
    window.open('https://zalo.me/0919562568', '_blank');
  };

  const services = [
    'Thu mua điều hòa cũ',
    'Thu mua tủ lạnh cũ',
    'Thu mua máy giặt cũ',
    'Thu mua điện thoại, laptop',
    'Thu mua đồ gia dụng',
    'Thu mua đồ điện tử',
  ];

  const locations = [
    { name: 'Cơ Sở 1', address: '302 Dương Văn Bé, Hà Nội' },
    { name: 'Cơ Sở 2', address: 'Nhà số 50 ngõ 46 Quan Nhân' },
    { name: 'Cơ Sở 3', address: 'Số 58 Xuân Đỉnh' },
    { name: 'Cơ Sở 4', address: 'Ngõ 268 nhà số 6 Nguyễn Văn Cừ' },
  ];

  const images = [
    '/images/z7820385569389_2fd7298c2a7516caa686ec5cc22c18d8.jpg',
    '/images/z7820385575535_671afa6b62a86b35afaf3a99609fcc96.jpg',
    '/images/z7820385581855_cfd13ca54fab17b4a90d5d3c01771803.jpg',
    '/images/z7820385582746_b3e210f02d3833016a74d7a9248a5c5a.jpg',
    '/images/z7820385588253_d8f26d37af7b05dacb08086c5cb456d9.jpg',
    '/images/z7820385590552_23391ae8f04cf543ca3480bb652711a4.jpg',
    '/images/z7820385599894_694c988967a17bf0c828d5d78d3573a0.jpg',
    '/images/z7820385600109_936d5c52fb9382abf8f2f8cc19ddd97d.jpg',
    '/images/z7820385601395_19c7302260aed622b241861b5127027a.jpg',
    '/images/z7820385604729_b5ac5cbfce2ad60dd77957eb91537934.jpg',
    '/images/z7820385605838_db572f81db764994166a8dab8e283903.jpg',
    '/images/z7820385610885_86571c1fa99c92720b11574a193586a5.jpg',
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              THU MUA ĐỒ CŨ TẠI HÀ NỘI
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              GIÁ CAO - UY TÍN - NHANH CHÓNG
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleCall}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors"
              >
                <Phone className="w-6 h-6" />
                0919.562.568
              </button>
              <button
                onClick={handleZalo}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                CHAT ZALO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            TẠI SAO CHỌN CHÚNG TÔI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">GIÁ CAO NHẤT</h3>
              <p className="text-gray-600">
                Cam kết thu mua với giá cao nhất thị trường
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">NHANH CHÓNG</h3>
              <p className="text-gray-600">
                Đến tận nơi trong 30 phút, thanh toán ngay
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">UY TÍN</h3>
              <p className="text-gray-600">
                Hơn 15 năm kinh nghiệm, phục vụ hàng nghìn khách hàng
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            DỊCH VỤ THU MUA
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-red-600 p-4 rounded-lg hover:bg-red-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="font-semibold text-gray-800">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            HÌNH ẢNH THỰC TẾ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <Image
                  src={image}
                  alt={`Thu mua đồ cũ ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            HỆ THỐNG CƠ SỞ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">{location.name}</h3>
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            BẠN CÓ ĐỒ CŨ CẦN BÁN?
          </h2>
          <p className="text-xl mb-6">
            Liên hệ ngay để được định giá miễn phí!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleCall}
              className="flex items-center gap-2 bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-bold transition-colors"
            >
              <Phone className="w-6 h-6" />
              0919.562.568
            </button>
            <button
              onClick={handleZalo}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              CHAT ZALO NGAY
            </button>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6" />
              <div>
                <p className="font-semibold">GIỜ LÀM VIỆC</p>
                <p>8:00 - 20:00 (Cả tuần)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              <div>
                <p className="font-semibold">HOTLINE</p>
                <p className="text-xl font-bold">0919.562.568</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
