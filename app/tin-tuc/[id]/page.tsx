'use client';

import { Phone, MessageCircle, Calendar, Tag, ArrowLeft, Share2, Clock, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function TinTucChiTiet() {
  const params = useParams();
  const id = params.id;

  const handleCall = () => {
    window.location.href = 'tel:0919562568';
  };

  const handleZalo = () => {
    window.open('https://zalo.me/0919562568', '_blank');
  };

  // Mock data - trong thực tế sẽ fetch từ API hoặc database
  const articles: Record<string, {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    category: string;
    author: string;
    readTime: string;
    content: string;
  }> = {
    '1': {
      id: 1,
      title: 'Thu Mua Điều Hòa Cũ Giá Cao',
      excerpt: 'Thu mua điều hòa cũ các hãng Daikin, Panasonic, Mitsubishi, LG, Samsung. Tháo lắp miễn phí, thanh toán ngay',
      image: '/images/z7820385588253_d8f26d37af7b05dacb08086c5cb456d9.jpg',
      date: '13/05/2026',
      category: 'Thu Mua',
      author: 'Admin',
      readTime: '8 phút đọc',
      content: `
        <div style="text-align: center; margin-bottom: 2rem;">
          <img src="/images/z7820385588253_d8f26d37af7b05dacb08086c5cb456d9.jpg" alt="Thu mua điều hòa cũ" style="max-width: 100%; height: auto; border-radius: 1rem; margin-bottom: 1rem;" />
        </div>

        <h2 style="color: #1e40af; font-size: 1.8rem; margin-bottom: 1rem;">I. Lợi Ích Của Việc Bán Điều Hòa Cũ</h2>
        
        <p style="margin-bottom: 1rem; line-height: 1.8;">Bán điều hòa cũ không chỉ giúp bạn thu hồi vốn mà còn mang lại nhiều lợi ích thiết thực khác.</p>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">1. Thu Hồi Vốn Nhanh Chóng</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Giá thu mua hấp dẫn:</strong> Điều hòa các hãng nổi tiếng như Daikin, Panasonic, Mitsubishi được thu mua với giá cao từ 2-15 triệu tùy tình trạng.</li>
          <li><strong>Thanh toán ngay:</strong> Nhận tiền mặt hoặc chuyển khoản ngay sau khi thỏa thuận giá, không phải chờ đợi.</li>
        </ul>

        <div style="text-align: center; margin: 2rem 0;">
          <img src="/images/z7820385590552_23391ae8f04cf543ca3480bb652711a4.jpg" alt="Thu mua điều hòa giá cao" style="max-width: 100%; height: auto; border-radius: 1rem;" />
        </div>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">2. Tiết Kiệm Không Gian</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Giải phóng không gian:</strong> Điều hòa cũ không dùng chiếm diện tích, gây lãng phí không gian sống.</li>
          <li><strong>Tránh hư hỏng:</strong> Máy để lâu không dùng dễ bị hỏng hóc, giảm giá trị.</li>
        </ul>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">3. Bảo Vệ Môi Trường</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Tái chế hiệu quả:</strong> Điều hòa cũ được tái chế đúng cách, giảm rác thải điện tử.</li>
          <li><strong>Tiết kiệm tài nguyên:</strong> Tái sử dụng linh kiện còn tốt, giảm nhu cầu sản xuất mới.</li>
        </ul>

        <h2 style="color: #1e40af; font-size: 1.8rem; margin: 2rem 0 1rem;">II. Quy Trình Thu Mua Điều Hòa Cũ</h2>
        
        <p style="margin-bottom: 1.5rem; line-height: 1.8;">Chúng tôi cam kết quy trình thu mua nhanh chóng, minh bạch và chuyên nghiệp nhất.</p>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">Bước 1: Liên Hệ Tư Vấn</h3>
        <p style="margin-bottom: 1rem; line-height: 1.8;">Gọi ngay <strong style="color: #dc2626;">0919.562.568</strong> hoặc nhắn Zalo để được tư vấn miễn phí. Nhân viên sẽ hỏi thông tin về điều hòa (hãng, công suất, tình trạng) để báo giá sơ bộ.</p>

        <div style="text-align: center; margin: 2rem 0;">
          <img src="/images/z7820418281307_11db5258e614d186c930c27d04ca4f22.jpg" alt="Quy trình thu mua điều hòa" style="max-width: 100%; height: auto; border-radius: 1rem;" />
        </div>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">Bước 2: Đến Tận Nơi Kiểm Tra</h3>
        <p style="margin-bottom: 1rem; line-height: 1.8;">Nhân viên kỹ thuật đến tận nơi trong vòng 30 phút để kiểm tra tình trạng máy, đo gas, test chức năng làm lạnh.</p>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">Bước 3: Định Giá Minh Bạch</h3>
        <p style="margin-bottom: 1rem; line-height: 1.8;">Báo giá công khai dựa trên thương hiệu, công suất, năm sản xuất và tình trạng máy. Cam kết giá cao nhất thị trường.</p>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">Bước 4: Tháo Lắp & Thanh Toán</h3>
        <p style="margin-bottom: 1.5rem; line-height: 1.8;">Đồng ý giá, chúng tôi tháo máy miễn phí và thanh toán ngay bằng tiền mặt hoặc chuyển khoản.</p>

        <h2 style="color: #1e40af; font-size: 1.8rem; margin: 2rem 0 1rem;">III. Các Loại Điều Hòa Thu Mua</h2>
        
        <p style="margin-bottom: 1.5rem; line-height: 1.8;">Chúng tôi thu mua tất cả các loại điều hòa với giá cạnh tranh:</p>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">1. Điều Hòa Cao Cấp</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Daikin:</strong> 2.5tr - 15tr (Inverter giá cao hơn 30%)</li>
          <li><strong>Panasonic:</strong> 2tr - 12tr</li>
          <li><strong>Mitsubishi:</strong> 2tr - 10tr</li>
        </ul>

        <div style="text-align: center; margin: 2rem 0;">
          <img src="/images/z7820418295068_9be8b4dedad9f5ec40768edb6f971702.jpg" alt="Các loại điều hòa thu mua" style="max-width: 100%; height: auto; border-radius: 1rem;" />
        </div>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">2. Điều Hòa Phổ Thông</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>LG, Samsung:</strong> 1.5tr - 8tr</li>
          <li><strong>Toshiba, Sharp:</strong> 1.2tr - 6tr</li>
          <li><strong>Gree, Midea:</strong> 800k - 4tr</li>
        </ul>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">3. Điều Hòa Theo Công Suất</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>9.000 BTU:</strong> Phù hợp phòng 12-15m²</li>
          <li><strong>12.000 BTU:</strong> Phòng 15-20m²</li>
          <li><strong>18.000 BTU:</strong> Phòng 20-30m²</li>
          <li><strong>24.000 BTU trở lên:</strong> Phòng lớn, văn phòng</li>
        </ul>

        <h2 style="color: #1e40af; font-size: 1.8rem; margin: 2rem 0 1rem;">IV. Cam Kết Của Chúng Tôi</h2>
        
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Giá cao nhất:</strong> Cam kết mua với giá cao hơn thị trường 10-20%</li>
          <li><strong>Tháo lắp miễn phí:</strong> Đội ngũ kỹ thuật chuyên nghiệp, tháo máy an toàn</li>
          <li><strong>Thanh toán ngay:</strong> Tiền mặt hoặc chuyển khoản tại chỗ</li>
          <li><strong>Uy tín 15 năm:</strong> Hơn 10,000 khách hàng tin tưởng</li>
        </ul>

        <p style="text-align: center; font-size: 1.3rem; margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; border-radius: 1rem;">
          <strong>Liên hệ ngay: <span style="font-size: 1.6rem;">0919.562.568</span> để được tư vấn và báo giá miễn phí!</strong>
        </p>
      `
    },
    '2': {
      id: 2,
      title: 'Thu Mua Tủ Lạnh Cũ Giá Cao',
      excerpt: 'Thu mua tủ lạnh cũ các hãng Samsung, LG, Panasonic, Toshiba. Vận chuyển miễn phí, thanh toán ngay',
      image: '/images/z7820385601395_19c7302260aed622b241861b5127027a.jpg',
      date: '12/05/2026',
      category: 'Thu Mua',
      author: 'Admin',
      readTime: '8 phút đọc',
      content: `
        <div style="text-align: center; margin-bottom: 2rem;">
          <img src="/images/z7820385601395_19c7302260aed622b241861b5127027a.jpg" alt="Thu mua tủ lạnh cũ" style="max-width: 100%; height: auto; border-radius: 1rem; margin-bottom: 1rem;" />
        </div>

        <h2 style="color: #1e40af; font-size: 1.8rem; margin-bottom: 1rem;">I. Lợi Ích Của Việc Bán Tủ Lạnh Cũ</h2>
        
        <p style="margin-bottom: 1rem; line-height: 1.8;">Bán tủ lạnh cũ giúp bạn thu hồi vốn và tạo không gian cho thiết bị mới hiện đại hơn.</p>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">1. Thu Hồi Giá Trị</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Giá thu mua tốt:</strong> Tủ lạnh Samsung, LG, Panasonic được thu mua từ 300k - 20tr tùy dung tích và tình trạng.</li>
          <li><strong>Không mất phí:</strong> Vận chuyển miễn phí, không tính thêm chi phí tháo lắp.</li>
        </ul>

        <div style="text-align: center; margin: 2rem 0;">
          <img src="/images/tulanh4.jpg" alt="Thu mua tủ lạnh giá cao" style="max-width: 100%; height: auto; border-radius: 1rem;" />
        </div>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">2. Giải Phóng Không Gian</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Tủ lạnh cũ chiếm diện tích:</strong> Bán đi để có chỗ cho tủ mới hoặc sử dụng không gian khác.</li>
          <li><strong>Tránh hư hỏng thêm:</strong> Tủ để lâu không dùng dễ hỏng, giảm giá trị.</li>
        </ul>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">3. Bảo Vệ Môi Trường</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Tái chế gas lạnh:</strong> Gas lạnh được thu hồi đúng cách, không gây ô nhiễm.</li>
          <li><strong>Tái sử dụng linh kiện:</strong> Các bộ phận còn tốt được tái sử dụng, giảm rác thải.</li>
        </ul>

        <h2 style="color: #1e40af; font-size: 1.8rem; margin: 2rem 0 1rem;">II. Quy Trình Thu Mua Tủ Lạnh Cũ</h2>
        
        <p style="margin-bottom: 1.5rem; line-height: 1.8;">Quy trình đơn giản, nhanh chóng chỉ trong 4 bước:</p>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">Bước 1: Liên Hệ Ngay</h3>
        <p style="margin-bottom: 1rem; line-height: 1.8;">Gọi <strong style="color: #dc2626;">0919.562.568</strong> hoặc chat Zalo để được tư vấn. Cung cấp thông tin: hãng, dung tích, năm sản xuất, tình trạng máy.</p>

        <div style="text-align: center; margin: 2rem 0;">
          <img src="/images/z7820385575535_671afa6b62a86b35afaf3a99609fcc96.jpg" alt="Quy trình thu mua tủ lạnh" style="max-width: 100%; height: auto; border-radius: 1rem;" />
        </div>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">Bước 2: Kiểm Tra Tận Nơi</h3>
        <p style="margin-bottom: 1rem; line-height: 1.8;">Nhân viên đến trong 30 phút, kiểm tra khả năng làm lạnh, tình trạng vỏ tủ, ngăn đá, dàn lạnh.</p>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">Bước 3: Báo Giá Công Khai</h3>
        <p style="margin-bottom: 1rem; line-height: 1.8;">Định giá dựa trên thương hiệu, dung tích, công nghệ (Inverter/thường), tình trạng. Giá minh bạch, không ép giá.</p>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">Bước 4: Vận Chuyển & Thanh Toán</h3>
        <p style="margin-bottom: 1.5rem; line-height: 1.8;">Thỏa thuận giá xong, vận chuyển miễn phí và thanh toán ngay tại chỗ.</p>

        <h2 style="color: #1e40af; font-size: 1.8rem; margin: 2rem 0 1rem;">III. Các Loại Tủ Lạnh Thu Mua</h2>
        
        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">1. Tủ Lạnh Cao Cấp</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Samsung:</strong> 500k - 20tr (Side by side giá cao nhất)</li>
          <li><strong>LG:</strong> 500k - 18tr</li>
          <li><strong>Panasonic:</strong> 400k - 15tr</li>
          <li><strong>Hitachi:</strong> 600k - 22tr</li>
        </ul>

        <div style="text-align: center; margin: 2rem 0;">
          <img src="/images/tulanh1.png" alt="Các loại tủ lạnh thu mua" style="max-width: 100%; height: auto; border-radius: 1rem;" />
        </div>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">2. Tủ Lạnh Phổ Thông</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Toshiba:</strong> 300k - 12tr</li>
          <li><strong>Sharp:</strong> 300k - 10tr</li>
          <li><strong>Aqua:</strong> 200k - 8tr</li>
          <li><strong>Electrolux:</strong> 400k - 14tr</li>
        </ul>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">3. Tủ Lạnh Theo Dung Tích</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Dưới 150L:</strong> Tủ mini, sinh viên - 200k - 2tr</li>
          <li><strong>150-250L:</strong> Gia đình nhỏ - 500k - 5tr</li>
          <li><strong>250-350L:</strong> Gia đình 4-5 người - 1tr - 10tr</li>
          <li><strong>Trên 350L:</strong> Gia đình đông, side by side - 2tr - 20tr</li>
        </ul>

        <h2 style="color: #1e40af; font-size: 1.8rem; margin: 2rem 0 1rem;">IV. Cam Kết Của Chúng Tôi</h2>
        
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Giá cao nhất thị trường:</strong> So sánh với 3-5 đơn vị khác, chúng tôi luôn cao hơn 10-20%</li>
          <li><strong>Vận chuyển miễn phí:</strong> Đội xe chuyên dụng, vận chuyển an toàn</li>
          <li><strong>Thanh toán tức thì:</strong> Tiền mặt hoặc chuyển khoản ngay</li>
          <li><strong>Uy tín lâu năm:</strong> 15 năm kinh nghiệm, 10,000+ khách hàng</li>
        </ul>

        <p style="text-align: center; font-size: 1.3rem; margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; border-radius: 1rem;">
          <strong>Hotline: <span style="font-size: 1.6rem;">0919.562.568</span> - Tư vấn miễn phí 24/7!</strong>
        </p>
      `
    },
    '3': {
      id: 3,
      title: 'Thu Mua Máy Giặt Cũ Giá Cao',
      excerpt: 'Thu mua máy giặt cũ các hãng Electrolux, Samsung, LG, Aqua. Vận chuyển miễn phí, thanh toán ngay',
      image: '/images/z7820385604729_b5ac5cbfce2ad60dd77957eb91537934.jpg',
      date: '11/05/2026',
      category: 'Thu Mua',
      author: 'Admin',
      readTime: '7 phút đọc',
      content: `
        <div style="text-align: center; margin-bottom: 2rem;">
          <img src="/images/z7820385604729_b5ac5cbfce2ad60dd77957eb91537934.jpg" alt="Thu mua máy giặt cũ" style="max-width: 100%; height: auto; border-radius: 1rem; margin-bottom: 1rem;" />
        </div>

        <h2 style="color: #1e40af; font-size: 1.8rem; margin-bottom: 1rem;">I. Lợi Ích Của Việc Bán Máy Giặt Cũ</h2>
        
        <p style="margin-bottom: 1rem; line-height: 1.8;">Bán máy giặt cũ giúp bạn thu hồi vốn và nâng cấp lên máy mới tiết kiệm điện hơn.</p>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">1. Thu Hồi Vốn Đầu Tư</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Giá thu mua hấp dẫn:</strong> Máy giặt Electrolux, Samsung, LG được thu mua từ 200k - 10tr.</li>
          <li><strong>Bù vào máy mới:</strong> Dùng tiền bán máy cũ để mua máy mới tiết kiệm điện, giặt sạch hơn.</li>
        </ul>

        <div style="text-align: center; margin: 2rem 0;">
          <img src="/images/z7820385632131_a28b703d2f5baf9b6fb72476a0059e0c.jpg" alt="Thu mua máy giặt giá cao" style="max-width: 100%; height: auto; border-radius: 1rem;" />
        </div>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">2. Tiết Kiệm Không Gian</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Máy cũ chiếm chỗ:</strong> Bán đi để có không gian cho máy mới hoặc mục đích khác.</li>
          <li><strong>Tránh hỏng hóc:</strong> Máy để lâu không dùng dễ bị rỉ sét, hỏng động cơ.</li>
        </ul>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">3. Bảo Vệ Môi Trường</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Tái chế kim loại:</strong> Vỏ máy, động cơ được tái chế, giảm khai thác tài nguyên.</li>
          <li><strong>Xử lý an toàn:</strong> Các bộ phận điện tử được xử lý đúng quy trình, không gây ô nhiễm.</li>
        </ul>

        <h2 style="color: #1e40af; font-size: 1.8rem; margin: 2rem 0 1rem;">II. Quy Trình Thu Mua Máy Giặt Cũ</h2>
        
        <p style="margin-bottom: 1.5rem; line-height: 1.8;">Quy trình đơn giản, nhanh gọn trong 4 bước:</p>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">Bước 1: Liên Hệ Tư Vấn</h3>
        <p style="margin-bottom: 1rem; line-height: 1.8;">Gọi <strong style="color: #dc2626;">0919.562.568</strong> để được tư vấn. Cung cấp thông tin: hãng, loại máy (cửa trên/ngang), khối lượng giặt, tình trạng.</p>

        <div style="text-align: center; margin: 2rem 0;">
          <img src="/images/z7820385610885_86571c1fa99c92720b11574a193586a5.jpg" alt="Quy trình thu mua máy giặt" style="max-width: 100%; height: auto; border-radius: 1rem;" />
        </div>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">Bước 2: Kiểm Tra Máy</h3>
        <p style="margin-bottom: 1rem; line-height: 1.8;">Nhân viên đến kiểm tra động cơ, lồng giặt, chức năng vắt, xả nước trong 30 phút.</p>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">Bước 3: Định Giá</h3>
        <p style="margin-bottom: 1rem; line-height: 1.8;">Báo giá dựa trên thương hiệu, khối lượng giặt, loại máy, tình trạng. Giá công khai, minh bạch.</p>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">Bước 4: Vận Chuyển & Thanh Toán</h3>
        <p style="margin-bottom: 1.5rem; line-height: 1.8;">Đồng ý giá, vận chuyển miễn phí và thanh toán ngay.</p>

        <h2 style="color: #1e40af; font-size: 1.8rem; margin: 2rem 0 1rem;">III. Các Loại Máy Giặt Thu Mua</h2>
        
        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">1. Máy Giặt Cao Cấp</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Electrolux:</strong> 500k - 10tr (máy sấy giá cao hơn)</li>
          <li><strong>Samsung:</strong> 400k - 9tr</li>
          <li><strong>LG:</strong> 400k - 8tr</li>
        </ul>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">2. Máy Giặt Phổ Thông</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Aqua:</strong> 200k - 5tr</li>
          <li><strong>Toshiba:</strong> 300k - 6tr</li>
          <li><strong>Panasonic:</strong> 300k - 7tr</li>
        </ul>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">3. Máy Giặt Theo Khối Lượng</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Dưới 7kg:</strong> Gia đình nhỏ - 200k - 3tr</li>
          <li><strong>7-9kg:</strong> Gia đình 4-5 người - 500k - 6tr</li>
          <li><strong>9-12kg:</strong> Gia đình đông - 800k - 10tr</li>
          <li><strong>Trên 12kg:</strong> Giặt công nghiệp - 1tr - 15tr</li>
        </ul>

        <h2 style="color: #1e40af; font-size: 1.8rem; margin: 2rem 0 1rem;">IV. Cam Kết Của Chúng Tôi</h2>
        
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Giá cao nhất:</strong> Cam kết mua cao hơn thị trường 10-20%</li>
          <li><strong>Vận chuyển miễn phí:</strong> Đội xe chuyên dụng, an toàn</li>
          <li><strong>Thanh toán ngay:</strong> Tiền mặt hoặc chuyển khoản tức thì</li>
          <li><strong>Uy tín 15 năm:</strong> Hơn 10,000 khách hàng tin tưởng</li>
        </ul>

        <p style="text-align: center; font-size: 1.3rem; margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; border-radius: 1rem;">
          <strong>Gọi ngay: <span style="font-size: 1.6rem;">0919.562.568</span> để được báo giá!</strong>
        </p>
      `
    },
    '4': {
      id: 4,
      title: 'Bảng Giá Thu Mua Điều Hòa Mới Nhất',
      excerpt: 'Cập nhật bảng giá thu mua điều hòa cũ mới nhất. Giá thu mua các dòng điều hòa cao cấp',
      image: '/images/z7820385590552_23391ae8f04cf543ca3480bb652711a4.jpg',
      date: '10/05/2026',
      category: 'Bảng Giá',
      author: 'Admin',
      readTime: '6 phút đọc',
      content: `
        <div style="text-align: center; margin-bottom: 2rem;">
          <img src="/images/z7820385590552_23391ae8f04cf543ca3480bb652711a4.jpg" alt="Bảng giá thu mua điều hòa" style="max-width: 100%; height: auto; border-radius: 1rem; margin-bottom: 1rem;" />
        </div>

        <h2 style="color: #1e40af; font-size: 1.8rem; margin-bottom: 1rem;">Bảng Giá Thu Mua Điều Hòa Tháng 5/2026</h2>
        
        <p style="margin-bottom: 1.5rem; line-height: 1.8;">Cập nhật bảng giá thu mua điều hòa cũ mới nhất tại Hà Nội. Giá có thể thay đổi tùy theo tình trạng máy.</p>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">1. Điều Hòa Daikin</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Daikin 9.000 BTU (1 chiều):</strong> 2.5tr - 5tr</li>
          <li><strong>Daikin 12.000 BTU (1 chiều):</strong> 3tr - 6tr</li>
          <li><strong>Daikin 18.000 BTU (2 chiều):</strong> 5tr - 10tr</li>
          <li><strong>Daikin Inverter:</strong> Thêm 20-30% so với thường</li>
        </ul>

        <div style="text-align: center; margin: 2rem 0;">
          <img src="/images/z7820418281307_11db5258e614d186c930c27d04ca4f22.jpg" alt="Giá điều hòa Daikin" style="max-width: 100%; height: auto; border-radius: 1rem;" />
        </div>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">2. Điều Hòa Panasonic</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Panasonic 9.000 BTU:</strong> 2tr - 4.5tr</li>
          <li><strong>Panasonic 12.000 BTU:</strong> 2.5tr - 5.5tr</li>
          <li><strong>Panasonic Inverter:</strong> 3tr - 8tr</li>
        </ul>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">3. Điều Hòa Mitsubishi</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Mitsubishi 9.000 BTU:</strong> 2tr - 4tr</li>
          <li><strong>Mitsubishi 12.000 BTU:</strong> 2.5tr - 5tr</li>
          <li><strong>Mitsubishi Heavy:</strong> Thêm 15-20%</li>
        </ul>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">4. Các Thương Hiệu Khác</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>LG, Samsung:</strong> 1.5tr - 4tr tùy công suất</li>
          <li><strong>Toshiba, Sharp:</strong> 1.2tr - 3.5tr</li>
          <li><strong>Gree, Midea:</strong> 800k - 2.5tr</li>
        </ul>

        <h2 style="color: #1e40af; font-size: 1.8rem; margin: 2rem 0 1rem;">Yếu Tố Ảnh Hưởng Đến Giá</h2>
        
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Tình trạng máy:</strong> Máy hoạt động tốt giá cao hơn 30-50%</li>
          <li><strong>Năm sản xuất:</strong> Máy càng mới giá càng cao</li>
          <li><strong>Thương hiệu:</strong> Hãng nổi tiếng giữ giá tốt</li>
          <li><strong>Công suất:</strong> Công suất lớn giá cao hơn</li>
          <li><strong>Loại máy:</strong> Inverter đắt hơn thường 20-30%</li>
        </ul>

        <p style="text-align: center; font-size: 1.3rem; margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; border-radius: 1rem;">
          <strong>Liên hệ: <span style="font-size: 1.6rem;">0919.562.568</span> để được báo giá chính xác!</strong>
        </p>
      `
    },
    '5': {
      id: 5,
      title: 'Bảng Giá Thu Mua Tủ Lạnh Mới Nhất',
      excerpt: 'Cập nhật bảng giá thu mua tủ lạnh cũ mới nhất. Giá thu mua tủ lạnh các hãng nổi tiếng',
      image: '/images/z7820385575535_671afa6b62a86b35afaf3a99609fcc96.jpg',
      date: '09/05/2026',
      category: 'Bảng Giá',
      author: 'Admin',
      readTime: '6 phút đọc',
      content: `
        <div style="text-align: center; margin-bottom: 2rem;">
          <img src="/images/z7820385575535_671afa6b62a86b35afaf3a99609fcc96.jpg" alt="Bảng giá thu mua tủ lạnh" style="max-width: 100%; height: auto; border-radius: 1rem; margin-bottom: 1rem;" />
        </div>

        <h2 style="color: #1e40af; font-size: 1.8rem; margin-bottom: 1rem;">Bảng Giá Thu Mua Tủ Lạnh Tháng 5/2026</h2>
        
        <p style="margin-bottom: 1.5rem; line-height: 1.8;">Cập nhật bảng giá thu mua tủ lạnh cũ các hãng nổi tiếng tại Hà Nội.</p>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">1. Tủ Lạnh Samsung</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Samsung dưới 150L:</strong> 500k - 2tr</li>
          <li><strong>Samsung 150-250L:</strong> 1tr - 5tr</li>
          <li><strong>Samsung 250-350L:</strong> 2tr - 10tr</li>
          <li><strong>Samsung Side by Side:</strong> 5tr - 20tr</li>
        </ul>

        <div style="text-align: center; margin: 2rem 0;">
          <img src="/images/tulanh4.jpg" alt="Giá tủ lạnh Samsung" style="max-width: 100%; height: auto; border-radius: 1rem;" />
        </div>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">2. Tủ Lạnh LG</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>LG dưới 150L:</strong> 500k - 2tr</li>
          <li><strong>LG 150-250L:</strong> 1tr - 4.5tr</li>
          <li><strong>LG 250-350L:</strong> 2tr - 9tr</li>
          <li><strong>LG Inverter:</strong> Thêm 30-40%</li>
        </ul>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">3. Tủ Lạnh Panasonic</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Panasonic dưới 150L:</strong> 400k - 1.8tr</li>
          <li><strong>Panasonic 150-250L:</strong> 800k - 4tr</li>
          <li><strong>Panasonic 250-350L:</strong> 1.5tr - 8tr</li>
        </ul>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">4. Tủ Lạnh Hitachi</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Hitachi 250-350L:</strong> 2tr - 10tr</li>
          <li><strong>Hitachi trên 350L:</strong> 3tr - 15tr</li>
          <li><strong>Hitachi Side by Side:</strong> 6tr - 22tr</li>
        </ul>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">5. Các Hãng Khác</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Toshiba:</strong> 300k - 12tr</li>
          <li><strong>Sharp:</strong> 300k - 10tr</li>
          <li><strong>Aqua:</strong> 200k - 8tr</li>
          <li><strong>Electrolux:</strong> 400k - 14tr</li>
        </ul>

        <h2 style="color: #1e40af; font-size: 1.8rem; margin: 2rem 0 1rem;">Yếu Tố Ảnh Hưởng Giá Thu Mua</h2>
        
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Dung tích:</strong> Tủ lớn giá cao hơn</li>
          <li><strong>Công nghệ:</strong> Inverter đắt hơn thường 30-40%</li>
          <li><strong>Tình trạng:</strong> Máy hoạt động tốt giá cao hơn</li>
          <li><strong>Năm sản xuất:</strong> Tủ mới giá cao hơn</li>
          <li><strong>Thương hiệu:</strong> Hãng nổi tiếng giữ giá tốt</li>
        </ul>

        <p style="text-align: center; font-size: 1.3rem; margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; border-radius: 1rem;">
          <strong>Hotline: <span style="font-size: 1.6rem;">0919.562.568</span> - Báo giá miễn phí!</strong>
        </p>
      `
    },
    '6': {
      id: 6,
      title: 'Bảng Giá Thu Mua Máy Giặt Mới Nhất',
      excerpt: 'Cập nhật bảng giá thu mua máy giặt cũ mới nhất. Giá thu mua máy giặt các loại',
      image: '/images/z7820385610885_86571c1fa99c92720b11574a193586a5.jpg',
      date: '08/05/2026',
      category: 'Bảng Giá',
      author: 'Admin',
      readTime: '6 phút đọc',
      content: `
        <div style="text-align: center; margin-bottom: 2rem;">
          <img src="/images/z7820385610885_86571c1fa99c92720b11574a193586a5.jpg" alt="Bảng giá thu mua máy giặt" style="max-width: 100%; height: auto; border-radius: 1rem; margin-bottom: 1rem;" />
        </div>

        <h2 style="color: #1e40af; font-size: 1.8rem; margin-bottom: 1rem;">Bảng Giá Thu Mua Máy Giặt Tháng 5/2026</h2>
        
        <p style="margin-bottom: 1.5rem; line-height: 1.8;">Cập nhật bảng giá thu mua máy giặt cũ các hãng tại Hà Nội.</p>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">1. Máy Giặt Electrolux</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Electrolux dưới 7kg:</strong> 500k - 3tr</li>
          <li><strong>Electrolux 7-9kg:</strong> 1tr - 6tr</li>
          <li><strong>Electrolux 9-12kg:</strong> 1.5tr - 10tr</li>
          <li><strong>Electrolux có sấy:</strong> Thêm 30-50%</li>
        </ul>

        <div style="text-align: center; margin: 2rem 0;">
          <img src="/images/z7820385632131_a28b703d2f5baf9b6fb72476a0059e0c.jpg" alt="Giá máy giặt Electrolux" style="max-width: 100%; height: auto; border-radius: 1rem;" />
        </div>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">2. Máy Giặt Samsung</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Samsung dưới 7kg:</strong> 400k - 2.5tr</li>
          <li><strong>Samsung 7-9kg:</strong> 800k - 5tr</li>
          <li><strong>Samsung 9-12kg:</strong> 1.2tr - 9tr</li>
          <li><strong>Samsung Inverter:</strong> Thêm 20-30%</li>
        </ul>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">3. Máy Giặt LG</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>LG dưới 7kg:</strong> 400k - 2.5tr</li>
          <li><strong>LG 7-9kg:</strong> 800k - 5tr</li>
          <li><strong>LG 9-12kg:</strong> 1.2tr - 8tr</li>
        </ul>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">4. Máy Giặt Aqua</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Aqua dưới 7kg:</strong> 200k - 1.5tr</li>
          <li><strong>Aqua 7-9kg:</strong> 500k - 3tr</li>
          <li><strong>Aqua 9-12kg:</strong> 800k - 5tr</li>
        </ul>

        <h3 style="color: #2563eb; font-size: 1.4rem; margin: 1.5rem 0 1rem;">5. Các Hãng Khác</h3>
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Toshiba:</strong> 300k - 6tr</li>
          <li><strong>Panasonic:</strong> 300k - 7tr</li>
          <li><strong>Hitachi:</strong> 400k - 8tr</li>
        </ul>

        <h2 style="color: #1e40af; font-size: 1.8rem; margin: 2rem 0 1rem;">Yếu Tố Ảnh Hưởng Giá</h2>
        
        <ul style="margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Khối lượng giặt:</strong> Máy lớn giá cao hơn</li>
          <li><strong>Loại máy:</strong> Cửa ngang đắt hơn cửa trên 20-30%</li>
          <li><strong>Có sấy:</strong> Máy có sấy đắt hơn 30-50%</li>
          <li><strong>Tình trạng:</strong> Máy hoạt động tốt giá cao hơn</li>
          <li><strong>Thương hiệu:</strong> Hãng nổi tiếng giữ giá tốt</li>
        </ul>

        <p style="text-align: center; font-size: 1.3rem; margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; border-radius: 1rem;">
          <strong>Gọi ngay: <span style="font-size: 1.6rem;">0919.562.568</span> để được tư vấn!</strong>
        </p>
      `
    }
  };

  const article = articles[id as string] || articles['1'];

  const relatedArticles = [
    {
      id: 1,
      title: 'Thu Mua Điều Hòa Cũ Giá Cao',
      image: '/images/z7820385588253_d8f26d37af7b05dacb08086c5cb456d9.jpg',
      date: '13/05/2026',
    },
    {
      id: 2,
      title: 'Thu Mua Tủ Lạnh Cũ Giá Cao',
      image: '/images/z7820385601395_19c7302260aed622b241861b5127027a.jpg',
      date: '12/05/2026',
    },
    {
      id: 3,
      title: 'Thu Mua Máy Giặt Cũ Giá Cao',
      image: '/images/z7820385604729_b5ac5cbfce2ad60dd77957eb91537934.jpg',
      date: '11/05/2026',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Back Button */}
      <section className="container mx-auto px-4 py-6">
        <Link
          href="/tin-tuc"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Quay lại Tin tức
        </Link>
      </section>

      {/* Article Header */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <Tag className="w-4 h-4" />
              {article.category}
            </span>
            <span className="flex items-center gap-2 text-slate-600">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-2 text-slate-600">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-slate-800">{article.author}</p>
                <p className="text-sm text-slate-600">Tác giả</p>
              </div>
            </div>
            <button className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-all">
              <Share2 className="w-5 h-5" />
              <span className="hidden sm:inline">Chia sẻ</span>
            </button>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Contact Highlight */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 shadow-xl mb-8">
            <p className="text-white text-center text-lg mb-4 font-semibold">
              📞 Cần tư vấn? Gọi ngay: <span className="text-2xl font-bold">0919.562.568</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleCall}
                className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-all font-bold justify-center"
              >
                <Phone className="w-5 h-5" />
                Gọi ngay
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

      {/* Article Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-slate-800 prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-8 prose-h3:text-2xl prose-h3:font-bold prose-h3:mb-3 prose-h3:mt-6 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4 prose-ul:text-slate-600 prose-ol:text-slate-600 prose-li:mb-2 prose-strong:text-slate-800"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Bài Viết Liên Quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((related) => (
              <Link
                key={related.id}
                href={`/tin-tuc/${related.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-blue-100 group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-slate-600 mb-2 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {related.date}
                  </p>
                  <h3 className="text-lg font-bold text-slate-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {related.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bạn Có Đồ Cũ Cần Bán?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Liên hệ ngay để được tư vấn và định giá miễn phí!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleCall}
                className="flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all shadow-xl transform hover:scale-105 text-lg font-bold w-full sm:w-auto justify-center"
              >
                <Phone className="w-6 h-6" />
                0919.562.568
              </button>
              <button
                onClick={handleZalo}
                className="flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all shadow-xl transform hover:scale-105 text-lg font-bold w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-6 h-6" />
                Chat Zalo Ngay
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
