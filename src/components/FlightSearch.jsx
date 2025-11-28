import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FlightSearch.module.css";

const CITIES = [
  "San Francisco, USA",
  "New York, USA",
  "Los Angeles, USA",
  "Chicago, USA",
  "Miami, USA",
  "Oslo, Norway",
  "Viken, Norway",
  "Innlandet, Norway",
  "Vestfold og Telemark, Norway",
  "Agder, Norway",
  "Rogaland, Norway",
  "Vestland, Norway",
  "Møre og Romsdal, Norway",
  "Trøndelag, Norway",
  "Nordland, Norway",
  "Troms og Finnmark, Norway",
];

const CITY_AIRLINES = {
  "San Francisco, USA": ["United", "Delta", "American Airlines"],
  "New York, USA": ["Delta", "JetBlue", "United"],
  "Los Angeles, USA": ["American Airlines", "Delta", "Southwest"],
  "Chicago, USA": ["United", "American Airlines"],
  "Miami, USA": ["American Airlines", "JetBlue"],
  "Oslo, Norway": ["SAS", "Norwegian Air Shuttle"],
  "Viken, Norway": ["SAS"],
  "Innlandet, Norway": ["Norwegian Air Shuttle"],
  "Vestfold og Telemark, Norway": ["SAS"],
  "Agder, Norway": ["SAS"],
  "Rogaland, Norway": ["Norwegian Air Shuttle"],
  "Vestland, Norway": ["SAS"],
  "Møre og Romsdal, Norway": ["SAS"],
  "Trøndelag, Norway": ["SAS"],
  "Nordland, Norway": ["SAS"],
  "Troms og Finnmark, Norway": ["SAS"],
};

const CABIN_PRICES = { Economy: 999 };

export default function FlightSearch() {
  const navigate = useNavigate();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [tripType, setTripType] = useState("round");
  const [passengers, setPassengers] = useState("");
  const [cabin, setCabin] = useState("");
  const [email, setEmail] = useState("");

  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);

  const handleFromChange = (e) => {
    const value = e.target.value;
    setFrom(value);

    const filtered = CITIES.filter(city =>
      city.toLowerCase().includes(value.toLowerCase())
    ).map(city => ({ city, airlines: CITY_AIRLINES[city] || [] }));

    setFromSuggestions(filtered);
  };

  const handleToChange = (e) => {
    const value = e.target.value;
    setTo(value);

    const filtered = CITIES.filter(city =>
      city.toLowerCase().includes(value.toLowerCase())
    ).map(city => ({ city, airlines: CITY_AIRLINES[city] || [] }));

    setToSuggestions(filtered);
  };

  const selectFromSuggestion = (val) => {
    setFrom(val);
    setFromSuggestions([]);
  };

  const selectToSuggestion = (val) => {
    setTo(val);
    setToSuggestions([]);
  };

  const allFieldsFilled =
    from && to && departDate && (tripType === "oneway" || returnDate) && passengers && cabin && email;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!allFieldsFilled) return;
    navigate("/payment/btc", { state: { cabin, price: CABIN_PRICES[cabin] } });
  };

  return (
    <form className={styles.card} onSubmit={handleSubmit}>
      {/* Trip Type */}
      <div className={styles.tabs}>
        <button type="button" onClick={() => setTripType("round")} className={tripType === "round" ? styles.active : styles.tab}>Round-trip</button>
        <button type="button" onClick={() => setTripType("oneway")} className={tripType === "oneway" ? styles.active : styles.tab}>One-way</button>
        <button type="button" disabled className={styles.tabDisabled}>Multi-city</button>
      </div>

      {/* From Input */}
      <div style={{ position: "relative" }}>
        <input placeholder="From" value={from} onChange={handleFromChange} />
        {fromSuggestions.length > 0 && (
          <ul className={styles.suggestions}>
            {fromSuggestions.map((item, index) => (
              <li key={index} onClick={() => selectFromSuggestion(item.city)}>
                <strong>{item.city}</strong>
                {item.airlines.length > 0 && (
                  <span className={styles.airlineList}>
                    ({item.airlines.join(", ")})
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* To Input */}
      <div style={{ position: "relative" }}>
        <input placeholder="To" value={to} onChange={handleToChange} />
        {toSuggestions.length > 0 && (
          <ul className={styles.suggestions}>
            {toSuggestions.map((item, index) => (
              <li key={index} onClick={() => selectToSuggestion(item.city)}>
                <strong>{item.city}</strong>
                {item.airlines.length > 0 && (
                  <span className={styles.airlineList}>
                    ({item.airlines.join(", ")})
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Email */}
      <div className={styles.emailSection}>
       <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={e => setEmail(e.target.value)}
  required
/>
        <p>Ticket details, flight plan, and payment info will be sent to your email.</p>
      </div>

      {/* Dates */}
      <input type="date" value={departDate} onChange={e => setDepartDate(e.target.value)} />
      {tripType === "round" && (
        <input type="date" value={returnDate} onChange={e => setReturnDate(e.target.value)} />
      )}

      {/* Passengers & Cabin */}
      <input type="number" min="1" placeholder="Passengers" value={passengers} onChange={e => setPassengers(e.target.value)} />
      <select value={cabin} onChange={(e) => setCabin(e.target.value)} className={styles.cabinSelect}>
        <option value="" disabled hidden>Select Cabin</option>
        <option value="Economy">Economy - $999</option>
        <option value="Business" disabled className={styles.booked}>Business - Fully Booked</option>
        <option value="First Class" disabled className={styles.booked}>First Class - Fully Booked</option>
      </select>

      <button
        type="button"
        className={allFieldsFilled ? styles.search : styles.searchDisabled}
        onClick={() => { if (!allFieldsFilled) return; navigate("/payment"); }}
      >
        Book Flight
      </button>
    </form>
  );
}