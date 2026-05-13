'use client';

import { Calendar, Tag } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function TinTuc() {
  const [selectedCategory, setSelectedCategory] = useState('Tất Cả');

  const articles = [
    {
      id: 1,
      title: 'Bảng Giá Thu Mua Điều Hòa Cũ Tháng 5/2026',
      excerpt: 'Cập nhật bảng giá thu mua điều hòa cũ mới nhất tháng 5/2026. Giá thu mua các dòng điều hòa Daikin, Panasonic, Mitsubishi...',
      image: '/images/z7820385588253_d8f26d37af7b05dacb08086c5cb456d9.jpg',
      date: '13/05/2026',
      category: 'Bảng Giá',
    },
    {
      id: 2,
      title: 'Kinh Nghiệm Bán Tủ Lạnh Cũ Giá Cao',
      excerpt: 'Chia sẻ những kinh nghiệm giúp bạn bán tủ lạnh cũ với giá cao nhất. Cách vệ sinh, bảo quản và thời điểm bán tốt nhất...',
      image: '/images/z7820385601395_19c7302260aed622b241861b5127027a.jpg',
      date: '10/05/2026',
      category: 'Kinh Nghiệm',
    },
    {
      id: 3,
      title: 'Top 5 Thương Hiệu Điều Hòa Giữ Giá Nhất',
      excerpt: 'Những thương hiệu điều hòa nào giữ giá tốt nhất khi bán lại? Tìm hiểu ngay để có lựa chọn thông minh khi mua mới...',
      image: '/images/z7820385590552_23391ae8f04cf543ca3480bb652711a4.jpg',
      date: '08/05/2026',
      category: 'Đánh Giá',
    },
    {
      id: 4,
      title: 'Quy Trình Thu Mua Đồ Cũ Chuyên Nghiệp',
      excerpt: 'Tìm hiểu quy trình thu mua đồ cũ chuyên nghiệp của chúng tôi. Từ khâu tiếp nhận, định giá đến thanh toán...',
      image: '/images/z7820385569389_2fd7298c2a7516caa686ec5cc22c18d8.jpg',
      date: '05/05/2026',
      category: 'Hướng Dẫn',
    },
    {
      id: 5,
      title: 'Cách Nhận Biết Điều Hòa Inverter Thật Giả',
      excerpt: 'Hướng dẫn chi tiết cách nhận biết điều hòa Inverter thật giả để tránh mua phải hàng kém chất lượng...',
      image: '/images/z7820385599894_694c988967a17bf0c828d5d78d3573a0.jpg',
      date: '03/05/2026',
      category: 'Kiến Thức',
    },
    {
      id: 6,
      title: 'Xu Hướng Thị Trường Đồ Cũ 2026',
      excerpt: 'Phân tích xu hướng thị trường đồ cũ năm 2026. Những mặt hàng nào đang được ưa chuộng và có giá trị cao...',
      image: '/images/z7820385575535_671afa6b62a86b35afaf3a99609fcc96.jpg',
      date: '01/05/2026',
      category: 'Thị Trường',
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

  const filteredArticles = selectedCategory === 'Tất Cả'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className="w-full h-64 md:h-80 relative overflow-hidden">
        <Image
          src="/sub-banner.jpg"
          alt="Tin Tức & Kiến Thức"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Tin Tức & Kiến Thức
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Cập nhật tin tức, bảng giá và kiến thức hữu ích về thu mua đồ cũ
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded font-medium transition-colors ${selectedCategory === category
                  ? 'bg-[#155C8A] text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-[#155C8A] hover:text-[#155C8A]'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {filteredArticles.length > 0 && (
          <div className="bg-white rounded-lg overflow-hidden border border-gray-200 mb-8">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-video md:aspect-auto">
                <Image
                  src={filteredArticles[0].image}
                  alt={filteredArticles[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#155C8A] text-white px-3 py-1 rounded text-sm font-semibold">
                    Nổi Bật
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {filteredArticles[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {filteredArticles[0].category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {filteredArticles[0].title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {filteredArticles[0].excerpt}
                </p>
                <button className="bg-[#155C8A] hover:bg-[#0f4a6f] text-white px-6 py-2 rounded font-semibold transition-colors">
                  Đọc Tiếp
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        {filteredArticles.length > 1 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.slice(1).map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[#155C8A] transition-colors"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <button className="text-[#155C8A] hover:text-[#0f4a6f] font-semibold text-sm">
                    Đọc Thêm →
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Không có bài viết nào trong danh mục này.</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
