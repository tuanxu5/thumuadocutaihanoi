'use client';

import { Phone, MessageCircle, Calendar, Tag, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function TinTuc() {
  const handleCall = () => {
    window.location.href = 'tel:0919562568';
  };

  const handleZalo = () => {
    window.open('https://zalo.me/0919562568', '_blank');
  };

  const articles = [
    {
      id: 1,
      title: 'Thu Mua Điều Hòa Cũ Giá Cao',
      excerpt: 'Thu mua điều hòa cũ các hãng Daikin, Panasonic, Mitsubishi, LG, Samsung. Tháo lắp miễn phí, thanh toán ngay',
      image: '/images/z7820385588253_d8f26d37af7b05dacb08086c5cb456d9.jpg',
      date: '13/05/2026',
      category: 'Thu Mua',
    },
    {
      id: 2,
      title: 'Thu Mua Tủ Lạnh Cũ Giá Cao',
      excerpt: 'Thu mua tủ lạnh cũ các hãng Samsung, LG, Panasonic, Toshiba. Vận chuyển miễn phí, thanh toán ngay',
      image: '/images/z7820385601395_19c7302260aed622b241861b5127027a.jpg',
      date: '12/05/2026',
      category: 'Thu Mua',
    },
    {
      id: 3,
      title: 'Thu Mua Máy Giặt Cũ Giá Cao',
      excerpt: 'Thu mua máy giặt cũ các hãng Electrolux, Samsung, LG, Aqua. Vận chuyển miễn phí, thanh toán ngay',
      image: '/images/z7820385604729_b5ac5cbfce2ad60dd77957eb91537934.jpg',
      date: '11/05/2026',
      category: 'Thu Mua',
    },
    {
      id: 4,
      title: 'Bảng Giá Thu Mua Điều Hòa Mới Nhất',
      excerpt: 'Cập nhật bảng giá thu mua điều hòa cũ mới nhất. Giá thu mua các dòng điều hòa cao cấp',
      image: '/images/z7820385590552_23391ae8f04cf543ca3480bb652711a4.jpg',
      date: '10/05/2026',
      category: 'Bảng Giá',
    },
    {
      id: 5,
      title: 'Bảng Giá Thu Mua Tủ Lạnh Mới Nhất',
      excerpt: 'Cập nhật bảng giá thu mua tủ lạnh cũ mới nhất. Giá thu mua tủ lạnh các hãng nổi tiếng',
      image: '/images/z7820385575535_671afa6b62a86b35afaf3a99609fcc96.jpg',
      date: '09/05/2026',
      category: 'Bảng Giá',
    },
    {
      id: 6,
      title: 'Bảng Giá Thu Mua Máy Giặt Mới Nhất',
      excerpt: 'Cập nhật bảng giá thu mua máy giặt cũ mới nhất. Giá thu mua máy giặt các loại',
      image: '/images/z7820385610885_86571c1fa99c92720b11574a193586a5.jpg',
      date: '08/05/2026',
      category: 'Bảng Giá',
    },
  ];

  const categories = [
    'Tất Cả',
    'Bảng Giá',
    'Kinh Nghiệm',
    'Đánh Giá',
    'Hướng Dẫn',
    'Kiến Thức',
    'Thị Trường',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Tin Tức & Kiến Thức
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Thu Mua Đồ Cũ
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            Cập nhật tin tức, bảng giá và kiến thức hữu ích về thu mua đồ cũ
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                index === 0
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 border border-blue-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Article */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-blue-100 hover:shadow-2xl transition-all">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-video md:aspect-auto">
              <Image
                src={articles[0].image}
                alt={articles[0].title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  <TrendingUp className="w-4 h-4 inline mr-1" />
                  Nổi Bật
                </span>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center gap-2 text-sm text-slate-600">
                  <Calendar className="w-4 h-4" />
                  {articles[0].date}
                </span>
                <span className="flex items-center gap-2 text-sm text-blue-600 font-semibold">
                  <Tag className="w-4 h-4" />
                  {articles[0].category}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {articles[0].title}
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {articles[0].excerpt}
              </p>
              <Link href={`/tin-tuc/${articles[0].id}`}>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold w-fit">
                  Đọc Tiếp
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(1).map((article) => (
            <Link
              key={article.id}
              href={`/tin-tuc/${article.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-blue-100 group block"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="flex items-center gap-1 text-xs text-slate-600">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-blue-600 font-semibold">
                    <Tag className="w-3 h-3" />
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                <span className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Đọc Thêm
                  <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-12 mb-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Đăng Ký Nhận Tin
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Nhận thông tin bảng giá mới nhất và các bài viết hữu ích qua email
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-grow px-6 py-4 rounded-full border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold whitespace-nowrap"
            >
              Đăng Ký
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cần Tư Vấn Về Giá?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Liên hệ ngay để được tư vấn và định giá miễn phí!
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
