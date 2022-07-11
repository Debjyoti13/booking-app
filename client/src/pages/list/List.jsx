import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Navbar from "../../components/navbar/Navbar";
import "./list.css";
import { useLocation } from "react-router";
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';

export const List = () => {
  const location=useLocation();
  const[destination,setDestination]=useState(location.state.destination);
const[date,setDate]=useState(location.state.date);
const[openDate,setOpenDate]=useState(false);

const[options,setOptions]=useState(location.state.options);


  console.log(location);
  return (
    <div>
      <Navbar />
      <Header type="list"></Header>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="lsItem">
              <div className="lsOptions">
                <label className="lsOptionItem">Destination</label>
                <input placeholder={destination} type="text"></input>
              </div>
              <div className="lsItem">
                <label>Check-in-Date{"->"}</label>
                <span onClick={() => setOpenDate(!openDate)}>
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </span>
                {openDate && (
                  <DateRange
                    onChange={item => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                  ></DateRange>
                )}
              </div>
              <div className="lsOptionItem">
                <span className="isOptionText">
                  Min price <small> per night</small>
                </span>
                <input type="number" className="isOptionInput"></input>
              </div>
              <div className="lsOptionItem">
                <span className="isOptionText">
                  Max price<small> per night</small>
                </span>
                <input type="number" className="isOptionInput"></input>
              </div>
              <div className="lsOptionItem">
                <span className="isOptionText">Adult</span>
                <input
                  placeholder={options.adult}
                  type="number"
                  min={1}
                  className="isOptionInput"
                ></input>
              </div>
              <div className="lsOptionItem">
                <span className="isOptionText">Children</span>
                <input
                  type="number"
                  min={0}
                  className="isOptionInput"
                  placeholder={options.children}
                ></input>
              </div>
              <div className="lsOptionItem">
                <span className="isOptionText">Room</span>
                <input
                  type="number"
                  min={1}
                  className="isOptionInput"
                  placeholder={options.room}
                ></input>
              </div>

              <button className="optionSearchButton">Search</button>
            </div>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
}
