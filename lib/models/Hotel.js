import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a hotel name'],
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  description: {
    type: String,
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  rating: {
    type: Number,
    min: [0, 'Rating must be at least 0'],
    max: [5, 'Rating cannot be more than 5'],
    default: 0
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price'],
    min: [0, 'Price must be positive']
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/300x200?text=Hotel'
  },
  amenities: [{
    type: String,
    maxlength: [50, 'Amenity name cannot be more than 50 characters']
  }],
  location: {
    address: String,
    city: String,
    country: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  rooms: {
    type: Number,
    min: [1, 'Must have at least 1 room'],
    default: 1
  },
  available: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
HotelSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Create indexes for better query performance
HotelSchema.index({ name: 'text', description: 'text' });
HotelSchema.index({ price: 1 });
HotelSchema.index({ rating: -1 });
HotelSchema.index({ 'location.city': 1 });

export default mongoose.models.Hotel || mongoose.model('Hotel', HotelSchema);