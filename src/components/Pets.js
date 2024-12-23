import React from 'react';
import PetCard from './PetCard';


function Pets() {
  const petList = [
    { name: 'Chó Poodle', image: 'https://cdn.tgdd.vn/Files/2021/04/15/1343612/tim-hieu-giong-cho-poodle-nguon-goc-dac-diem-cach-nuoi-bang-gia-202104151447536289.jpg', description: 'Chó Poodle là giống chó săn vịt, rất giỏi trong việc bơi lội. Tên gọi “Poodle” xuất phát từ chữ “Pudel” trong tiếng Đức, dịch ra có nghĩa là “thợ lặn” hay “chó nước”.' },
    { name: 'Chó Nhật', image: 'https://cdn.tgdd.vn/Files/2021/04/16/1343758/tim-hieu-ve-cach-nuoi-cho-nhat--nguon-goc-dac-diem-cach-nuoi-bang-gia-202203291715284587.jpg', description: 'Mang tên là chó Nhật nhưng những chú chó này có nguồn gốc từ cả xứ sở hoa anh đào Nhật Bản và Trung Quốc. Nhiều tài liệu ghi nhận được rằng, chó Nhật xuất hiện vào khoảng những năm 732 TCN, là món quà mà Triều Tiên tặng cho nước Nhật để kết nối tình hữu nghị giữa hai nước.' },
    { name: 'Chó Ta', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Yen_Bai_-_dogs_-_P1390010.JPG/1024px-Yen_Bai_-_dogs_-_P1390010.JPG', description: 'Các giống chó Việt Nam nhìn chung có tầm vóc trung bình và nhỏ. Chó ta nặng khoảng từ 14 – 20 kg khi trưởng thành' },
  ];

  return (
    <section id="pets" className="pets">
      <h2>Các giống chó</h2>
      <div className="pet-list">
        {petList.map((pet, index) => (
          <PetCard key={index} {...pet} />
        ))}
      </div>
    </section>
  );
}

export default Pets;
