import React from 'react';
import '../style/About.css';

function AboutUs() {
  return (
    <section className="about-us">
      <h2>Giới thiệu</h2>
      <div className="about-container">
        <img
          src="https://www.petmart.vn/wp-content/uploads/2020/09/petmart-logo-trang.png"
          alt="About Us"
          className="about-image"
        />
        <div className="about-description">
        <p>
  Chào mừng bạn đến với <strong>Pet Mart</strong>, nơi chúng tôi kết nối những ngôi nhà yêu thương với những thú cưng dễ thương. Sứ mệnh của chúng tôi là đảm bảo mọi động vật đều tìm được một gia đình yêu thương. Tại Pet Mart, chúng tôi cung cấp các sản phẩm và dịch vụ chất lượng cao, giúp thú cưng của bạn có một cuộc sống tuyệt vời nhất.
</p>
<p>
  Được thành lập vào năm 2020, Pet Mart đã trở thành một cộng đồng đáng tin cậy cho những người yêu thú cưng. Từ thực phẩm dinh dưỡng cho thú cưng đến đồ chơi tương tác, chúng tôi cung cấp một loạt sản phẩm phong phú dành cho bạn bè lông lá, có vảy hoặc có lông của bạn.
</p>
<p>
  Cho dù bạn đang nhận nuôi thú cưng, mua sắm đồ dùng hay tìm kiếm lời khuyên chuyên gia, chúng tôi luôn sẵn sàng hỗ trợ bạn trong mọi bước đường.
</p>

        </div>
      </div>
      <div className='about-images'>
      <img
          src="https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2024/05/anh-cho-thumbnail.jpg"
          className="about-image"
        />
         <img
          src="https://inkythuatso.com/uploads/thumbnails/800/2023/02/hinh-anh-cho-con-de-thuong-chay-tung-tang-1-24-11-43-28.jpg"
          className="about-image"
        />
         <img
          src="https://cdn.pixabay.com/photo/2021/07/05/14/07/dog-6389277_640.jpg"
          className="about-image"
        />
      </div>
    </section>
  );
}

export default AboutUs;
