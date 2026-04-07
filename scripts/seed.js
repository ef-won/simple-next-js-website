import connectToDatabase from '../lib/mongodb';
import Hotel from '../lib/models/Hotel';

const sampleHotels = [
  {
    name: "Grand Hotel",
    description: "Luxury hotel in the heart of the city with world-class amenities",
    rating: 5,
    price: 250,
    image: "https://via.placeholder.com/300x200?text=Grand+Hotel",
    amenities: ["Free WiFi", "Pool", "Breakfast included", "Spa", "Fitness Center"],
    location: {
      address: "123 Main Street",
      city: "New York",
      country: "USA",
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    rooms: 200,
    available: true
  },
  {
    name: "Seaside Resort",
    description: "Beautiful beachfront resort with stunning ocean views",
    rating: 4.5,
    price: 220,
    image: "https://via.placeholder.com/300x200?text=Seaside+Resort",
    amenities: ["Ocean view", "Spa", "Restaurant", "Beach access", "Bar"],
    location: {
      address: "456 Beach Road",
      city: "Miami",
      country: "USA",
      coordinates: { lat: 25.7617, lng: -80.1918 }
    },
    rooms: 150,
    available: true
  },
  {
    name: "Budget Inn",
    description: "Affordable accommodation for budget-conscious travelers",
    rating: 3.5,
    price: 80,
    image: "https://via.placeholder.com/300x200?text=Budget+Inn",
    amenities: ["Clean rooms", "Parking", "24/7 reception", "Free WiFi"],
    location: {
      address: "789 Economy Street",
      city: "Chicago",
      country: "USA",
      coordinates: { lat: 41.8781, lng: -87.6298 }
    },
    rooms: 100,
    available: true
  },
  {
    name: "Mountain View Lodge",
    description: "Cozy lodge nestled in the mountains with breathtaking views",
    rating: 4.2,
    price: 180,
    image: "https://via.placeholder.com/300x200?text=Mountain+View+Lodge",
    amenities: ["Mountain views", "Fireplace", "Hiking trails", "Restaurant"],
    location: {
      address: "321 Mountain Road",
      city: "Denver",
      country: "USA",
      coordinates: { lat: 39.7392, lng: -104.9903 }
    },
    rooms: 50,
    available: true
  },
  {
    name: "City Center Hotel",
    description: "Modern hotel in the bustling city center",
    rating: 4.0,
    price: 150,
    image: "https://via.placeholder.com/300x200?text=City+Center+Hotel",
    amenities: ["City views", "Business center", "Gym", "Room service"],
    location: {
      address: "555 Downtown Ave",
      city: "Los Angeles",
      country: "USA",
      coordinates: { lat: 34.0522, lng: -118.2437 }
    },
    rooms: 120,
    available: true
  }
];

async function seedDatabase() {
  try {
    await connectToDatabase();
    console.log('Connected to database');

    // Clear existing hotels
    await Hotel.deleteMany({});
    console.log('Cleared existing hotels');

    // Insert sample hotels
    const hotels = await Hotel.insertMany(sampleHotels);
    console.log(`Seeded ${hotels.length} hotels`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();