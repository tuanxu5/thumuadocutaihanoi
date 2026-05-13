'use client';

import { Phone, MessageCircle, Award, Users, Clock, TrendingUp, Shield, Heart } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Về Chúng Tôi
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Thu Mua Đồ Cũ Hà Nội
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            Với hơn 15 năm kinh nghiệm trong lĩnh vực thu mua đồ cũ, chúng tôi tự hào là đơn vị uy tín hàng đầu tại Hà Nội
          </p>
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
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Câu Chuyện Của Chúng Tôi
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-800">Thu Mua Đồ Cũ Hà Nội</strong> được thành lập từ năm 2010 với mục tiêu mang đến dịch vụ thu mua đồ cũ chuyên nghiệp, uy tín và giá cao nhất thị trường.
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

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sẵn Sàng Phục Vụ Bạn
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Liên hệ ngay với chúng tôi để được tư vấn và định giá miễn phí!
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
