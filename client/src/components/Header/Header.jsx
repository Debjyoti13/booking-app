import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCarAlt,
  faPerson
} from "@fortawesome/free-solid-svg-icons";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { DateRange } from "react-date-range";
//date range css files
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
const Header = ({ type }) => {
  //date range code from documentation
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(), //we don't leave start and end date as null it will  give error
      key: "selection"
    }
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  });
  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1
      };
    });
  };
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/hotels", {
      state: {
        destination,
        date,
        options
      }
    });
  };
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItemactive">
            <FontAwesomeIcon icon={faBed} /> <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCarAlt} />
            <span>Cars</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">A lifetime of discount</h1>
            <p className="headerDesc">
              Get rewarded for your travels-unlock instant savings of 10% or
              more
            </p>
            <button className="headerButton">Sign in/Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerSearchInput" />
                <input
                  type="text"
                  placeHolder="where are you going"
                  className="headerSearchInput"
                  onChange={e => setDestination(e.target.value)}
                ></input>
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)} //state change for showing the calendar widget
                  className="headerSearchText"
                >
                  {`${format(date[0].startDate, "MM/dd/yyyy")}to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </span>

                {openDate === true && (
                  <DateRange //opendate is used so that the calendar widget doest render as soon as the page loads
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])} //this is going to update our date
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  ></DateRange>
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOption)}
                  className="headerSearchItem"
                >
                  {`${options.adult} Adult . ${options.children} children . ${options.room} room`}
                </span>
                {openOption === true && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {" "}
                          {options.adult}{" "}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText"> Children </span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          disabled={options.children === 0}
                          onClick={() => handleOption("children", "d")}
                        >
                          {" "}
                          -{" "}
                        </button>
                        <span className="optionCounterNumber">
                          {" "}
                          {options.children}{" "}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                          disabled={options.room <= 1}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {" "}
                          {options.room}
                        </span>
                        <button
                          onClick={() => handleOption("room", "i")}
                          className="optionCounterButton"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button onClick={handleSearch} className="headerButton">
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
