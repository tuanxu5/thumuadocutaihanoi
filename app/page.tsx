'use client';

import { Phone, MessageCircle, MapPin, Clock, CheckCircle, DollarSign, Zap, Shield, Award, TrendingUp, Users, Star, ArrowRight, Wind, Refrigerator, Smartphone, Laptop, Tv, WashingMachine } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const handleCall = () => {
    window.location.href = 'tel:0919562568';
  };

  const handleZalo = () => {
    window.open('https://zalo.me/0919562568', '_blank');
  };

  const services = [
    { 
      icon: Wind, 
      title: 'Điều Hòa', 
      desc: 'Daikin, Panasonic, Mitsubishi, LG...',
      price: 'Từ 500k - 15tr',
      link: '/thu-mua-dieu-hoa'
    },
    { 
      icon: Refrigerator, 
      title: 'Tủ Lạnh', 
      desc: 'Samsung, LG, Panasonic, Toshiba...',
      price: 'Từ 300k - 20tr',
      link: '/thu-mua-tu-lanh'
    },
    { 
      icon: WashingMachine, 
      title: 'Máy Giặt', 
      desc: 'Electrolux, Samsung, LG, Aqua...',
      price: 'Từ 200k - 10tr',
      link: '/lien-he'
    },
    { 
      icon: Smartphone, 
      title: 'Điện Thoại', 
      desc: 'iPhone, Samsung, Oppo, Xiaomi...',
      price: 'Từ 100k - 30tr',
      link: '/lien-he'
    },
    { 
      icon: Laptop, 
      title: 'Laptop', 
      desc: 'Macbook, Dell, HP, Asus, Lenovo...',
      price: 'Từ 500k - 50tr',
      link: '/lien-he'
    },
    { 
      icon: Tv, 
      title: 'Tivi & Điện Tử', 
      desc: 'Smart TV, loa, amply, đầu karaoke...',
      price: 'Từ 300k - 25tr',
      link: '/lien-he'
    },
  ];

  const benefits = [
    { 
      icon: DollarSign, 
      title: 'Giá Cao Nhất', 
      desc: 'Cam kết mua với giá cao hơn thị trường 10-20%',
      color: 'from-[#51a2ff] to-[#3b8eef]'
    },
    { 
      icon: Zap, 
      title: 'Nhanh Chóng', 
      desc: 'Đến tận nơi trong 30 phút, xử lý ngay',
      color: 'from-[#51a2ff] to-[#3b8eef]'
    },
    { 
      icon: Shield, 
      title: 'Uy Tín', 
      desc: 'Hơn 15 năm kinh nghiệm, 10,000+ khách hàng',
      color: 'from-[#51a2ff] to-[#3b8eef]'
    },
    { 
      icon: CheckCircle, 
      title: 'Minh Bạch', 
      desc: 'Định giá công khai, thanh toán ngay tại chỗ',
      color: 'from-[#51a2ff] to-[#3b8eef]'
    },
  ];

  const stats = [
    { icon: Users, number: '10,000+', label: 'Khách hàng' },
    { icon: Award, number: '15+', label: 'Năm kinh nghiệm' },
    { icon: Star, number: '4.9/5', label: 'Đánh giá' },
    { icon: TrendingUp, number: '98%', label: 'Hài lòng' },
  ];

  const locations = [
    { name: 'Cơ Sở 1', address: '302 Dương Văn Bé, Hà Nội', area: 'Quận Hai Bà Trưng' },
    { name: 'Cơ Sở 2', address: 'Nhà số 50 ngõ 46 Quan Nhân', area: 'Quận Thanh Xuân' },
    { name: 'Cơ Sở 3', address: 'Số 58 Xuân Đỉnh', area: 'Quận Bắc Từ Liêm' },
    { name: 'Cơ Sở 4', address: 'Ngõ 268 nhà số 6 Nguyễn Văn Cừ', area: 'Quận Long Biên' },
  ];

  const process = [
    { step: '01', title: 'Liên Hệ', desc: 'Gọi điện hoặc nhắn Zalo cho chúng tôi', icon: Phone },
    { step: '02', title: 'Đến Tận Nơi', desc: 'Nhân viên đến kiểm tra trong 30 phút', icon: MapPin },
    { step: '03', title: 'Định Giá', desc: 'Báo giá miễn phí, công khai minh bạch', icon: DollarSign },
    { step: '04', title: 'Thanh Toán', desc: 'Đồng ý giá, thanh toán ngay tại chỗ', icon: CheckCircle },
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

  const testimonials = [
    { name: 'Anh Minh', location: 'Cầu Giấy', rating: 5, text: 'Dịch vụ tốt, giá cao hơn mấy chỗ khác. Nhân viên nhiệt tình, chuyên nghiệp.' },
    { name: 'Chị Hương', location: 'Thanh Xuân', rating: 5, text: 'Thu mua điều hòa cũ giá rất tốt. Đến nhanh, thanh toán ngay, rất hài lòng!' },
    { name: 'Anh Tuấn', location: 'Hai Bà Trưng', rating: 5, text: 'Mình đã bán tủ lạnh và máy giặt, giá cao hơn dự tính. Sẽ giới thiệu cho bạn bè.' },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#51a2ff] via-[#3b8eef] to-[#2a7edf] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
              <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span className="text-sm font-semibold">Dịch vụ thu mua đồ cũ uy tín #1 tại Hà Nội</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Phú Gia
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Thu Mua Đồ Cũ Hà Nội
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Chuyên thu mua điều hòa, tủ lạnh, máy giặt, điện thoại, laptop và các đồ gia dụng cũ
              <br className="hidden md:block" />
              <span className="font-semibold text-white">Đến tận nơi • Định giá miễn phí • Thanh toán ngay</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={handleCall}
                className="group flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 text-lg font-bold w-full sm:w-auto justify-center"
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>0919.562.568</span>
              </button>
              <button
                onClick={handleZalo}
                className="group flex items-center gap-3 bg-white text-[#51a2ff] px-8 py-4 rounded-full hover:bg-blue-50 transition-all shadow-2xl hover:shadow-white/50 transform hover:scale-105 text-lg font-bold w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Chat Zalo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Tại Sao Chọn Chúng Tôi?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến dịch vụ tốt nhất với giá trị cao nhất cho khách hàng
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Dịch Vụ Thu Mua
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chúng tôi thu mua đa dạng các loại mặt hàng với giá cạnh tranh nhất
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{service.desc}</p>
                    <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      <DollarSign className="w-4 h-4" />
                      {service.price}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#51a2ff] font-semibold group-hover:gap-3 transition-all">
                  <span>Xem chi tiết</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Quy Trình Thu Mua
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Đơn giản, nhanh chóng chỉ với 4 bước
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-[#51a2ff]/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Hình Ảnh Thực Tế
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những sản phẩm chúng tôi đã thu mua từ khách hàng
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <Image
                  src={image}
                  alt={`Thu mua đồ cũ ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Khách Hàng Nói Gì?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hàng nghìn khách hàng đã tin tưởng và hài lòng với dịch vụ của chúng tôi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#51a2ff] to-[#3b8eef] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Hệ Thống Cơ Sở
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              4 cơ sở tại Hà Nội, sẵn sàng phục vụ bạn mọi lúc mọi nơi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#51a2ff] to-[#3b8eef] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{location.name}</h3>
                    <p className="text-gray-600 mb-1">{location.address}</p>
                    <span className="inline-block bg-[#51a2ff]/10 text-[#51a2ff] px-3 py-1 rounded-full text-sm font-semibold">
                      {location.area}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-[#51a2ff] via-[#3b8eef] to-[#2a7edf] rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-300 fill-yellow-300" />
                ))}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Bạn Có Đồ Cũ Cần Bán?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Liên hệ ngay với chúng tôi để được định giá miễn phí và nhận giá tốt nhất!
                <br />
                <span className="font-semibold text-white">Đến tận nơi • Thanh toán ngay • Không mất phí</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleCall}
                  className="group flex items-center gap-3 bg-white text-[#51a2ff] px-8 py-4 rounded-full hover:bg-blue-50 transition-all shadow-2xl hover:shadow-white/50 transform hover:scale-105 text-lg font-bold w-full sm:w-auto justify-center"
                >
                  <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  <span>0919.562.568</span>
                </button>
                <button
                  onClick={handleZalo}
                  className="group flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 text-lg font-bold w-full sm:w-auto justify-center"
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>Chat Zalo Ngay</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours Banner */}
      <section className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#51a2ff] rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-lg">Giờ Làm Việc</p>
                <p className="text-gray-300">8:00 - 20:00 (Cả tuần, kể cả lễ tết)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-lg">Hotline 24/7</p>
                <p className="text-2xl font-bold text-[#51a2ff]">0919.562.568</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
