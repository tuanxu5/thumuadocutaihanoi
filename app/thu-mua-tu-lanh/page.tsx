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

  const process = [
    { step: '1', title: 'Liên Hệ', desc: 'Gọi điện hoặc nhắn Zalo cho chúng tôi' },
    { step: '2', title: 'Đến Tận Nơi', desc: 'Nhân viên đến kiểm tra trong 30 phút' },
    { step: '3', title: 'Định Giá', desc: 'Báo giá miễn phí, công khai minh bạch' },
    { step: '4', title: 'Vận Chuyển', desc: 'Đồng ý giá, vận chuyển và thanh toán ngay' },
  ];

  const benefits = [
    { icon: DollarSign, title: 'Giá Cao Nhất', desc: 'Cam kết mua với giá tốt nhất thị trường' },
    { icon: Clock, title: 'Nhanh Chóng', desc: 'Đến tận nơi trong 30 phút, xử lý nhanh gọn' },
    { icon: Truck, title: 'Vận Chuyển Miễn Phí', desc: 'Đội ngũ vận chuyển chuyên nghiệp, an toàn' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <Refrigerator className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Thu Mua Tủ Lạnh Cũ
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Giá Cao - Vận Chuyển Miễn Phí
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            Chúng tôi thu mua mọi loại tủ lạnh cũ, hỏng, các thương hiệu nổi tiếng
            <br className="hidden md:block" />
            Đến tận nơi - Định giá miễn phí - Thanh toán ngay
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleCall}
              className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg font-bold w-full sm:w-auto justify-center"
            >
              <Phone className="w-6 h-6" />
              0919.562.568
            </button>
            <button
              onClick={handleZalo}
              className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg font-bold w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-6 h-6" />
              Chat Zalo
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-blue-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
            Thương Hiệu Thu Mua
          </h2>
          <p className="text-lg text-slate-600 mb-8 text-center">
            Chúng tôi thu mua tất cả các thương hiệu tủ lạnh nổi tiếng
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 text-center font-semibold text-slate-700 hover:from-blue-100 hover:to-indigo-100 transition-all border border-blue-100"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Các Loại Tủ Lạnh Thu Mua
          </h2>
          <p className="text-lg text-slate-600">Thu mua mọi loại tủ lạnh, mọi tình trạng</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {types.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-blue-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{type.name}</h3>
                  <p className="text-slate-600">{type.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Quy Trình Thu Mua
          </h2>
          <p className="text-lg text-slate-600">Đơn giản, nhanh chóng chỉ với 4 bước</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-blue-100 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4 mx-auto text-white text-2xl font-bold">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Hình Ảnh Thực Tế
          </h2>
          <p className="text-lg text-slate-600">Những tủ lạnh chúng tôi đã thu mua</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            '/images/z7820385601395_19c7302260aed622b241861b5127027a.jpg',
            '/images/z7820385604729_b5ac5cbfce2ad60dd77957eb91537934.jpg',
            '/images/z7820385605838_db572f81db764994166a8dab8e283903.jpg',
            '/images/z7820385610885_86571c1fa99c92720b11574a193586a5.jpg',
          ].map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-2 border-white"
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
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bạn Có Tủ Lạnh Cũ Cần Bán?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Liên hệ ngay để được định giá miễn phí và nhận giá tốt nhất!
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
