export default function BookingPage() {
  return (
    <div>
      <h1>Book Your Stay</h1>
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
        <div style={{ flex: '1' }}>
          <h2>Hotel Details</h2>
          <img src="https://via.placeholder.com/400x250?text=Selected+Hotel" alt="Selected Hotel" style={{ width: '100%', borderRadius: '8px' }} />
          <h3>Grand Hotel</h3>
          <p>★★★★★</p>
          <p>$250/night</p>
          <p>Check-in: 2024-04-15</p>
          <p>Check-out: 2024-04-17</p>
          <p>2 nights, 2 guests</p>
          <p><strong>Total: $500</strong></p>
        </div>
        <div style={{ flex: '1' }}>
          <h2>Guest Information</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" placeholder="Full Name" style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
            <input type="email" placeholder="Email" style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
            <input type="tel" placeholder="Phone" style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
            <textarea placeholder="Special Requests" rows="4" style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}></textarea>
            <h3>Payment Information</h3>
            <input type="text" placeholder="Card Number" style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input type="text" placeholder="MM/YY" style={{ flex: '1', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
              <input type="text" placeholder="CVV" style={{ flex: '1', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
            </div>
            <button type="submit" style={{ backgroundColor: '#28a745', color: 'white', border: 'none', padding: '0.75rem', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem' }}>Confirm Booking</button>
          </form>
        </div>
      </div>
    </div>
  );
}