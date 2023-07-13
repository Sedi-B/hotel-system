import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database } from "../../config/firebase";


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

  // const navigate=useNavigate();
  // const [book,setBook]= useState();
  const bookRoom = async (room) => {
    const docRef = await addDoc(collection(database, "booked"), {
      ...room,
    });
    // const roomBooked = docRef.docs.map((doc) => doc.data());
    alert("Room booked");
    setBook(roomBooked);
  };

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [contact, setContact] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reservation = {
      name,
      surname,
      contact,
      checkIn,
      checkOut,
      guests,
      message,
    };

    try {
      const docRef = await addDoc(
        collection(database, "bookings"),
        reservation
      );

      console.log("New reservation", docRef.id);
      // Clear form fields
      setName("");
      setSurname("");
      setContact("");
      setCheckIn("");
      setCheckOut("");
      setGuests("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting reservation:", error);
    }
  };


  return (
    <div className=" bg-slate-300">
      <div className="font-bold flex justify-center text-dark italic underline p-2 ">
        {" "}
        AVAILABLE ROOMS AT THE MOMENT{" "}
      </div>
      {/*displaying */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allDocs.map((room) => (
          <div key={room.id} className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-bold mb-2">{room.name}</h2>
            <div className="mb-2 ">
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
              className="w-full h-40 object-cover rounded  "
            />
            <button
              className="bg-slate-600 rounded-md font-semibold text-white w-50"
              onClick={(e) => bookRoom(room)}
            >
              BOOK
            </button>
          </div>
        ))}
      </div>
      {/* booking form*/}
      <div>
        <div className=" flex flex-col items-center p-2 font-semibold text-2xl">
          {" "}
          Reserve a room for the future
        </div>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Names</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Surname
            </label>
            <input
              type="text"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="border border-gray-300 rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Contact
            </label>
            <input
              type="text"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="border border-gray-300 rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Check-in Date
            </label>
            <input
              type="date"
              id="checkIn"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="border border-gray-300 rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2"></label>
            <input
              type="date"
              id="checkOut"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="border border-gray-300 rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="border border-gray-300 rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 ">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 rounded w-full py-2 px-3"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-slate-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Reserve Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FetchData;
