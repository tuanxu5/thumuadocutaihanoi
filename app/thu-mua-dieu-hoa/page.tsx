'use client';

import { Phone, MessageCircle, Wind, CheckCircle, DollarSign, Clock, Wrench, Star, Shield, Zap } from 'lucide-react';
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
    'Toshiba', 'Gree', 'Midea', 'Casper', 'Electrolux',
    'Hitachi', 'Sharp', 'Fujitsu', 'Carrier', 'Nagakawa'
  ];

  const types = [
    { name: 'Điều hòa 1 chiều', desc: 'Chỉ làm lạnh, công suất từ 9.000 - 24.000 BTU', price: '500k - 8tr' },
    { name: 'Điều hòa 2 chiều', desc: 'Làm lạnh và sưởi ấm, mọi công suất', price: '800k - 15tr' },
    { name: 'Điều hòa Inverter', desc: 'Tiết kiệm điện, vận hành êm ái', price: '1tr - 12tr' },
    { name: 'Điều hòa Multi', desc: 'Hệ thống multi dàn nóng, nhiều dàn lạnh', price: '2tr - 20tr' },
    { name: 'Điều hòa âm trần', desc: 'Cassette, âm trần công suất lớn', price: '3tr - 25tr' },
    { name: 'Điều hòa tủ đứng', desc: 'Cabinet, công suất lớn cho văn phòng', price: '5tr - 30tr' },
  ];

  const benefits = [
    { icon: DollarSign, title: 'Giá Cao Nhất', desc: 'Cam kết mua với giá cao hơn thị trường 10-20%' },
    { icon: Clock, title: 'Nhanh Chóng', desc: 'Đến tận nơi trong 30 phút, xử lý nhanh gọn' },
    { icon: Wrench, title: 'Tháo Lắp Miễn Phí', desc: 'Đội ngũ kỹ thuật chuyên nghiệp, tháo máy miễn phí' },
    { icon: Shield, title: 'Uy Tín', desc: 'Hơn 15 năm kinh nghiệm, 10,000+ khách hàng tin tưởng' },
  ];

  const conditions = [
    'Điều hòa còn hoạt động tốt',
    'Điều hòa hoạt động yếu, kém lạnh',
    'Điều hòa hỏng, không hoạt động',
    'Điều hòa cũ, đã qua sử dụng lâu năm',
    'Điều hòa thanh lý văn phòng, khách sạn',
    'Điều hòa mất gas, cần bảo trì',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl">
            <Wind className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Thu Mua Điều Hòa Cũ
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Giá Cao - Tháo Lắp Miễn Phí
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            Chúng tôi thu mua mọi loại điều hòa cũ, hỏng, các thương hiệu nổi tiếng
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
                  <strong className="text-slate-800">Phú Gia - Thu Mua Điều Hòa Cũ</strong> là đơn vị chuyên nghiệp với hơn 15 năm kinh nghiệm trong lĩnh vực thu mua điều hòa cũ tại Hà Nội.
                </p>
                <p>
                  Chúng tôi cam kết mua với <strong className="text-blue-600">giá cao nhất thị trường</strong>, đến tận nơi trong 30 phút, tháo lắp miễn phí và thanh toán ngay tại chỗ bằng tiền mặt.
                </p>
                <p>
                  Đội ngũ kỹ thuật viên giàu kinh nghiệm, am hiểu về các dòng điều hòa, đảm bảo định giá chính xác và công bằng nhất cho khách hàng.
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
                  src="/images/z7820385588253_d8f26d37af7b05dacb08086c5cb456d9.jpg"
                  alt="Thu mua điều hòa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/z7820385590552_23391ae8f04cf543ca3480bb652711a4.jpg"
                  alt="Thu mua điều hòa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/z7820385599894_694c988967a17bf0c828d5d78d3573a0.jpg"
                  alt="Thu mua điều hòa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/anh3.jpg"
                  alt="Thu mua điều hòa"
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
            Chúng tôi thu mua tất cả các thương hiệu điều hòa nổi tiếng
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
              <strong className="text-green-600">Gọi ngay:</strong> Để được tư vấn và báo giá điều hòa của bạn!
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
            Các Loại Điều Hòa Thu Mua
          </h2>
          <p className="text-lg text-slate-600">Thu mua mọi loại điều hòa, mọi tình trạng với giá tốt nhất</p>
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
              <strong className="text-blue-600">Không chắc điều hòa của bạn còn giá trị?</strong>
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
          <p className="text-lg text-slate-600">Những điều hòa chúng tôi đã thu mua từ khách hàng</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            '/images/z7820385569389_2fd7298c2a7516caa686ec5cc22c18d8.jpg',
            '/images/z7820385575535_671afa6b62a86b35afaf3a99609fcc96.jpg',
            '/images/z7820385581855_cfd13ca54fab17b4a90d5d3c01771803.jpg',
            '/images/z7820385582746_b3e210f02d3833016a74d7a9248a5c5a.jpg',
            '/images/z7820385601395_19c7302260aed622b241861b5127027a.jpg',
            '/images/z7820385604729_b5ac5cbfce2ad60dd77957eb91537934.jpg',
            '/images/z7820385605838_db572f81db764994166a8dab8e283903.jpg',
            '/images/z7820385610885_86571c1fa99c92720b11574a193586a5.jpg',
          ].map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <Image
                src={image}
                alt={`Thu mua điều hòa ${index + 1}`}
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
              Bạn Có Điều Hòa Cũ Cần Bán?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Liên hệ ngay để được định giá miễn phí và nhận giá tốt nhất!
              <br />
              <span className="font-bold text-white">Đến tận nơi • Tháo lắp miễn phí • Thanh toán ngay</span>
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
