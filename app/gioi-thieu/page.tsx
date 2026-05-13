'use client';

import { Phone, MessageCircle, Award, Users, Clock, TrendingUp, Shield, Heart, CheckCircle, MapPin, Star, Zap } from 'lucide-react';
import Image from 'next/image';

export default function GioiThieu() {
  const handleCall = () => {
    window.location.href = 'tel:0919562568';
  };

  const handleZalo = () => {
    window.open('https://zalo.me/0919562568', '_blank');
  };

  const stats = [
    { icon: Users, number: '10,000+', label: 'Khách hàng tin tưởng' },
    { icon: Award, number: '15+', label: 'Năm kinh nghiệm' },
    { icon: Clock, number: '24/7', label: 'Hỗ trợ khách hàng' },
    { icon: TrendingUp, number: '98%', label: 'Khách hàng hài lòng' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Uy Tín Hàng Đầu',
      desc: 'Chúng tôi cam kết mua đúng giá, thanh toán ngay lập tức và minh bạch trong mọi giao dịch.',
    },
    {
      icon: Heart,
      title: 'Tận Tâm Phục Vụ',
      desc: 'Đội ngũ nhân viên chuyên nghiệp, nhiệt tình, luôn đặt lợi ích khách hàng lên hàng đầu.',
    },
    {
      icon: TrendingUp,
      title: 'Giá Cao Nhất',
      desc: 'Cam kết mua với giá cao nhất thị trường, định giá công bằng và hợp lý.',
    },
  ];

  const services = [
    'Thu mua điều hòa các loại: 1 chiều, 2 chiều, inverter',
    'Thu mua tủ lạnh: mini, gia đình, side by side',
    'Thu mua máy giặt: cửa trên, cửa ngang, máy sấy',
    'Thu mua điện thoại, laptop, tivi và thiết bị điện tử',
    'Thu mua đồ gia dụng, nội thất cũ',
    'Thu mua thanh lý văn phòng, nhà hàng, khách sạn',
  ];

  const locations = [
    { name: 'Cơ Sở 1', address: '302 Dương Văn Bé, Hà Nội', area: 'Quận Hai Bà Trưng' },
    { name: 'Cơ Sở 2', address: 'Nhà số 50 ngõ 46 Quan Nhân', area: 'Quận Thanh Xuân' },
    { name: 'Cơ Sở 3', address: 'Số 58 Xuân Đỉnh', area: 'Quận Bắc Từ Liêm' },
    { name: 'Cơ Sở 4', address: 'Ngõ 268 nhà số 6 Nguyễn Văn Cừ', area: 'Quận Long Biên' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Về Chúng Tôi
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Phú Gia - Thu Mua Đồ Cũ Hà Nội
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            Với hơn 15 năm kinh nghiệm trong lĩnh vực thu mua đồ cũ, chúng tôi tự hào là đơn vị uy tín hàng đầu tại Hà Nội
          </p>
          
          {/* Contact Highlight */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 shadow-2xl mb-8">
            <p className="text-white text-lg mb-4 font-semibold">Liên hệ ngay để được tư vấn miễn phí!</p>
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

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-blue-100 text-center"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
              <p className="text-slate-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Câu Chuyện Của Chúng Tôi
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-800">Phú Gia - Thu Mua Đồ Cũ Hà Nội</strong> được thành lập từ năm 2010 với mục tiêu mang đến dịch vụ thu mua đồ cũ chuyên nghiệp, uy tín và giá cao nhất thị trường.
                </p>
                <p>
                  Qua hơn 15 năm hoạt động, chúng tôi đã phục vụ hơn 10,000 khách hàng trên khắp Hà Nội, từ các hộ gia đình đến các doanh nghiệp lớn. Sự tin tưởng của khách hàng chính là động lực để chúng tôi không ngừng phát triển và hoàn thiện dịch vụ.
                </p>
                <p>
                  Với đội ngũ nhân viên giàu kinh nghiệm, am hiểu thị trường và luôn cập nhật giá cả mới nhất, chúng tôi cam kết mang đến cho khách hàng trải nghiệm tốt nhất khi sử dụng dịch vụ thu mua đồ cũ.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/z7820385569389_2fd7298c2a7516caa686ec5cc22c18d8.jpg"
                  alt="Thu mua đồ cũ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/z7820385575535_671afa6b62a86b35afaf3a99609fcc96.jpg"
                  alt="Thu mua đồ cũ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/z7820385581855_cfd13ca54fab17b4a90d5d3c01771803.jpg"
                  alt="Thu mua đồ cũ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/z7820385582746_b3e210f02d3833016a74d7a9248a5c5a.jpg"
                  alt="Thu mua đồ cũ"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Additional Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/z7820385588253_d8f26d37af7b05dacb08086c5cb456d9.jpg"
                alt="Dịch vụ thu mua"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/z7820385590552_23391ae8f04cf543ca3480bb652711a4.jpg"
                alt="Dịch vụ thu mua"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/z7820385599894_694c988967a17bf0c828d5d78d3573a0.jpg"
                alt="Dịch vụ thu mua"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/z7820385600109_936d5c52fb9382abf8f2f8cc19ddd97d.jpg"
                alt="Dịch vụ thu mua"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 text-lg">{service}</p>
              </div>
            ))}
          </div>
          
          {/* Contact CTA in Services */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200">
            <p className="text-center text-slate-700 text-lg mb-4">
              <strong className="text-blue-600">Hotline 24/7:</strong> Gọi ngay để được tư vấn và báo giá miễn phí!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleCall}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all font-bold justify-center"
              >
                <Phone className="w-5 h-5" />
                0919.562.568
              </button>
              <button
                onClick={handleZalo}
                className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all font-bold justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Chat Zalo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Giá Trị Cốt Lõi
          </h2>
          <p className="text-lg text-slate-600">Những giá trị chúng tôi luôn hướng tới</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-blue-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-blue-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{location.name}</h3>
                  <p className="text-slate-600 mb-1">{location.address}</p>
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {location.area}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Hình Ảnh Hoạt Động
          </h2>
          <p className="text-lg text-slate-600">Những hình ảnh thực tế về dịch vụ của chúng tôi</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            '/images/z7820385601395_19c7302260aed622b241861b5127027a.jpg',
            '/images/z7820385604729_b5ac5cbfce2ad60dd77957eb91537934.jpg',
            '/images/z7820385605838_db572f81db764994166a8dab8e283903.jpg',
            '/images/z7820385610885_86571c1fa99c92720b11574a193586a5.jpg',
            '/images/z7820385613559_3eacdea9a25f53081e48c221da3984eb.jpg',
            '/images/z7820385616565_32b967f0be1120ba66c5af902c1562dc.jpg',
            '/images/z7820385623047_c8867e931df54451f14f2ee960c8dd1a.jpg',
            '/images/z7820385632131_a28b703d2f5baf9b6fb72476a0059e0c.jpg',
          ].map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <Image
                src={image}
                alt={`Hoạt động ${index + 1}`}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sẵn Sàng Phục Vụ Bạn 24/7
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Liên hệ ngay với chúng tôi để được tư vấn và định giá miễn phí!
              <br />
              <span className="font-bold text-white">Đến tận nơi • Thanh toán ngay • Giá cao nhất</span>
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
