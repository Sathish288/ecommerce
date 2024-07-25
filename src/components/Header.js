import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItemCount }) => {
  return (
    <header>
      <div className="header-container">
        <h1>E-Commerce Site</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/order">Order</Link></li>
            <li className="cart">
              <Link to="/cart">Cart</Link>
              {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
            </li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
        </div>
      </div>
    </header>
  );
};

export default Header;
