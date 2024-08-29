import React, { useContext, useState } from "react";

import "./reserveModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ReserveModal = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error, reFetch } = useFetch(`/hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext);

  const navigate = useNavigate();

  const getDatesInRange = ( startDate, endDate ) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  const allDates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);

  const isRoomAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;

    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((room) => room !== value)
    );
  };

  const handleClickReserve = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: allDates,
          });
          console.log(res.data);
          return res.data;
          
        })
      );
        setOpen(false);
    } catch (error) { }
  };

  return (
    <div className="reserveModal">
      <div className="reserveContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="closeModal"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {data.map((room, i) => (
          <div key={i} className="room">
            <div className="roomInfo">
              <div className="roomTitle">{room.title}</div>
              <div className="roomDesc">{room.description}</div>
              <div className="roomPrice">{room.price}</div>
              <div className="roomMax">Max persons: {room.maxPersons}</div>
            </div>
            <div className="selectRooms">
              {room.roomNumbers.map((roomNumber) => (
                <div className="roomNums">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    disabled={!isRoomAvailable(roomNumber)}
                    value={roomNumber._id}
                    onChange={handleSelect}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className="roomButton" onClick={handleClickReserve}>
          Reserve
        </button>
      </div>
    </div>
  );
};

export default ReserveModal;