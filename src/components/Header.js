import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ cartItemCount }) => {
  return (
    <header className="main-header">
      <div className="header-container">
        
        {/* Logo Section */}
        <div className="logo">
          <Link to="/">
            <span className="logo-icon">🛍</span>
            <span className="logo-text">ShopNest</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/order">Orders</Link></li>
          </ul>
        </nav>

        {/* Right Section */}
        <div className="header-right">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="search-input"
          />

          <Link to="/cart" className="cart-icon">
            <FaShoppingCart size={20} />
            {cartItemCount > 0 && (
              <span className="cart-count">{cartItemCount}</span>
            )}
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
