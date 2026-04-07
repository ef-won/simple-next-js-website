# BookStay - Hotel Booking Website

A full-featured hotel booking website built with Next.js, React, and MongoDB.

## Features

- 🏨 Hotel listings with search and filtering
- 📅 Booking system with date selection
- 💳 Payment form integration
- 📱 Responsive design
- 🔍 Advanced search functionality
- ⭐ Hotel ratings and reviews

## Tech Stack

- **Frontend**: Next.js 14, React 18
- **Database**: MongoDB with Mongoose
- **Styling**: Inline CSS (can be upgraded to Tailwind CSS)
- **API**: Next.js API Routes

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local installation or MongoDB Atlas)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd simple-next-js-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.local` and update the `MONGODB_URI` with your MongoDB connection string
   - For local MongoDB: `mongodb://localhost:27017/bookstay`
   - For MongoDB Atlas: `mongodb+srv://username:password@cluster.mongodb.net/bookstay`

4. Start MongoDB (if using local installation):
```bash
# On macOS with Homebrew
brew services start mongodb/brew/mongodb-community

# On Ubuntu/Debian
sudo systemctl start mongod
```

5. Seed the database with sample data:
```bash
npm run seed
```

6. Start the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

### Hotels
- `GET /api/hotels` - Get all hotels with optional filtering
  - Query parameters: `page`, `limit`, `search`, `minPrice`, `maxPrice`, `minRating`
- `POST /api/hotels` - Create a new hotel

### Bookings
- `GET /api/bookings` - Get all bookings
- `POST /api/bookings` - Create a new booking

## Database Schema

### Hotel Model
```javascript
{
  name: String (required),
  description: String,
  rating: Number (0-5),
  price: Number (required),
  image: String,
  amenities: [String],
  location: {
    address: String,
    city: String,
    country: String,
    coordinates: { lat: Number, lng: Number }
  },
  rooms: Number,
  available: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── hotels/route.js
│   │   └── bookings/route.js
│   ├── booking/page.js
│   ├── confirmation/page.js
│   ├── layout.js
│   ├── page.js
│   └── search/page.js
├── lib/
│   ├── models/
│   │   └── Hotel.js
│   └── mongodb.js
├── scripts/
│   └── seed.js
├── .env.local
├── jsconfig.json
├── next.config.js
└── package.json
```

## Development

### Adding New Features

1. Create new API routes in `app/api/`
2. Add new pages in `app/`
3. Update models in `lib/models/`
4. Add database utilities in `lib/`

### Database Management

- Use `npm run seed` to populate the database with sample data
- Models are defined using Mongoose schemas
- Connection is handled by `lib/mongodb.js`

## Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

Make sure to set the `MONGODB_URI` environment variable in your deployment platform.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.