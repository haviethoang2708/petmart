import React from "react";
import "../style/Contact.css";

function Contact() {
  const guides = [
    {
      title: "Cách nuôi chó con đúng cách",
      link: "https://www.bachhoaxanh.com/kinh-nghiem-hay/moi-dieu-can-biet-cho-con-cach-nuoi-cham-soc-va-huan-luyen-1423196?srsltid=AfmBOopQJaXo9e4zyAjMwX5BnhZkwUTUgdG37iglkjlqOSluyWEMt5HD",
      description:
        "Hướng dẫn cách chăm sóc chó con từ chế độ ăn uống đến vệ sinh và tiêm phòng.",
      image: "https://cdn.tgdd.vn/Files/2022/03/31/1423196/moi-dieu-can-biet-cho-con-cach-nuoi-cham-soc-va-huan-luyen-202203311027080129.jpg",
    },
    {
      title: "Phòng tránh chó cắn",
      link: "https://tuoitre.vn/5-cach-de-tranh-bi-cho-can-20230315091611536.htm",
      description:
        "5 tip phòng tránh chó cắn.",
      image: "https://image.tienphong.vn/w890/Uploaded/2024/rkznae/2017_06_14/nhung_bien_phap_xu_li_khi_bi_cho_can_1619_QPHF.jpg",
    },
    {
      title: "Làm sao để huấn luyện chó nghe lời",
      link: "https://www.petmart.vn/huan-luyen-cho?srsltid=AfmBOooFPCNjBc5Ybd0VVGG5Rr0c_rmLqeoeBCBYn-IU6q7fWT8k9HCD",
      description:
        "Những mẹo và phương pháp huấn luyện cơ bản giúp chó nghe lời dễ dàng hơn.",
      image: "https://www.petmart.vn/wp-content/uploads/2023/09/huan-luyen-cho.jpg",
    },
    {
      title: "Thức ăn tốt nhất cho chó",
      link: "https://propetvn.com/cho-nen-duoc-an-gi-top-12-thuc-an-tot-chuyen-gia-khuyen-dung-tot-cho-cho",
      description:
        "Danh sách các loại thức ăn phù hợp với từng giống chó và độ tuổi khác nhau.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMeGmp86jOZkE5IdIONSdsU-X6PU4LsEQ4w&s",
    },
    {
      title: "Cách chăm sóc sức khỏe thú cưng",
      link: "https://paddy.vn/blogs/cham-soc-thu-cung/huong-dan-cach-cham-soc-cho-meo-luon-khoe-manh-cho-nguoi-moi?srsltid=AfmBOorUlYayk8bQ1fEiXaIp4spq3Ge4D-qjY-NazqyXf_z9vAtcHuld",
      description:
        "Những điều cần biết để chăm sóc sức khỏe cho thú cưng của bạn.",
      image: "https://paddy.vn/cdn/shop/articles/cham-soc-cho-meo-1_749x.png?v=1690716833",
    },
    {
      title: "Khoảng khắc đáng iu của thú cưng",
      link: "https://vietbao.vn/khoanh-khac-dang-yeu-cua-thu-cung-trong-cuoc-thi-anh-dong-vat-438265.html",
      description:
        "Những khoẳng khắc đang yêu của các boss...",
      image: "https://petviet.vn/wp-content/uploads/2023/07/CHUP-ANH-CHO-THU-CUNG-6-petviet.vn_-800x521.jpg?v=1689056844",
    },
  ];

  return (
    <div className="pet-care-guide">
      <h1>Cẩm Nang Chăm Sóc Thú Cưng</h1>
      <p>
        Dưới đây là những bài viết hữu ích giúp bạn chăm sóc thú cưng của mình
        một cách tốt nhất:
      </p>
      <ul className="guide-list">
        {guides.map((guide, index) => (
          <li key={index} className="guide-item">
            <img src={guide.image} alt={guide.title} className="guide-image" />
            <div className="guide-content">
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
              <a href={guide.link} target="_blank" rel="noopener noreferrer">
                Xem bài viết
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
