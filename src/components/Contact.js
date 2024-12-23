import React from 'react';
import '../style/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Liên hệ</h2>
      <form>
        <label htmlFor="name">Tên:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="phone">Số điện thoại:</label>
        <input type="phone" id="phone" name="phone" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />


        <button type="submit">Gửi</button>
      </form>
    </section>
  );
}

export default Contact;
