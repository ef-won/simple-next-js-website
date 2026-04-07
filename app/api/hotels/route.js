import connectToDatabase from '../../../lib/mongodb';
import Hotel from '../../../lib/models/Hotel';

export async function GET(request) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const search = searchParams.get('search') || '';
    const minPrice = parseInt(searchParams.get('minPrice')) || 0;
    const maxPrice = parseInt(searchParams.get('maxPrice')) || 10000;
    const minRating = parseFloat(searchParams.get('minRating')) || 0;

    // Build query
    let query = {
      available: true,
      price: { $gte: minPrice, $lte: maxPrice },
      rating: { $gte: minRating }
    };

    // Add text search if provided
    if (search) {
      query.$text = { $search: search };
    }

    const hotels = await Hotel.find(query)
      .sort({ rating: -1, price: 1 })
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();

    const total = await Hotel.countDocuments(query);

    return Response.json({
      hotels,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching hotels:', error);
    return Response.json(
      { error: 'Failed to fetch hotels' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();

    const hotelData = await request.json();

    // Validate required fields
    const { name, price } = hotelData;
    if (!name || !price) {
      return Response.json(
        { error: 'Name and price are required' },
        { status: 400 }
      );
    }

    const hotel = new Hotel(hotelData);
    const savedHotel = await hotel.save();

    return Response.json(savedHotel, { status: 201 });
  } catch (error) {
    console.error('Error creating hotel:', error);
    return Response.json(
      { error: 'Failed to create hotel' },
      { status: 500 }
    );
  }
}