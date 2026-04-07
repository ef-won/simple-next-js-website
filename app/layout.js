export const metadata = {
  title: 'BookStay - Hotel Booking Website',
  description: 'Find and book the perfect hotel for your stay'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#f5f5f5' }}>
        <nav style={{ backgroundColor: '#007bff', color: 'white', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0 }}>BookStay</h2>
          <div>
            <a href="/" style={{ color: 'white', textDecoration: 'none', marginRight: '1rem' }}>Home</a>
            <a href="/search" style={{ color: 'white', textDecoration: 'none', marginRight: '1rem' }}>Search Hotels</a>
            <a href="/booking" style={{ color: 'white', textDecoration: 'none' }}>My Bookings</a>
          </div>
        </nav>
        <main style={{ padding: '2rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
