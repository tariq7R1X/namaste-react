import { useSelector, useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} from "../redux/cartSlice";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const getPrice = (costString, quantity) => {
    const numericValue = parseInt(costString.replace(/\D/g, ""), 10);
    return (numericValue * quantity).toLocaleString();
  };

  const totalAmount = cartItems.reduce((acc, item) => {
    const numericValue = parseInt(item.info.costForTwo.replace(/\D/g, ""), 10);
    return acc + numericValue * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length > 0 && (
        <button className="clear-cart" onClick={handleClearCart}>
          Clear Cart
        </button>
      )}

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty 🛒</p>
      ) : (
        cartItems.map((item) => (
          <div key={item?.info?.id} className="cart-item">
            {/* Left Side - Details */}
            <div className="cart-item-details">
              <h3 className="item-name">{item?.info?.name}</h3>
              <p className="item-cost">
                ₹{getPrice(item.info.costForTwo, item.quantity)}
              </p>
              <p className="item-delivery">{item?.info?.sla?.slaString}</p>
            </div>

            {/* Right Side - Image */}
            <div className="item-img">
              <img
                alt="restaurant-img"
                src={CDN_URL + item.info.cloudinaryImageId}
              />
              <div className="qty-controls">
                <button
                  className="qty-btn"
                  onClick={() => dispatch(decreaseQuantity(item.info.id))}
                >
                  -
                </button>
                <span className="qty-count">{item.quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => dispatch(increaseQuantity(item.info.id))}
                >
                  +
                </button>
                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeItem(item.info.id))}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <div className="cart-total">
          <h3>Total: ₹{totalAmount.toLocaleString()}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
