import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Cityitem from "./Cityitem";
import Message from "./Message";
import { useCities } from "./contexts/CitiesContext";
import FlightSearch from "./FlightSearch";

function CityList() {
  const { cities, isLoading } = useCities();

  return (
    <>
      {/* ✅ BOOKING ALWAYS VISIBLE */}
      <FlightSearch />

      {/* ✅ SPINNER */}
      {isLoading && <Spinner />}

      {/* ✅ EMPTY STATE */}
     

      {/* ✅ CITY LIST */}
      {!isLoading && cities.length > 0 && (
        <ul className={styles.cityList}>
          {cities.map((city) => (
            <Cityitem key={city.id} city={city} />
          ))}
        </ul>
      )}
    </>
  );
}

export default CityList;