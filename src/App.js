import React, { useState } from "react";
import "./styles.css";

const TravelDictonary = {
  Mumbai: [
    {
      name: "Gate of India",
      Loaction: "Apollo Bandar,Colaba,Mumbai",
      Timings: "24*7,Everyday",
      image:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Gateway-of-India-1.jpg"
    },
    {
      name: "Sanjay Gandhi National",
      Loaction: "Borivali East, Mumbai",
      Timings: "07:30 am to 06:30 pm; closed on Mondays",
      image:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Sanjay-Gandhi-National-Park-1.jpg"
    },
    {
      name: "Elephanta caves",
      Loaction: "Gharapuri, Mumbai",
      Timings: "9:00 am to 5:30 pm; closed on Mondays",
      image:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Elephenta-Caves.jpg"
    }
  ],
  Amritsar: [
    {
      name: "Golden temple",
      Loaction: "Golen temple road,AttaMAndi,Katra Ahluwalia",
      Timings: "24*7,Everyday",
      image:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/08/Golden-Temple.jpg"
    },
    {
      name: "Wagaah Border",
      Loaction: "Wagah, Hardo Rattan",
      Timings:
        "4:15 pm to 05:00 pm (For the ceremony during winter)\
    05:15 pm to 06:00 pm (For the ceremony during summer)",
      image:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/08/Wagah-Border.jpg"
    },
    {
      name: "Ram Tirath Ashram",
      Loaction: "Ram Tirath Road, Kaler",
      Timings: "05:00 am to 09:00 pm; every day",
      image:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/08/Ram-Tirath-Ashram.jpg"
    }
  ],
  Bangalore: [
    {
      name: "Bangalore Palace",
      Loaction: "Near Cubbon Park Metro Station",
      Timings: "10:00 am to 5:00 pm",
      image:
        "https://www.karnataka.com/wp-content/uploads/2010/09/bangalore-palace-main-entrance.jpg"
    },
    {
      name: "UB City Mall",
      Loaction: "Near Cubbon Park Metro Station",
      Timings: "Stores (11:00 to 8:00 pm); restaurants (11:00 am to 11:30 pm)",
      image:
        "https://thumbs.dreamstime.com/z/ub-city-mall-bangalore-india-march-first-luxury-145943844.jpg"
    },
    {
      name: "Innovative Film City,",
      Loaction: "Abbanakuppe Bus Stand",
      Timings: "10:00 am to 7:00 pm",
      image:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/06/Amusement-Parks_1000x650_SubHeadImages_210618.jpg"
    }
  ]
};

export default function App() {
  const [Placename, setPlacename] = useState("Mumbai");

  function OnClickHandler(name) {
    var place = name.target.innerHTML;
    setPlacename(place);
  }

  return (
    <div>
      <header className="header">
        <h1 className="header h1-style">TravelBuddy</h1>
        <p className="header p-style">
          Here's our best recommendation for your next Travelplan
        </p>
      </header>
      <div className="btn-container">
        <button className="btn-input" onClick={OnClickHandler}>
          Mumbai
        </button>
        <button className="btn-input" onClick={OnClickHandler}>
          Amritsar
        </button>
        <button className="btn-input" onClick={OnClickHandler}>
          Bangalore
        </button>
      </div>
      <div>
        <ul>
          {TravelDictonary[Placename].map((place) => (
            <li className="list-container clearfix" key={place.name}>
              {""}

              <div className="name">{place.name}</div>
              <img className="img left" alt="city" src={place.image} />
              <div className="loaction right">Loaction:{place.Loaction}</div>
              <div className="time right">Timimg:{place.Timings}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
