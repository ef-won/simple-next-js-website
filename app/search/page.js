export default function SearchPage() {
  return (
    <div>
      <h1>Search Hotels</h1>
      <form style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <input type="text" placeholder="Destination" style={{ flex: '1', minWidth: '200px', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
        <input type="date" style={{ flex: '1', minWidth: '150px', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
        <input type="date" style={{ flex: '1', minWidth: '150px', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
        <input type="number" placeholder="Guests" min="1" style={{ flex: '1', minWidth: '100px', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
        <button type="submit" style={{ backgroundColor: '#28a745', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Search</button>
      </form>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {/* Mock search results */}
        <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <img src="https://via.placeholder.com/300x200?text=Grand+Hotel" alt="Grand Hotel" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div style={{ padding: '1rem' }}>
            <h3>Grand Hotel</h3>
            <p>★★★★★</p>
            <p>$250/night</p>
            <p>Free WiFi, Pool, Breakfast included</p>
            <button style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Book Now</button>
          </div>
        </div>
        <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <img src="https://via.placeholder.com/300x200?text=Seaside+Resort" alt="Seaside Resort" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div style={{ padding: '1rem' }}>
            <h3>Seaside Resort</h3>
            <p>★★★★☆</p>
            <p>$220/night</p>
            <p>Ocean view, Spa, Restaurant</p>
            <button style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Book Now</button>
          </div>
        </div>
        <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <img src="https://via.placeholder.com/300x200?text=Budget+Inn" alt="Budget Inn" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div style={{ padding: '1rem' }}>
            <h3>Budget Inn</h3>
            <p>★★★☆☆</p>
            <p>$80/night</p>
            <p>Clean rooms, Parking, 24/7 reception</p>
            <button style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}