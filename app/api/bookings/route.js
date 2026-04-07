export async function POST(request) {
  try {
    const bookingData = await request.json();

    // In a real app, you'd save this to a database
    // For now, we'll just return a success response with a booking ID

    const bookingId = `BK-${Date.now()}`;

    const response = {
      success: true,
      bookingId,
      message: "Booking confirmed successfully!",
      booking: {
        ...bookingData,
        id: bookingId,
        status: "confirmed",
        createdAt: new Date().toISOString()
      }
    };

    return Response.json(response);
  } catch (error) {
    return Response.json(
      { success: false, message: "Failed to create booking" },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Mock bookings data
  const bookings = [
    {
      id: "BK-2024001",
      hotelName: "Grand Hotel",
      checkIn: "2024-04-15",
      checkOut: "2024-04-17",
      guests: 2,
      total: 500,
      status: "confirmed"
    }
  ];

  return Response.json(bookings);
}