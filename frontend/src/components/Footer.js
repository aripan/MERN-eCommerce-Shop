import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__sectionTwo">
        <div className="footer__sectionTitle">
          <h4>Get to Know Us</h4>
          <div className="footer__sectionDetails">
            {/* <p>Careers</p> */}
            <p>Blog</p>
            <p>About MERN-Shop</p>
            <p>Sustainability</p>
            <p>MERN-Shop Devices</p>
            {/* <p>MERN-Shop Tours</p> */}
          </div>
        </div>
        <div className="footer__sectionTitle">
          <h4>Make Money with Us</h4>
          <div className="footer__sectionDetails">
            <p>Sell products on MERN-Shop</p>
            <p>Advertise Your Products</p>
            <p>Self-Publish with Us</p>
            <p>Host an MERN-Shop Hub</p>
          </div>
        </div>
        <div className="footer__sectionTitle">
          <h4>MERN-Shop Payment Products</h4>
          <div className="footer__sectionDetails">
            <p>MERN-Shop Business Card</p>
            <p>Shop with Points</p>
            <p>Reload Your Balance</p>
            <p>MERN-Shop Currency Converter</p>
          </div>
        </div>

        <div className="footer__sectionTitle">
          <h4>Let Us Help You</h4>
          <div className="footer__sectionDetails">
            <p>Your Account</p>
            <p>Your Orders</p>
            <p>Shipping Rates & Policies</p>
            <p>Returns & Replacements</p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center pb-3">Copyright &copy; MERN-Shop</div>
      </div>
    </footer>
  );
}

export default Footer;
