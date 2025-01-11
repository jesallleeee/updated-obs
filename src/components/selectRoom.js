import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./selectRoom.css";
import Navbar from "./navbar";
import RoomCard from "./roomCard";
import roomImage1 from "../assets/roomss.jpg";
import wifiIcon from '../assets/wifi-icon.png';
import tvIcon from '../assets/tv-icon.png';
import chairIcon from '../assets/chair-icon.png';
import bathroomIcon from '../assets/bathroom-icon.png';

const SelectRoom = () => {
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getTomorrowDate = (date) => {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    const year = nextDay.getFullYear();
    const month = String(nextDay.getMonth() + 1).padStart(2, "0");
    const day = String(nextDay.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const location = useLocation();
  const navigate = useNavigate();

  const [checkIn, setCheckIn] = useState(location.state?.checkIn || getTodayDate());
  const [checkOut, setCheckOut] = useState(location.state?.checkOut || getTomorrowDate(getTodayDate()));
  const [persons, setPersons] = useState(location.state?.persons || 2);

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRooms([
        {
          id: 1,
          name: "Standard Room",
          availability: "Only 3 rooms left",
          person: "2 person",
          bed: "1 Queen Bed",
          description:
            "A cozy and elegant room perfect for solo travelers or couples. Equipped with all essential amenities to ensure a comfortable stay, including a private bathroom, a workspace, and a flat-screen TV.",
          price: "4,500",
          image: roomImage1,
          amenities: [
            { icon: wifiIcon, label: "WiFi" },
            { icon: tvIcon, label: "TV" },
            { icon: chairIcon, label: "Desk & Chair" },
            { icon: bathroomIcon, label: "Bathroom" },
          ],
        },
        {
          id: 2,
          name: "Deluxe Room",
          availability: "5 rooms left",
          person: "3 persons",
          bed: "1 King Bed",
          description:
            "A spacious room with modern decor, offering a luxurious experience for small families or couples. Includes a private balcony, minibar, and a 50-inch smart TV.",
          price: "6,500",
          image: roomImage1,
          amenities: [
            { icon: wifiIcon, label: "WiFi" },
            { icon: tvIcon, label: "TV" },
            { icon: chairIcon, label: "Desk & Chair" },
            { icon: bathroomIcon, label: "Bathroom" },
          ],
        },
        {
          id: 3,
          name: "Executive Suite",
          availability: "Only 2 rooms left",
          person: "4 persons",
          bed: "1 King Bed, 1 Sofa Bed",
          description:
            "A premium suite with separate living and sleeping areas. Ideal for families or business travelers seeking luxury and convenience. Features a kitchenette, work desk, and a stunning city view.",
          price: "12,000",
          image: roomImage1,
          amenities: [
            { icon: wifiIcon, label: "WiFi" },
            { icon: tvIcon, label: "TV" },
            { icon: chairIcon, label: "Desk & Chair" },
            { icon: bathroomIcon, label: "Bathroom" },
          ],
        },
        {
          id: 4,
          name: "Family Room",
          availability: "7 rooms left",
          person: "5 persons",
          bed: "2 Queen Beds",
          description:
            "Designed for families, this room provides ample space and comfort. Includes a dining area, kids' play corner, and a flat-screen TV with kids' channels.",
          price: "8,000",
          image: roomImage1,
          amenities: [
            { icon: wifiIcon, label: "WiFi" },
            { icon: tvIcon, label: "TV" },
            { icon: chairIcon, label: "Desk & Chair" },
            { icon: bathroomIcon, label: "Bathroom" },
          ],
        },
        {
          id: 5,
          name: "Penthouse Suite",
          availability: "Only 1 room left",
          person: "6 persons",
          bed: "2 King Beds",
          description:
            "Our most luxurious offering, the penthouse suite boasts breathtaking panoramic views, a private rooftop terrace, and premium amenities for an unforgettable stay.",
          price: "25,000",
          image: roomImage1,
          amenities: [
            { icon: wifiIcon, label: "WiFi" },
            { icon: tvIcon, label: "TV" },
            { icon: chairIcon, label: "Desk & Chair" },
            { icon: bathroomIcon, label: "Bathroom" },
          ],
        },
        {
          id: 6,
          name: "Single Room",
          availability: "10 rooms left",
          person: "1 person",
          bed: "1 Single Bed",
          description:
            "Perfect for solo travelers, this compact room offers a comfortable stay with essential amenities, including a desk, wardrobe, and high-speed Wi-Fi.",
          price: "3,000",
          image: roomImage1,
          amenities: [
            { icon: wifiIcon, label: "WiFi" },
            { icon: tvIcon, label: "TV" },
            { icon: chairIcon, label: "Desk & Chair" },
            { icon: bathroomIcon, label: "Bathroom" },
          ],
        }        
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleBookClick = (room) => {
    navigate("/bookingForm", {
      state: { checkIn, checkOut, persons, room },
    });
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="loading">Loading rooms...</div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="selectRoom-container">
        <div className="sr-bg-select">
          <div className="details-container-select">
            <div className="bookingpanel-select">
              <div className="booking-item-select">
                <span>
                  <i className="fa fa-calendar"></i> Check in
                </span>
                <input
                  type="date"
                  value={checkIn}
                  min={getTodayDate()}
                  onChange={(e) => {
                    const newCheckIn = e.target.value;
                    setCheckIn(newCheckIn);
                    setCheckOut((prevCheckOut) =>
                      new Date(newCheckIn) >= new Date(prevCheckOut)
                        ? getTomorrowDate(newCheckIn)
                        : prevCheckOut
                    );
                  }}
                />
              </div>

              <div className="booking-item-select">
                <span>
                  <i className="fa fa-calendar"></i> Check out
                </span>
                <input
                  type="date"
                  value={checkOut}
                  min={getTomorrowDate(checkIn)}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>

              <div className="booking-item-select">
                <span>
                  <i className="fa fa-users"></i> Persons
                </span>
                <input
                  type="number"
                  value={persons}
                  min="1"
                  max="8"
                  onChange={(e) => setPersons(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="book-room-select">
          <div className="select-text">Select a Room</div>
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onBook={() => handleBookClick(room)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectRoom;