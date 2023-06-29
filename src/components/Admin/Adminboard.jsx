import React, { useState } from 'react'

const Adminboard = () => {

const [bookings,setBookings]= useState([]);
const [rooms,setRooms]= useState([]);

const addRoom =() =>{

    const roomID =rooms.length+
     +1;
     const newRoom = {
        id:roomID,
        Number: 'Room ${roomID',
     };
     setRooms(prevRooms =>[...prevRooms,newRoom]);
};



  return (
    <div>
        
    </div>
  )
}

export default Adminboard