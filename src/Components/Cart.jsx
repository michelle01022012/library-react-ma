import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, changeQuantity, removeItem }) => {
  const total = cart.reduce(
    (sum, item) => sum + (item.salePrice || item.originalPrice) * item.quantity,
    0
  );

  if (!cart || cart.length === 0) {
    return (
      <div id="books__body">
        <main id="books__main">
          <div className="books__container">
            <div className="cart__empty">
              <h2>Your cart is empty</h2>
              <Link to="/books">
                <button className="btn">Browse Books</button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="cart">
            <div className="cart__header">
              <h2>Cart</h2>
              <div className="cart__length">Items: {cart.length}</div>
            </div>
            <div className="cart__items">
              {cart.map((item) => (
                <div className="cart__item" key={item.id}>
                  <div className="cart__book">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="cart__book--img"
                    />
                    <div className="cart__book--info">
                      <h3 className="cart__book--title">{item.title}</h3>
                      <div className="cart__book--price">
                        ${(item.salePrice || item.originalPrice).toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <div className="cart__quantity">
                    <input
                      className="cart__input"
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => changeQuantity(item, e.target.value)}
                    />
                  </div>
                  <div className="cart__total">
                    ${((item.salePrice || item.originalPrice) * item.quantity).toFixed(2)}
                  </div>
                  <div className="cart__remove">
                    <button className="btn" onClick={() => removeItem(item)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart__footer">
              <h3>Total: ${total.toFixed(2)}</h3>
              <Link to="/">
                <button className="btn">Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
