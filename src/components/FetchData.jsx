import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database } from "../config/firebase";
const FetchData = () => {
  const [allDocs, setAllDocs] = useState([]);

  {
    /* fetching data */
  }

  const fetchAll = (e) => {
    getDocs(collection(database, "rooms")).then((response) => {
      const results = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setAllDocs(results);
    });
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div>
      FETCHING THE DATA
      {/*displaying */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allDocs.map((room) => (
          <div key={room.id} className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-bold mb-2">{room.name}</h2>
            <div className="mb-2">
              <span className="font-semibold">Room Number:</span> {room.roomNo}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Description:</span>{" "}
              {room.description}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Facilities:</span>{" "}
              {room.facilities}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Number of Guests:</span>{" "}
              {room.numberOfGuests}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Amount:</span> {room.amount}
            </div>
            <img
              src={room.image}
              alt="Room"
              className="w-full h-40 object-cover rounded"
            />
          </div>
        ))}

    
      </div>
    </div>
  );
};

export default FetchData;
