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
    '/images/bann1.jpg',
    '/images/z7820385601395_19c7302260aed622b241861b5127027a.jpg',
    '/images/z7820385604729_b5ac5cbfce2ad60dd77957eb91537934.jpg',
    '/images/z7820418298727_5168ba4b512c7f10442d9cccb44decb2.jpg',
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

      {/* I. Lợi Ích Của Việc Thu Mua Đồ Thanh Lý Cũ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              I. Lợi Ích Của Việc Thu Mua Đồ Thanh Lý Cũ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bán đồ cũ không chỉ giúp bạn thu lại tiền mà còn mang lại nhiều lợi ích khác
            </p>
          </div>
          
          {/* Tiết Kiệm Chi Phí */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">1. Tiết Kiệm Chi Phí</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Giá cả phải chăng:</p>
                    <p className="text-gray-600">Mua đồ cũ giúp bạn tiết kiệm đáng kể chi phí so với việc mua đồ mới.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Giá trị sử dụng cao:</p>
                    <p className="text-gray-600">Nhiều món đồ cũ vẫn còn tốt và có giá trị sử dụng lâu dài, giúp bạn tiết kiệm mà không làm giảm chất lượng cuộc sống.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/z7820385569389_2fd7298c2a7516caa686ec5cc22c18d8.jpg"
                  alt="Tiết kiệm chi phí"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Bảo Vệ Môi Trường */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/z7820385575535_671afa6b62a86b35afaf3a99609fcc96.jpg"
                  alt="Bảo vệ môi trường"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">2. Bảo Vệ Môi Trường</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Giảm lượng rác thải:</p>
                    <p className="text-gray-600">Tái sử dụng đồ cũ giúp giảm thiểu lượng rác thải, góp phần bảo vệ môi trường.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Tiết kiệm tài nguyên:</p>
                    <p className="text-gray-600">Giảm nhu cầu sản xuất mới, bảo vệ tài nguyên thiên nhiên và giảm khí thải carbon.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Đa Dạng Lựa Chọn */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">3. Đa Dạng Lựa Chọn</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Nhiều sản phẩm độc đáo:</p>
                    <p className="text-gray-600">Bạn có thể tìm thấy những món đồ độc đáo, hiếm có mà không dễ dàng tìm thấy ở các cửa hàng bán đồ mới.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Phong phú về chủng loại:</p>
                    <p className="text-gray-600">Từ đồ gia dụng, nội thất đến đồ điện tử và máy phòng, đồ cũ mang đến cho bạn nhiều lựa chọn phong phú.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/z7820385581855_cfd13ca54fab17b4a90d5d3c01771803.jpg"
                  alt="Đa dạng lựa chọn"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* II. Quy Trình Thu Mua Đồ Cũ Của Chúng Tôi */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              II. Quy Trình Thu Mua Đồ Cũ Của Chúng Tôi
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Thu Mua Đồ Cũ Thanh Phát cung cấp dịch vụ thu mua và thanh lý đồ cũ nhà hàng, quán ăn chuyên nghiệp tại Hà Nội. Chúng tôi cam kết mang đến cho khách hàng trải nghiệm tốt nhất với quy trình làm việc minh bạch và chuyên nghiệp.
            </p>
          </div>
          
          {/* Bước 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#51a2ff] to-[#3b8eef] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl font-bold text-white">01</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Liên Hệ và Tư Vấn</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Khách hàng liên hệ với chúng tôi qua số điện thoại <span className="font-bold text-[#51a2ff]">0919.562.568</span> để được tư vấn thoại. Nhân viên chuyên nghiệp của Thanh Phát sẽ đến tận nơi để khảo sát tình trạng và đánh giá giá trị của các món đồ cần thanh lý.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/z7820385582746_b3e210f02d3833016a74d7a9248a5c5a.jpg"
                  alt="Liên hệ và tư vấn"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Bước 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/z7820385588253_d8f26d37af7b05dacb08086c5cb456d9.jpg"
                  alt="Khảo sát và đánh giá"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#51a2ff] to-[#3b8eef] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl font-bold text-white">02</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Khảo Sát và Đánh Giá</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Nhân viên chuyên nghiệp của Thanh Phát sẽ đến tận nơi để khảo sát tình trạng và đánh giá giá trị của các món đồ cần thanh lý.
              </p>
            </div>
          </div>

          {/* Bước 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#51a2ff] to-[#3b8eef] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl font-bold text-white">03</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Thỏa Thuận và Ký Kết Hợp Đồng</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Sau khi thống nhất về giá cả, hai bên sẽ tiến hành ký kết hợp đồng mua bán. Hợp đồng sẽ ghi rõ các điều khoản và điều kiện để đảm bảo quyền lợi cho cả hai bên.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/z7820385590552_23391ae8f04cf543ca3480bb652711a4.jpg"
                  alt="Thỏa thuận và ký kết"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Bước 4 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/z7820385599894_694c988967a17bf0c828d5d78d3573a0.jpg"
                  alt="Thanh toán và vận chuyển"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#51a2ff] to-[#3b8eef] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl font-bold text-white">04</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Thanh Toán và Vận Chuyển</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Đồng ý về giá, chúng tôi sẽ thanh toán ngay tại chỗ bằng tiền mặt hoặc chuyển khoản. Sau đó, đội ngũ của chúng tôi sẽ tiến hành vận chuyển đồ về kho một cách nhanh chóng và an toàn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* III. Các Mặt Hàng Thu Mua */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              III. Các Mặt Hàng Thu Mua
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chúng tôi thu mua đa dạng các loại mặt hàng với giá cạnh tranh nhất
            </p>
          </div>
          
          {/* Điều Hòa */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Wind className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Thu Mua Điều Hòa Cũ</h3>
                  <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    <DollarSign className="w-4 h-4" />
                    Từ 500k - 15tr
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Chúng tôi chuyên thu mua các loại điều hòa cũ các thương hiệu: Daikin, Panasonic, Mitsubishi, LG, Samsung, Toshiba... Dù là điều hòa 1 chiều, 2 chiều, inverter hay thường, chúng tôi đều thu mua với giá cao nhất thị trường.
              </p>
              <Link
                href="/thu-mua-dieu-hoa"
                className="inline-flex items-center gap-2 text-[#51a2ff] font-semibold hover:gap-3 transition-all"
              >
                <span>Xem chi tiết</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/z7820418281307_11db5258e614d186c930c27d04ca4f22.jpg"
                  alt="Thu mua điều hòa cũ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Tủ Lạnh */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/tulanh4.jpg"
                  alt="Thu mua tủ lạnh cũ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Refrigerator className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Thu Mua Tủ Lạnh Cũ</h3>
                  <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    <DollarSign className="w-4 h-4" />
                    Từ 300k - 20tr
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Thu mua tủ lạnh các hãng: Samsung, LG, Panasonic, Toshiba, Hitachi, Sharp... Tủ lạnh mini, tủ lạnh gia đình, tủ lạnh side by side, tủ lạnh inverter - tất cả đều được thu mua với giá tốt nhất.
              </p>
              <Link
                href="/thu-mua-tu-lanh"
                className="inline-flex items-center gap-2 text-[#51a2ff] font-semibold hover:gap-3 transition-all"
              >
                <span>Xem chi tiết</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Máy Giặt */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <WashingMachine className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Thu Mua Máy Giặt Cũ</h3>
                  <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    <DollarSign className="w-4 h-4" />
                    Từ 200k - 10tr
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Chuyên thu mua máy giặt cũ: Electrolux, Samsung, LG, Aqua, Toshiba, Panasonic... Máy giặt cửa trên, cửa ngang, máy giặt sấy - chúng tôi thu mua tất cả với giá cao.
              </p>
              <Link
                href="/lien-he"
                className="inline-flex items-center gap-2 text-[#51a2ff] font-semibold hover:gap-3 transition-all"
              >
                <span>Liên hệ ngay</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/z7820385632131_a28b703d2f5baf9b6fb72476a0059e0c.jpg"
                  alt="Thu mua máy giặt cũ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Điện Tử & Công Nghệ */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/congnghe.jpg"
                  alt="Thu mua điện tử"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Laptop className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Thu Mua Điện Tử & Công Nghệ</h3>
                  <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    <DollarSign className="w-4 h-4" />
                    Từ 100k - 50tr
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Thu mua điện thoại (iPhone, Samsung, Oppo, Xiaomi...), laptop (Macbook, Dell, HP, Asus, Lenovo...), tivi, loa, amply và các thiết bị điện tử khác. Giá thu mua cạnh tranh, thanh toán nhanh chóng.
              </p>
              <Link
                href="/lien-he"
                className="inline-flex items-center gap-2 text-[#51a2ff] font-semibold hover:gap-3 transition-all"
              >
                <span>Liên hệ ngay</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IV. Cam Kết Của Thu Mua Đồ Cũ */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              IV. Cam Kết Của Thu Mua Đồ Cũ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến dịch vụ tốt nhất với giá trị cao nhất cho khách hàng
            </p>
          </div>
          
          {/* Giá Cao Nhất */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Giá Cao Nhất Thị Trường</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Chúng tôi cam kết mua với giá cao hơn thị trường 10-20%. Định giá công khai, minh bạch, không có chi phí phát sinh. Bạn sẽ nhận được mức giá tốt nhất cho đồ cũ của mình.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Định giá miễn phí, không mất phí khảo sát</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Giá cả cạnh tranh nhất khu vực Hà Nội</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Thanh toán ngay tại chỗ bằng tiền mặt</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/z7820385610885_86571c1fa99c92720b11574a193586a5.jpg"
                  alt="Giá cao nhất"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Nhanh Chóng & Uy Tín */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/z7820385569389_2fd7298c2a7516caa686ec5cc22c18d8.jpg"
                  alt="Nhanh chóng uy tín"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Nhanh Chóng & Uy Tín</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Đến tận nơi trong vòng 30 phút sau khi nhận cuộc gọi. Hơn 15 năm kinh nghiệm trong lĩnh vực thu mua đồ cũ với hơn 10,000+ khách hàng tin tưởng. Đội ngũ nhân viên chuyên nghiệp, nhiệt tình.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Phục vụ 24/7, kể cả ngày lễ tết</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Đội ngũ vận chuyển chuyên nghiệp</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Xử lý nhanh gọn, không làm phiền</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Minh Bạch & An Toàn */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Minh Bạch & An Toàn</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Quy trình làm việc rõ ràng, minh bạch. Ký hợp đồng đảm bảo quyền lợi cho cả hai bên. Bảo mật thông tin khách hàng tuyệt đối. Không phát sinh chi phí ẩn.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Hợp đồng mua bán rõ ràng, minh bạch</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Bảo mật thông tin khách hàng 100%</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Đội ngũ được đào tạo bài bản, chuyên nghiệp</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/z7820385613559_3eacdea9a25f53081e48c221da3984eb.jpg"
                  alt="Minh bạch an toàn"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
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
