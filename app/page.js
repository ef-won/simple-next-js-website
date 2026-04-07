export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#007bff', color: 'white', padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Find Your Perfect Stay</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Book hotels worldwide with ease</p>

        {/* Search Form */}
        <form style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <input type="text" placeholder="Destination" style={{ flex: '1', minWidth: '200px', padding: '0.5rem', border: 'none', borderRadius: '4px' }} />
          <input type="date" style={{ flex: '1', minWidth: '150px', padding: '0.5rem', border: 'none', borderRadius: '4px' }} />
          <input type="date" style={{ flex: '1', minWidth: '150px', padding: '0.5rem', border: 'none', borderRadius: '4px' }} />
          <input type="number" placeholder="Guests" min="1" style={{ flex: '1', minWidth: '100px', padding: '0.5rem', border: 'none', borderRadius: '4px' }} />
          <button type="submit" style={{ backgroundColor: '#28a745', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Search</button>
        </form>
      </section>

      {/* Featured Hotels */}
      <section style={{ padding: '2rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Featured Hotels</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <img src="https://via.placeholder.com/300x200?text=Hotel+1" alt="Hotel 1" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h3>Luxury Resort</h3>
              <p>★★★★★</p>
              <p>$200/night</p>
              <button style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Book Now</button>
            </div>
          </div>
          <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <img src="https://via.placeholder.com/300x200?text=Hotel+2" alt="Hotel 2" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h3>City Center Hotel</h3>
              <p>★★★★☆</p>
              <p>$150/night</p>
              <button style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Book Now</button>
            </div>
          </div>
          <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <img src="https://via.placeholder.com/300x200?text=Hotel+3" alt="Hotel 3" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h3>Beachfront Inn</h3>
              <p>★★★★☆</p>
              <p>$180/night</p>
              <button style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Book Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '1rem', marginTop: '2rem' }}>
        <p>&copy; 2024 BookStay. All rights reserved.</p>
      </footer>
    </div>
  );
}
