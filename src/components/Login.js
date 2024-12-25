import React, { useState } from 'react';
import '../style/Login.css';

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <section className="login">
      <div className="login-container">
        <h2>{isRegister ? 'Đăng Ký' : 'Đăng nhập'}</h2>
        <form className="login-form">
          {isRegister && (
            <div className="form-group">
              <label htmlFor="phone">Số điện thoại</label>
              <input type="tel" id="phone" name="phone" placeholder="Nhập số điện thoại" required />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="username">Tài Khoản</label>
            <input type="text" id="username" name="username" placeholder="Nhập tài khoản" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input type="password" id="password" name="password" placeholder="Nhập mật khẩu" required />
          </div>
          <button type="submit" className="submit-btn">
            {isRegister ? 'Đăng ký' : 'Đăng Nhập'}
          </button>
        </form>
        <p className="toggle-text">
          {isRegister ? 'Tài khoản không hoạt động ?' : "Bạn chưa có tài khoản?"}{' '}
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? 'Đăng nhập' : 'Đăng ký ngay '}
          </button>
        </p>
      </div>
    </section>
  );
}

export default Login;
