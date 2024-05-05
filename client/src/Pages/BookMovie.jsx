import React, { useState } from 'react';


  
const BookMovie = () => {
  const [seats, setSeats] = useState(
    Array.from({ length: 8 }, (_, i) => 
      Array.from({ length: 8 }, (_, j) => ({ booked: false, selected: false }))
    )
  );

  const toggleSelectSeat = (row, col) => {
    const newSeats = [...seats];
    newSeats[row][col].selected = !newSeats[row][col].selected;
    setSeats(newSeats);
    console.log(seats)
  };
  return (
    <div>
      <div>
      {seats.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((seat, seatIndex) => (
            <button 
              key={seatIndex} 
              disabled={seat.booked}
              className={seat.selected ? 'bg-red-600' : ''}
              onClick={() => toggleSelectSeat(rowIndex, seatIndex)}
            >
              {seat.booked ? 'X' : 'O'}
            </button>
          ))}
        </div>
      ))}
    </div>
    </div>
  )
}

export default BookMovie
