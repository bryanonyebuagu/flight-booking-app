
import styles from "./Cityitem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "./contexts/CitiesContext";



function Cityitem({ city }) {
    const { currentCity } = useCities();
    const { cityName, date, id, position } = city;

    function flagemojiToPNG(flag) {
        let countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
            .map((char) => String.fromCharCode(char - 127397).toLowerCase())
            .join("");
        return (
            <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
        );
    }
    return (
        <li>
            <Link
                className={`${styles.cityItem} ${
                    id === currentCity.id ? styles["cityItem--active"] : ""
                }`}
                to={`${id}?lat=${position.lat}&lng=${position.lng}`}
            >
                <span className={styles.countryItem}>
                    {flagemojiToPNG(city.emoji)}
                </span>
               
                <time className={styles.date}>({(date)})</time>
                <button className={styles.deleteBtn}>&times;</button>
            </Link>
        </li>
    );
}

export default Cityitem;
