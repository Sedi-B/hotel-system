import React, { useState } from "react";

const AvailableRooms = () => {
  const [availableRooms, setAvailableRooms] = useState([]);

  return (
    <div>
      <h2>Available Rooms</h2>
      {availableRooms.length > 0 ? (
        <table className="table-fixed ">
          <thead>
            <tr>
              <th>Room Number</th>
              <th>Room Type</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {availableRooms.map((room) => (
              <tr key={room.id}>
                <td>{room.roomNumber}</td>
                <td>{room.roomType}</td>
                <td>{room.price}</td>
                <td>
                  <button>Book</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No rooms available for the selected dates.</p>
      )}
    </div>
  );
};

export default AvailableRooms;
