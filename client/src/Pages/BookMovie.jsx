import React, { useState } from 'react';

const BookMovie = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [seat,setSeat] = useState(0);
  const [total,setTotal] = useState(0);
  const [seats, setSeats] = useState(
    Array.from({ length: 3}, (_, i) =>
      Array.from({ length: 15 }, (_, j) => ({ booked: false, selected: false }))
    )
  );

  const toggleSelectSeat = (row, col) => {
    const newSeats = [...seats];
    const seatSelected = newSeats[row][col].selected;

    newSeats[row][col].selected = !seatSelected;
    setSeats(newSeats);
    if (seatSelected) {
      setSeat(seat - 1);
      setTotal(total - 150);
    } else {
      setSeat(seat + 1);
      setTotal(total + 150);
    }
  };
  let count = 1;

  return (
    <div className="mr-[32rem] mt-4 mb-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Book Your Seats</h2>
        <div className="mb-4">
          <label htmlFor="date">Select Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            className="border border-gray-300 rounded-md py-2 px-3 mt-2"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <select className="border border-gray-300 rounded-md py-2 px-3 mt-2" onChange={(e) => console.log(e.target.value)}>
              <option value="10:00AM">10:00 AM</option>
              <option value="3:00PM">3:00 PM</option>
              <option value="6:00PM">6:00 PM</option>
            </select>
        </div>
        <div className="flex flex-wrap gap-2">
          {seats.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
              {row.map((seat, seatIndex) => (
                <button
                  key={seatIndex}
                  disabled={seat.booked}
                  className={`w-16 h-16 rounded-sm ${seat.selected ? 'bg-green-600' : 'bg-gray-300'}`}
                  style={{ margin: '4px' }} // Add margin to create a gap
                  onClick={() => toggleSelectSeat(rowIndex, seatIndex)}
                >
                  {count++}
                </button>
              ))}
              {/* Add empty seats if row has less than 8 seats */}
              {row.length < 8 && (
                Array.from({ length: 8 - row.length }).map((_, i) => (
                  <button key={row.length + i} className="w-16 h-16"></button>
                ))
              )}
            </div>
          ))}
        </div>
        <div>
          <h3>Seat booked: {seat}</h3>
          <h3>Total Amount: {total}</h3>
        </div>
      </div>
    </div>
  );
}

export default BookMovie;
