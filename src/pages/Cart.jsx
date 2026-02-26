import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext);

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Your Cart</h2>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p style={{ fontSize: '1.1rem', color: '#666' }}>Your cart is empty</p>
          <a href="/products" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 'bold' }}>
            Continue Shopping →
          </a>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div style={{ marginBottom: '2rem' }}>
            {cartItems.map(item => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                  alignItems: 'center',
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '5px' }}
                />
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 0.5rem 0' }}>{item.name}</h3>
                  <p style={{ margin: '0 0 0.5rem 0', color: '#666' }}>
                    Category: {item.category}
                  </p>
                  <p style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: 'bold', color: '#667eea' }}>
                    ${item.price} each
                  </p>
                </div>

                {/* Quantity Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    style={{
                      padding: '0.5rem 0.75rem',
                      backgroundColor: '#f0f0f0',
                      border: 'none',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                    }}
                  >
                    -
                  </button>
                  <span style={{ padding: '0.5rem 1rem', minWidth: '40px', textAlign: 'center' }}>
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    style={{
                      padding: '0.5rem 0.75rem',
                      backgroundColor: '#f0f0f0',
                      border: 'none',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                    }}
                  >
                    +
                  </button>
                </div>

                {/* Total Price for Item */}
                <div style={{ textAlign: 'right', minWidth: '100px' }}>
                  <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#ff4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div style={{
            backgroundColor: '#f9f9f9',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '1px solid #ddd',
            textAlign: 'right',
          }}>
            <h3 style={{ margin: '0 0 1rem 0' }}>Cart Summary</h3>
            <p style={{ fontSize: '1rem', margin: '0.5rem 0', color: '#666' }}>
              Items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </p>
            <hr style={{ margin: '1rem 0' }} />
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '1rem 0 0 0', color: '#667eea' }}>
              Total: ${getTotalPrice()}
            </p>
            <button
              style={{
                marginTop: '1rem',
                padding: '1rem 2rem',
                backgroundColor: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
                width: '100%',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#5568d3'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#667eea'}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
