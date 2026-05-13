'use client';

import { Phone, MessageCircle, CheckCircle, DollarSign, Clock, Wrench } from 'lucide-react';
import Image from 'next/image';

export default function ThuMuaDieuHoa() {
  const handleCall = () => {
    window.location.href = 'tel:0919562568';
  };

  const handleZalo = () => {
    window.open('https://zalo.me/0919562568', '_blank');
  };

  const brands = [
    'Daikin', 'Panasonic', 'Mitsubishi', 'LG', 'Samsung',
    'Toshiba', 'Gree', 'Midea', 'Casper', 'Electrolux'
  ];

  const types = [
    { name: 'Điều hòa 1 chiều', desc: 'Chỉ làm lạnh, công suất từ 9.000 - 24.000 BTU' },
    { name: 'Điều hòa 2 chiều', desc: 'Làm lạnh và sưởi ấm, mọi công suất' },
    { name: 'Điều hòa Inverter', desc: 'Tiết kiệm điện, vận hành êm ái' },
    { name: 'Điều hòa Multi', desc: 'Hệ thống multi dàn nóng, nhiều dàn lạnh' },
  ];

  const benefits = [
    { icon: DollarSign, title: 'Giá Cao Nhất', desc: 'Cam kết mua với giá tốt nhất thị trường' },
    { icon: Clock, title: 'Nhanh Chóng', desc: 'Đến tận nơi trong 30 phút, xử lý nhanh gọn' },
    { icon: Wrench, title: 'Tháo Lắp Miễn Phí', desc: 'Đội ngũ kỹ thuật chuyên nghiệp, tháo máy miễn phí' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className="w-full h-64 md:h-80 relative overflow-hidden">
        <Image
          src="/sub-banner.jpg"
          alt="Thu Mua Điều Hòa Cũ"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Thu Mua Điều Hòa Cũ
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Chúng tôi thu mua mọi loại điều hòa cũ, hỏng, các thương hiệu nổi tiếng
              <br />
              Đến tận nơi - Định giá miễn phí - Thanh toán ngay
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200"
            >
              <div className="w-12 h-12 bg-[#155C8A] rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Brands Section */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Thương Hiệu Thu Mua
          </h2>
          <p className="text-gray-600 mb-4">
            Chúng tôi thu mua tất cả các thương hiệu điều hòa nổi tiếng
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center font-semibold text-gray-700 hover:border-[#155C8A] hover:text-[#155C8A] transition-colors"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* Types Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Các Loại Điều Hòa Thu Mua
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {types.map((type, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg border border-gray-200"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#155C8A] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{type.name}</h3>
                    <p className="text-gray-600">{type.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Hình Ảnh Thực Tế
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/images/z7820385588253_d8f26d37af7b05dacb08086c5cb456d9.jpg',
              '/images/z7820385590552_23391ae8f04cf543ca3480bb652711a4.jpg',
              '/images/z7820385599894_694c988967a17bf0c828d5d78d3573a0.jpg',
              '/images/z7820385600109_936d5c52fb9382abf8f2f8cc19ddd97d.jpg',
            ].map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden border border-gray-200"
              >
                <Image
                  src={image}
                  alt={`Thu mua điều hòa ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#155C8A] rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Bạn Có Điều Hòa Cũ Cần Bán?
          </h2>
          <p className="text-white/90 mb-6">
            Liên hệ ngay để được định giá miễn phí và nhận giá tốt nhất!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleCall}
              className="flex items-center justify-center gap-2 bg-white text-[#155C8A] px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              0919.562.568
            </button>
            <button
              onClick={handleZalo}
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-3 rounded font-bold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat Zalo Ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
