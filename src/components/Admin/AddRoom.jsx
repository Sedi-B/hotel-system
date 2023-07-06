import { BellIcon, SearchIcon } from "@heroicons/react/outline";
import { addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import { database, storage } from "../../config/firebase";


const AddRoom = () => {
  const [roomNo, setroomNo] = useState(null);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [facilities, setFacilities] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [amount, setAmount] = useState(0);
  const [file,setFile] = useState();

  {
    /*IMAGE FUNCTION */
  }
  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setFile(file)
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  
  //Saving info
  const handleAddRoom = async (event) => {
    event.preventDefault();

    const storageRef = ref(storage, file.name);
    
    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });

    alert("room added");
    try {
      await addDoc(collection(database, "rooms"), {
        roomNo,
        description,
        facilities,
        amount,
        numberOfGuests,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Header Section */}
      <header className="flex items-center justify-between p-4 bg-[#535252] text-white">
        <div className="flex items-center">
          <img src={logo} alt="logo" className=" h-5 w-auto sm:h-10 mr-4" />
          <div>@SEDIHOMES</div>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <BellIcon className="h-6 w-6 text-white" />
          </div>
          <img
            src="/path/to/profile.png"
            alt="Profile"
            className="w-10 h-8 rounded-full"
          />
        </div>
      </header>

      {/* Body Section */}
      <div className="flex items-center justify-between p-4 bg-gray-200">
        <div>
          <button className="border bg-slate-500 px-8 py-2 bg-blue-500  text-white rounded">
            <SearchIcon className="h-6 w-6 text-white" />
            <span className="ml-2">Search</span>
          </button>
        </div>
        <div>
          <Link
            className="border bg-slate-600 px-4 py-2 bg-blue-500 text-white rounded"
            to={"/Adminboard"}
          >
            Reservations
          </Link>
          <Link
            className="border bg-slate-600 px-4 py-2 bg-blue-500 text-white rounded ml-2 "
            to={"/Adminboard"}
          >
            Guest
          </Link>
          <Link
            className="border bg-slate-600 px-4 py-2 bg-blue-500 text-white rounded ml-2"
            to={"/Adminboard"}
          >
            {" "}
            Add Room
          </Link>
          <button className="px-4 py-2 bg-[blue] text-white rounded ml-2">
            Logout
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="p-4 h-screen  bg-gray-200">
        {/* Display information based on the button clicked */}
        <h3 className="text-Gray">My Rooms</h3>
        {/*adding rooms*/}

        <form className="flex">
          <div className="w-1/2 px-4">
            <label className="block mb-2 font-bold">Room No</label>
            <input
              type="number"
              id="room number"
              onChange={(e) => setroomNo(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-1/2 px-4">
            <label className="block mb-2 font-bold">Image</label>

            <img className="w-24" src={image} />

            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-1/2 px-4">
            <label className="block mb-2 font-bold">Description</label>
            <input
              type="text"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-1/2 px-4">
            <label className="block mb-2 font-bold">Facilities</label>
            <input
              type="text"
              id="facilities"
              onChange={(e) => setFacilities(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-1/2 px-4">
            <label className="block mb-2 font-bold">Guest</label>
            <input
              type="number"
              id="guests"
              onChange={(e) => setNumberOfGuests(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-1/2 px-4">
            <label className="block mb-2 font-bold">Price</label>
            <input
              type="money"
              id="price"
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            onClick={handleAddRoom}
            className="px-3 py-2 bg-[gray] text-white rounded-md w-20 ml-5"
          >
            Save room
          </button>
        </form>

        {/*adding rooms*/}
      </div>
    </div>
  );
};

export default AddRoom;
