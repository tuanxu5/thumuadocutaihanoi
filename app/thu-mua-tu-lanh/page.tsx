'use client';

import { Phone, MessageCircle, Refrigerator, CheckCircle, DollarSign, Clock, Truck } from 'lucide-react';
import Image from 'next/image';

export default function ThuMuaTuLanh() {
  const handleCall = () => {
    window.location.href = 'tel:0919562568';
  };

  const handleZalo = () => {
    window.open('https://zalo.me/0919562568', '_blank');
  };

  const brands = [
    'Samsung', 'LG', 'Panasonic', 'Toshiba', 'Hitachi',
    'Sharp', 'Electrolux', 'Aqua', 'Sanyo', 'Mitsubishi'
  ];

  const types = [
    { name: 'Tủ lạnh 1 cửa', desc: 'Dung tích từ 50L - 200L, phù hợp gia đình nhỏ' },
    { name: 'Tủ lạnh 2 cửa', desc: 'Dung tích từ 200L - 500L, phổ biến nhất' },
    { name: 'Tủ lạnh Side by Side', desc: 'Dung tích lớn trên 500L, cao cấp' },
    { name: 'Tủ lạnh Inverter', desc: 'Tiết kiệm điện, vận hành êm ái' },
  ];

  const benefits = [
    { icon: DollarSign, title: 'Giá Cao Nhất', desc: 'Cam kết mua với giá tốt nhất thị trường' },
    { icon: Clock, title: 'Nhanh Chóng', desc: 'Đến tận nơi trong 30 phút, xử lý nhanh gọn' },
    { icon: Truck, title: 'Vận Chuyển Miễn Phí', desc: 'Đội ngũ vận chuyển chuyên nghiệp, an toàn' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#155C8A] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Refrigerator className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Thu Mua Tủ Lạnh Cũ
          </h1>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Chúng tôi thu mua mọi loại tủ lạnh cũ, hỏng, các thương hiệu nổi tiếng
            <br />
            Đến tận nơi - Định giá miễn phí - Thanh toán ngay
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
              Chat Zalo
            </button>
          </div>
        </div>
      </section>

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
            Chúng tôi thu mua tất cả các thương hiệu tủ lạnh nổi tiếng
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
            Các Loại Tủ Lạnh Thu Mua
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
              '/images/z7820385601395_19c7302260aed622b241861b5127027a.jpg',
              '/images/z7820385604729_b5ac5cbfce2ad60dd77957eb91537934.jpg',
              '/images/z7820385605838_db572f81db764994166a8dab8e283903.jpg',
              '/images/z7820385610885_86571c1fa99c92720b11574a193586a5.jpg',
            ].map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden border border-gray-200"
              >
                <Image
                  src={image}
                  alt={`Thu mua tủ lạnh ${index + 1}`}
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
            Bạn Có Tủ Lạnh Cũ Cần Bán?
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
