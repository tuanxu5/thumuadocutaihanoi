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
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className="w-full h-64 md:h-80 relative overflow-hidden">
        <Image
          src="/sub-banner.jpg"
          alt="Giới Thiệu - Phú Gia"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Giới Thiệu Về Phú Gia
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Hơn 15 năm kinh nghiệm trong lĩnh vực thu mua đồ cũ tại Hà Nội
              <br />
              Uy tín - Chuyên nghiệp - Giá cao nhất thị trường
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 text-center"
            >
              <div className="w-12 h-12 bg-[#155C8A] rounded-lg flex items-center justify-center mb-3 mx-auto">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Câu Chuyện Của Chúng Tôi
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Phú Gia - Thu Mua Đồ Cũ Hà Nội</strong> được thành lập từ năm 2010 với mục tiêu mang đến dịch vụ thu mua đồ cũ chuyên nghiệp, uy tín và giá cao nhất thị trường.
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
              <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/images/z7820385569389_2fd7298c2a7516caa686ec5cc22c18d8.jpg"
                  alt="Thu mua đồ cũ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/images/z7820385575535_671afa6b62a86b35afaf3a99609fcc96.jpg"
                  alt="Thu mua đồ cũ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/images/z7820385581855_cfd13ca54fab17b4a90d5d3c01771803.jpg"
                  alt="Thu mua đồ cũ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-200">
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

        {/* Values Section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
            Giá Trị Cốt Lõi
          </h2>
          <p className="text-gray-600 text-center mb-6">Những giá trị chúng tôi luôn hướng tới</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <div className="w-12 h-12 bg-[#155C8A] rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#155C8A] rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Sẵn Sàng Phục Vụ Bạn
          </h2>
          <p className="text-white/90 mb-6">
            Liên hệ ngay với chúng tôi để được tư vấn và định giá miễn phí!
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
