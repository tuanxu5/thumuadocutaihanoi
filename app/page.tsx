'use client';

import { Phone, MessageCircle, MapPin, Clock, CheckCircle } from 'lucide-react';
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
      image: '/images/cate/dieuhoa.jpeg',
      title: 'Điều Hòa', 
      desc: 'Daikin, Panasonic, Mitsubishi, LG...',
      link: '/thu-mua-dieu-hoa'
    },
    { 
      image: '/images/cate/tulanh.jpeg',
      title: 'Tủ Lạnh', 
      desc: 'Samsung, LG, Panasonic, Toshiba...',
      link: '/thu-mua-tu-lanh'
    },
    { 
      image: '/images/cate/maygiat.jpeg',
      title: 'Máy Giặt', 
      desc: 'Electrolux, Samsung, LG, Aqua...',
      link: '/lien-he'
    },
    { 
      image: '/images/cate/tivi.jpg',
      title: 'Tivi & Điện Tử', 
      desc: 'Smart TV, loa, amply, đầu karaoke...',
      link: '/lien-he'
    },
    { 
      image: '/images/cate/tubep.jpg',
      title: 'Tủ Bếp', 
      desc: 'Tủ bếp gỗ, tủ bếp inox, tủ bếp cũ...',
      link: '/lien-he'
    },
    { 
      image: '/images/cate/sango.jpg',
      title: 'Sàn Gỗ', 
      desc: 'Sàn gỗ công nghiệp, sàn gỗ tự nhiên...',
      link: '/lien-he'
    },
    { 
      image: '/images/cate/chaurua.jpg',
      title: 'Chậu Rửa', 
      desc: 'Chậu rửa inox, chậu rửa đá, lavabo...',
      link: '/lien-he'
    },
  ];

  const benefits = [
    { image: '/images/z7820385569389_2fd7298c2a7516caa686ec5cc22c18d8.jpg', title: 'Giá Cao Nhất', desc: 'Cam kết mua với giá cao hơn thị trường' },
    { image: '/images/z7820385575535_671afa6b62a86b35afaf3a99609fcc96.jpg', title: 'Nhanh Chóng', desc: 'Đến tận nơi trong 30 phút, xử lý ngay' },
    { image: '/images/z7820385581855_cfd13ca54fab17b4a90d5d3c01771803.jpg', title: 'Uy Tín', desc: 'Hơn 15 năm kinh nghiệm, 10,000+ khách hàng' },
    { image: '/images/z7820385582746_b3e210f02d3833016a74d7a9248a5c5a.jpg', title: 'Minh Bạch', desc: 'Định giá công khai, thanh toán ngay' },
  ];

  const locations = [
    { name: 'Cơ Sở 1', address: '302 Dương Văn Bé, Hà Nội' },
    { name: 'Cơ Sở 2', address: 'Nhà số 50 ngõ 46 Quan Nhân, Hà Nội' },
    { name: 'Cơ Sở 3', address: 'Số 58 Xuân Đỉnh, Hà Nội' },
    { name: 'Cơ Sở 4', address: 'Ngõ 268 nhà số 6 Nguyễn Văn Cừ, Hà Nội' },
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
      <section className="relative w-full">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
          <Image
            src="/banner.png"
            alt="Phú Gia - Thu Mua Đồ Cũ Hà Nội"
            fill
            className="object-fill"
            priority
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 text-gray-900">
            Tại Sao Chọn Chúng Tôi?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[#155C8A] transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Phone number badge */}
                  <div className="absolute top-2 right-2 bg-[#155C8A] text-white px-2 py-1 rounded text-xs md:text-sm font-bold shadow-lg flex items-center gap-1">
                    <Phone className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="hidden sm:inline">0919.562.568</span>
                    <span className="sm:hidden">Gọi ngay</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 text-gray-900">
            Dịch Vụ Thu Mua
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[#155C8A] transition-colors group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                  {/* Phone number badge */}
                  <div className="absolute top-2 right-2 bg-[#155C8A] text-white px-2 py-1 rounded text-xs md:text-sm font-bold shadow-lg flex items-center gap-1">
                    <Phone className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="hidden sm:inline">0919.562.568</span>
                    <span className="sm:hidden">Gọi ngay</span>
                  </div>
                </div>
                <div className="p-3 md:p-4 text-center">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 text-gray-900">
            Hình Ảnh Thực Tế
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 group"
              >
                <Image
                  src={image}
                  alt={`Thu mua đồ cũ ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                {/* Phone number badge */}
                <div className="absolute top-2 right-2 bg-[#155C8A] text-white px-2 py-1 rounded text-xs md:text-sm font-bold shadow-lg flex items-center gap-1">
                  <Phone className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">0919.562.568</span>
                  <span className="sm:hidden">Gọi ngay</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 text-gray-900">
            Quy Trình Thanh Lý Thu Mua Đồ Cũ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-[#155C8A] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Liên Hệ</h3>
              <p className="text-gray-600 text-sm">Gọi điện hoặc nhắn Zalo cho chúng tôi</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-[#155C8A] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Đến Tận Nơi</h3>
              <p className="text-gray-600 text-sm">Nhân viên đến kiểm tra trong 30 phút</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-[#155C8A] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Định Giá</h3>
              <p className="text-gray-600 text-sm">Báo giá miễn phí, công khai minh bạch</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-[#155C8A] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-lg mb-2">Thanh Toán</h3>
              <p className="text-gray-600 text-sm">Đồng ý giá, thanh toán ngay tại chỗ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 text-gray-900">
            Cam Kết Của Chúng Tôi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-[#155C8A] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Uy Tín và Chuyên Nghiệp</h3>
                  <p className="text-gray-600 text-sm">Đảm bảo quy trình thu mua diễn ra minh bạch, nhanh chóng và hiệu quả.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-[#155C8A] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Giá Cả Hợp Lý</h3>
                  <p className="text-gray-600 text-sm">Đưa ra mức giá hợp lý, cạnh tranh, phù hợp với giá trị thực của sản phẩm.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-[#155C8A] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Hỗ Trợ Tận Tâm</h3>
                  <p className="text-gray-600 text-sm">Đội ngũ nhân viên nhiệt tình, sẵn sàng giải đáp mọi thắc mắc và hỗ trợ khách hàng mọi lúc, mọi nơi.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed mb-4">
              Với những ưu điểm vượt trội và quy trình làm việc chuyên nghiệp, dịch vụ thanh lý thu mua đồ cũ của chúng tôi đã và đang nhận được sự tin tưởng và ủng hộ từ đông đảo khách hàng tại Hà Nội.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Hãy liên hệ ngay với chúng tôi qua số điện thoại <a href="tel:0919562568" className="text-[#155C8A] font-bold hover:underline">0919.562.568</a> để được hỗ trợ và tư vấn miễn phí.
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Tin Tức
            </h2>
            <Link href="/tin-tuc" className="text-[#155C8A] hover:text-[#0f4a6f] font-semibold">
              Xem tất cả →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/tin-tuc" className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[#155C8A] transition-colors">
              <div className="relative aspect-video">
                <Image
                  src="/images/z7820385588253_d8f26d37af7b05dacb08086c5cb456d9.jpg"
                  alt="Bảng giá thu mua"
                  fill
                  className="object-cover"
                />
                {/* Phone number badge */}
                <div className="absolute top-2 right-2 bg-[#155C8A] text-white px-2 py-1 rounded text-xs md:text-sm font-bold shadow-lg flex items-center gap-1">
                  <Phone className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">0919.562.568</span>
                  <span className="sm:hidden">Gọi ngay</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Bảng Giá Thu Mua Điều Hòa Cũ Tháng 5/2026</h3>
                <p className="text-gray-600 text-sm line-clamp-2">Cập nhật bảng giá thu mua điều hòa cũ mới nhất tháng 5/2026...</p>
              </div>
            </Link>
            <Link href="/tin-tuc" className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[#155C8A] transition-colors">
              <div className="relative aspect-video">
                <Image
                  src="/images/z7820385601395_19c7302260aed622b241861b5127027a.jpg"
                  alt="Kinh nghiệm bán tủ lạnh"
                  fill
                  className="object-cover"
                />
                {/* Phone number badge */}
                <div className="absolute top-2 right-2 bg-[#155C8A] text-white px-2 py-1 rounded text-xs md:text-sm font-bold shadow-lg flex items-center gap-1">
                  <Phone className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">0919.562.568</span>
                  <span className="sm:hidden">Gọi ngay</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Kinh Nghiệm Bán Tủ Lạnh Cũ Giá Cao</h3>
                <p className="text-gray-600 text-sm line-clamp-2">Chia sẻ những kinh nghiệm giúp bạn bán tủ lạnh cũ với giá cao nhất...</p>
              </div>
            </Link>
            <Link href="/tin-tuc" className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[#155C8A] transition-colors">
              <div className="relative aspect-video">
                <Image
                  src="/images/z7820385590552_23391ae8f04cf543ca3480bb652711a4.jpg"
                  alt="Thương hiệu điều hòa"
                  fill
                  className="object-cover"
                />
                {/* Phone number badge */}
                <div className="absolute top-2 right-2 bg-[#155C8A] text-white px-2 py-1 rounded text-xs md:text-sm font-bold shadow-lg flex items-center gap-1">
                  <Phone className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">0919.562.568</span>
                  <span className="sm:hidden">Gọi ngay</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Top 5 Thương Hiệu Điều Hòa Giữ Giá Nhất</h3>
                <p className="text-gray-600 text-sm line-clamp-2">Những thương hiệu điều hòa nào giữ giá tốt nhất khi bán lại...</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 text-gray-900">
            Hệ Thống Cơ Sở
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#155C8A] flex-shrink-0 mt-1" />
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

      {/* CTA Section */}
      <section className="py-12 bg-[#155C8A]">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Bạn Có Đồ Cũ Cần Bán?
          </h2>
          <p className="text-lg mb-6">
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
      </section>
    </div>
  );
}
