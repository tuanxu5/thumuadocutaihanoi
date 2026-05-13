'use client';

import { Phone, MessageCircle, Refrigerator, CheckCircle, DollarSign, Clock, Truck, Star, Shield, Zap } from 'lucide-react';
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
    'Sharp', 'Electrolux', 'Aqua', 'Sanyo', 'Mitsubishi',
    'Beko', 'Haier', 'Whirlpool', 'Bosch', 'Siemens'
  ];

  const types = [
    { name: 'Tủ lạnh 1 cửa', desc: 'Dung tích từ 50L - 200L, phù hợp gia đình nhỏ', price: '300k - 3tr' },
    { name: 'Tủ lạnh 2 cửa', desc: 'Dung tích từ 200L - 500L, phổ biến nhất', price: '800k - 10tr' },
    { name: 'Tủ lạnh Side by Side', desc: 'Dung tích lớn trên 500L, cao cấp', price: '3tr - 20tr' },
    { name: 'Tủ lạnh Inverter', desc: 'Tiết kiệm điện, vận hành êm ái', price: '1tr - 15tr' },
    { name: 'Tủ lạnh Mini', desc: 'Dung tích nhỏ 50-100L, tiện lợi', price: '200k - 2tr' },
    { name: 'Tủ lạnh French Door', desc: 'Cao cấp, nhiều ngăn, dung tích lớn', price: '5tr - 25tr' },
  ];

  const benefits = [
    { icon: DollarSign, title: 'Giá Cao Nhất', desc: 'Cam kết mua với giá cao hơn thị trường 10-20%' },
    { icon: Clock, title: 'Nhanh Chóng', desc: 'Đến tận nơi trong 30 phút, xử lý nhanh gọn' },
    { icon: Truck, title: 'Vận Chuyển Miễn Phí', desc: 'Đội ngũ vận chuyển chuyên nghiệp, an toàn' },
    { icon: Shield, title: 'Uy Tín', desc: 'Hơn 15 năm kinh nghiệm, 10,000+ khách hàng tin tưởng' },
  ];

  const conditions = [
    'Tủ lạnh còn hoạt động tốt, làm lạnh bình thường',
    'Tủ lạnh hoạt động yếu, kém lạnh',
    'Tủ lạnh hỏng, không hoạt động',
    'Tủ lạnh cũ, đã qua sử dụng lâu năm',
    'Tủ lạnh thanh lý văn phòng, khách sạn, nhà hàng',
    'Tủ lạnh mất gas, cần bảo trì',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl">
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
            <span className="font-semibold text-slate-800">Đến tận nơi • Định giá miễn phí • Thanh toán ngay</span>
          </p>
          
          {/* Contact Highlight */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 shadow-2xl mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              ))}
            </div>
            <p className="text-white text-lg mb-4 font-semibold">Hotline 24/7 - Tư vấn miễn phí!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleCall}
                className="group flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all shadow-xl transform hover:scale-105 text-lg font-bold w-full sm:w-auto justify-center"
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>0919.562.568</span>
              </button>
              <button
                onClick={handleZalo}
                className="group flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all shadow-xl transform hover:scale-105 text-lg font-bold w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Chat Zalo Ngay</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Detailed Info Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Tại Sao Chọn Chúng Tôi?
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-800">Phú Gia - Thu Mua Tủ Lạnh Cũ</strong> là đơn vị chuyên nghiệp với hơn 15 năm kinh nghiệm trong lĩnh vực thu mua tủ lạnh cũ tại Hà Nội.
                </p>
                <p>
                  Chúng tôi cam kết mua với <strong className="text-blue-600">giá cao nhất thị trường</strong>, đến tận nơi trong 30 phút, vận chuyển miễn phí và thanh toán ngay tại chỗ bằng tiền mặt.
                </p>
                <p>
                  Đội ngũ kỹ thuật viên giàu kinh nghiệm, am hiểu về các dòng tủ lạnh, đảm bảo định giá chính xác và công bằng nhất cho khách hàng.
                </p>
              </div>
              
              {/* Contact in content */}
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                <p className="text-slate-700 font-semibold mb-3">
                  📞 Liên hệ ngay: <span className="text-blue-600 text-xl">0919.562.568</span>
                </p>
                <p className="text-slate-600 text-sm">
                  Hoặc chat Zalo để được tư vấn và báo giá miễn phí!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/tulanh1.png"
                  alt="Thu mua tủ lạnh"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/tulanh2.jpeg"
                  alt="Thu mua tủ lạnh"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/tulanh3.webp"
                  alt="Thu mua tủ lạnh"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/tulanh4.jpg"
                  alt="Thu mua tủ lạnh"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
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
          
          {/* Contact CTA */}
          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
            <p className="text-center text-slate-700 text-lg mb-4">
              <strong className="text-green-600">Gọi ngay:</strong> Để được tư vấn và báo giá tủ lạnh của bạn!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleCall}
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all font-bold justify-center"
              >
                <Phone className="w-5 h-5" />
                0919.562.568
              </button>
              <button
                onClick={handleZalo}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all font-bold justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Chat Zalo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Các Loại Tủ Lạnh Thu Mua
          </h2>
          <p className="text-lg text-slate-600">Thu mua mọi loại tủ lạnh, mọi tình trạng với giá tốt nhất</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-blue-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{type.name}</h3>
                  <p className="text-slate-600 mb-2">{type.desc}</p>
                  <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    <DollarSign className="w-4 h-4" />
                    {type.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conditions Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
            Thu Mua Mọi Tình Trạng
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 text-lg">{condition}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
            <p className="text-slate-700 text-lg mb-4">
              <strong className="text-blue-600">Không chắc tủ lạnh của bạn còn giá trị?</strong>
              <br />
              Gọi ngay để chúng tôi tư vấn miễn phí!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleCall}
                className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all font-bold text-lg justify-center"
              >
                <Phone className="w-5 h-5" />
                0919.562.568
              </button>
              <button
                onClick={handleZalo}
                className="flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-all font-bold text-lg justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Chat Zalo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Hình Ảnh Thực Tế
          </h2>
          <p className="text-lg text-slate-600">Những tủ lạnh chúng tôi đã thu mua từ khách hàng</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            '/images/tulanh1.png',
            '/images/tulanh6.jpg',
            '/images/tulanh5.png',
            '/images/tulanh7.jpg',
            '/images/z7820385613559_3eacdea9a25f53081e48c221da3984eb.jpg',
            '/images/tulanh8.webp',
            '/images/z7820385623047_c8867e931df54451f14f2ee960c8dd1a.jpg',
            '/images/tulanh3.webp',
          ].map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <Image
                src={image}
                alt={`Thu mua tủ lạnh ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-12 mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-300 fill-yellow-300" />
              ))}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Bạn Có Tủ Lạnh Cũ Cần Bán?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Liên hệ ngay để được định giá miễn phí và nhận giá tốt nhất!
              <br />
              <span className="font-bold text-white">Đến tận nơi • Vận chuyển miễn phí • Thanh toán ngay</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleCall}
                className="group flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-full hover:bg-blue-50 transition-all shadow-2xl transform hover:scale-105 text-xl font-bold w-full sm:w-auto justify-center"
              >
                <Phone className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                <span>0919.562.568</span>
              </button>
              <button
                onClick={handleZalo}
                className="group flex items-center gap-3 bg-green-500 text-white px-10 py-5 rounded-full hover:bg-green-600 transition-all shadow-2xl transform hover:scale-105 text-xl font-bold w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
                <span>Chat Zalo Ngay</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
