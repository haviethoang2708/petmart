import '../style/shop.css';

function Shop() {
    const shopItems = [
      { name: 'Đồ Ăn', image: 'https://product.hstatic.net/200000263355/product/z5784944947718_2d86e7088d7d86795233e03a473a4172_07b11bbe4f38479db7823403616bd16e_master.jpg', price: '40.000 VND', description: 'Bánh thưởng bổ sung Omega 3, giúp phát triển trí não và tái tạo da lông, lý tưởng cho cả cún con và cún lớn tuổi với hàm răng yếu. Bí ngô còn chứa nhiều chất xơ giúp hỗ trợ hệ tiêu hóa khỏe mạnh, ngăn ngừa táo bón.' },
      { name: 'Đồ Chơi', image: 'https://product.hstatic.net/200000263355/product/z4398310806004_02dcaeddde7ab17d930252840b60f9a6_9825c08131654b39bc2fd10ecdf4a98a_master.jpg', price: '35.000 VND', description: 'Để bé cún miu nhà bạn giảm ngứa răng và stress khi ở nhà nhiều, hãy sắm cho bé vài món đồ chơi dễ thương nha.  Khi có đồ chơi riêng của mình các bé sẽ hình thành thói quen chỉ chơi đồ mình được cho phép và không cắn phá đồ đạc trong nhà nữa' },
      { name: 'Quần Áo', image: 'https://product.hstatic.net/200000263355/product/z6112347984544_c7c8e29f82a143b1d30ef9dc7f49e2a8_71cd3e54b4d3406e9da885204250f9bc_master.jpg', price: '140.000 VND', description: 'Đón tết cổ truyền cùng áo dài đông hồ cho thú cưng ngay thôi. Chất áo dày dặn đẹp phù hợp cho thú cưng từ 5-10 K. Mọi người thắc mắc về size về số vui lòng ib với fb để được hỗ trợ. Cảm ơn mọi người nhiều...' },
    ];
  
    return (
        <section id="shop" className="shop">
        <h2 className="shop-title">Shop Mart</h2>
        <div className="shop-list">
          {shopItems.map((item, index) => (
            <div key={index} className="shop-item">
              <img src={item.image} alt={item.name} className="shop-image" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  export default Shop;