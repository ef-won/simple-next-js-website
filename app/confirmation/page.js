export default function ConfirmationPage() {
  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Booking Confirmed!</h1>
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
        <h2>Thank you for your booking</h2>
        <p>Your reservation has been confirmed. A confirmation email has been sent to your email address.</p>
        <div style={{ textAlign: 'left', marginTop: '2rem' }}>
          <h3>Booking Details</h3>
          <p><strong>Hotel:</strong> Grand Hotel</p>
          <p><strong>Check-in:</strong> April 15, 2024</p>
          <p><strong>Check-out:</strong> April 17, 2024</p>
          <p><strong>Guests:</strong> 2</p>
          <p><strong>Total Paid:</strong> $500</p>
          <p><strong>Booking ID:</strong> BK-2024-00123</p>
        </div>
      </div>
      <a href="/" style={{ backgroundColor: '#007bff', color: 'white', textDecoration: 'none', padding: '0.75rem 1.5rem', borderRadius: '4px', display: 'inline-block' }}>Back to Home</a>
    </div>
  );
}