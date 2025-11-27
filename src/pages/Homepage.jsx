import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
    return (
        <main className={styles.homepage}>
            <PageNav />

            <section>
                <h1>
                    You travel the world.
                    <br />
                    WorldWise Agency handles your flight bookings.
                </h1>
                <h2>
                    At WorldWise Agency, we believe every journey begins with a
                    decision to explore. Whether you’re traveling for adventure,
                    business, or rest, we’re here to guide you every step of the
                    way—from booking to boarding.
                </h2>
                <Link to="/app" className="cta">
                    Start booking now!
                </Link>
            </section>
        </main>
    );
}
