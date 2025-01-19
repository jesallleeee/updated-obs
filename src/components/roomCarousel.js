import { useState } from "react";
import roomsimg1 from "../assets/roomss.jpg";
import './roomCarousel.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const RoomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const rooms = [
    { img: roomsimg1, title: "Standard Room", desc: "A small room for solo travelers with a single bed and basic amenities like a bathroom and Wi-Fi." },
    { img: roomsimg1, title: "Double Room", desc: "A room for two with a double bed or twin beds and standard amenities like a bathroom and TV." },
    { img: roomsimg1, title: "Suite", desc: "A spacious room with separate living and sleeping areas, offering premium amenities." },
    { img: roomsimg1, title: "Family Room", desc: "A large room for families with multiple beds and kid-friendly amenities." },
    { img: roomsimg1, title: "Luxury Suite", desc: "An ultra-spacious suite with high-end amenities, ideal for VIP guests." },
    { img: roomsimg1, title: "Penthouse", desc: "An exclusive top-floor suite with panoramic views and luxury features." },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? rooms.length - 3 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === rooms.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <div className="rooms-cards-sec-carousel">
        <button className="arrow-button left-arrow-button" onClick={handlePrev}>
        <i className="fas fa-chevron-left"></i>
        </button>
      <div className="rooms-carousel" >
        {rooms.slice(currentIndex, currentIndex + 3).map((room, index) => (
          <div className="room-card-sec-carousel" key={index}>
            <img src={room.img} alt={room.title} className="room-image-sec-carousel" />
            <h3>{room.title}</h3>
            <p>{room.desc}</p>
          </div>
        ))}
      </div>
        <button className="arrow-button right-arrow-button" onClick={handleNext}>
        <i className="fas fa-chevron-right"></i>
        </button>
    </div>
  );
};

export default RoomCarousel;