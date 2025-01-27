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

  const [sortOption, setSortOption] = useState("availability");

  useEffect(() => {
    setTimeout(() => {
      setRooms([
        {
          id: 1,
          name: "Standard Room",
          availability: "Only 3 rooms left",
          person: "2 person",
          bed: "1 Queen Bed",
          size: "20 to 25 sq m",
          description:
            "A cozy and elegant room perfect for solo travelers or couples. Equipped with all essential amenities to ensure a comfortable stay, including a private bathroom, a workspace, and a flat-screen TV.",
          description2:
            "Our Standard Room is perfect for travelers seeking comfort and convenience. With a cozy queen-size bed, a functional workspace, and essential amenities, it's ideal for short stays or business trips.",
          price: "4,500",
          image: roomImage1,
          amenities: [
            { icon: wifiIcon, label: "WiFi" },
            { icon: tvIcon, label: "TV" },
            { icon: chairIcon, label: "Desk & Chair" },
            { icon: bathroomIcon, label: "Bathroom" },
          ],
          features: [
            "Comfortable queen-size bed",
            "Air conditioning",
            "32-inch flat-screen TV",
            "Complimentary Wi-Fi",
            "Compact work desk",
            "En-suite bathroom with shower",
            "Basic toiletries",
            "Tea and coffee-making",
            "In-room safe",
          ],
        },
        {
          id: 2,
          name: "Deluxe Room",
          availability: "5 rooms left",
          person: "3 persons",
          bed: "1 King Bed",
          size: "30 to 40 sq m",
          description:
            "A spacious room with modern decor, offering a luxurious experience for small families or couples. Includes a private balcony, minibar, and a 50-inch smart TV.",
          description2:
             "Upgrade your stay in our Deluxe Room, featuring a king-size bed, a spacious seating area, and modern amenities. With a relaxing bathroom and minibar, it's perfect for both business and leisure travelers.",
          price: "6,500",
          image: roomImage1,
          amenities: [
            { icon: wifiIcon, label: "WiFi" },
            { icon: tvIcon, label: "TV" },
            { icon: chairIcon, label: "Desk & Chair" },
            { icon: bathroomIcon, label: "Bathroom" },
          ],
          features: [
            "Spacious king-size bed",
            "Air conditioning",
            "40-inch Smart TV",
            "Complimentary high-speed Wi-Fi",
            "Sofa seating area",
            "Spacious bathroom with bathtub and shower",
            "Luxury toiletries",
            "Bathrobe and slippers",
            "Minibar with snacks and drinks",
            "Nespresso coffee machine",
            "Iron and ironing board",
          ],
        },
        {
          id: 3,
          name: "Executive Suite",
          availability: "Only 2 rooms left",
          person: "4 persons",
          bed: "1 King Bed, 1 Sofa Bed",
          size: "70 to 90 sq m",
          description:
            "A premium suite with separate living and sleeping areas. Ideal for families or business travelers seeking luxury and convenience. Features a kitchenette, work desk, and a stunning city view.",
          descripion2: "Guests can enjoy premium furnishings, a comfortable sofa bed, and a private balcony with breathtaking cityscape views. The suite offers privacy and style for both relaxation and work.",
          price: "12,000",
          image: roomImage1,
          amenities: [
            { icon: wifiIcon, label: "WiFi" },
            { icon: tvIcon, label: "TV" },
            { icon: chairIcon, label: "Desk & Chair" },
            { icon: bathroomIcon, label: "Bathroom" },
          ],
          features: [
            "WiFi",
            "50-inch Smart TV",
            "Spacious work desk and ergonomic chair",
            "Luxury en-suite bathroom with bathtub and shower",
            "Kitchenette with refrigerator and microwave",
            "Complimentary toiletries",
            "Room service available",
            "Private balcony with city view",
          ],
        },
        {
          id: 4,
          name: "Family Room",
          availability: "7 rooms left",
          person: "5 persons",
          bed: "2 Queen Beds",
          size: "50 to 60 sq m",
          description:
            "Designed for families, this room provides ample space and comfort. Includes a dining area, kids' play corner, and a flat-screen TV with kids' channels.",
          descripion2:
            "Families can unwind in a spacious layout that includes a cozy seating area and child-friendly amenities. The room offers a welcoming and safe environment for both parents and kids.",
          price: "8,000",
          image: roomImage1,
          amenities: [
            { icon: wifiIcon, label: "WiFi" },
            { icon: tvIcon, label: "TV" },
            { icon: chairIcon, label: "Desk & Chair" },
            { icon: bathroomIcon, label: "Bathroom" },
          ],
          features: [
            "High-speed WiFi",
            "42-inch flat-screen TV with kids' channels",
            "Dining area with table for four",
            "En-suite bathroom with shower",
            "Complimentary toiletries",
            "Wardrobe and luggage rack",
            "Child-friendly amenities",
            "Tea and coffee-making facilities",
          ],
        },
        {
          id: 5,
          name: "Penthouse Suite",
          availability: "Only 1 room left",
          person: "6 persons",
          bed: "2 King Beds",
          size: "100 to 120 sq m",
          description:
            "Our most luxurious offering, the penthouse suite boasts breathtaking panoramic views, a private rooftop terrace, and premium amenities for an unforgettable stay.",
          descripion2:  
            "This suite is perfect for special occasions, offering a private rooftop retreat with premium furnishings and luxury at every corner. It's the ultimate choice for a truly memorable experience.",
          price: "25,000",
          image: roomImage1,
          amenities: [
            { icon: wifiIcon, label: "WiFi" },
            { icon: tvIcon, label: "TV" },
            { icon: chairIcon, label: "Desk & Chair" },
            { icon: bathroomIcon, label: "Bathroom" },
          ],
          features: [
            "WiFi",
            "60-inch Smart TV",
            "Private rooftop terrace with seating area",
            "Luxury en-suite bathroom with rain shower and bathtub",
            "Fully equipped kitchenette",
            "Complimentary minibar and espresso machine",
            "Evening turndown service",
            "Personalized concierge service",
          ],
        },
        {
          id: 6,
          name: "Single Room",
          availability: "10 rooms left",
          person: "1 person",
          bed: "1 Single Bed",
          size: "15 to 20 sq m",
          description:
            "Perfect for solo travelers, this compact room offers a comfortable stay with essential amenities, including a desk, wardrobe, and high-speed Wi-Fi.",
          descripion2: "With a cozy design and practical furnishings, the Single Room is ideal for short stays or business trips. Enjoy a quiet retreat with all the essentials for a productive day.",
          price: "3,000",
          image: roomImage1,
          amenities: [
            { icon: wifiIcon, label: "WiFi" },
            { icon: tvIcon, label: "TV" },
            { icon: chairIcon, label: "Desk & Chair" },
            { icon: bathroomIcon, label: "Bathroom" },
          ],
          features: [
            "High-speed WiFi",
            "32-inch flat-screen TV",
            "Compact work desk and chair",
            "En-suite bathroom with shower",
            "Basic toiletries",
            "Wardrobe",
            "Tea and coffee-making facilities",
          ],
        } 
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortRooms = (rooms, sortOption) => {
    switch (sortOption) {
      case "availability":
        return rooms.sort((a, b) => {
          const availabilityA = parseInt(a.availability.split(" ")[0]);
          const availabilityB = parseInt(b.availability.split(" ")[0]);
          return availabilityA - availabilityB;
        });
      case "persons":
        return rooms.sort((a, b) => {
          const personsA = parseInt(a.person.split(" ")[0]);
          const personsB = parseInt(b.person.split(" ")[0]);
          return personsA - personsB;
        });
      case "price":
        return rooms.sort((a, b) => parseInt(a.price) - parseInt(b.price));
      default:
        return rooms;
    }
  };

  const sortedRooms = sortRooms([...rooms], sortOption);

  const handleBookClick = (facilityOrRoom) => {
    navigate("/bookingForm", {
      state: {
        checkIn,
        checkOut,
        persons,
        roomOrFacility: {
          id: facilityOrRoom.id,
          name: facilityOrRoom.name,
          price: facilityOrRoom.price,
          description: facilityOrRoom.description,
          image: facilityOrRoom.image,
        },
      },
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
          <div className="select-room-header">
            <div className="select-text">Select a Room</div>
            <div className="sort-controls">
              <label>Sort by: </label>
              <select onChange={handleSortChange} value={sortOption}>
                <option value="availability">Availability</option>
                <option value="persons">Persons</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>
          {sortedRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onBook={() => handleBookClick(room)} // Pass room data when booking
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectRoom;