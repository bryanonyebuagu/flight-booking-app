import styles from "./Product.module.css";
import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWise.</h2>
          <p>
           WorldWise is your trusted travel companion, redefining the way you plan and book flights.  WorldWise ensures a seamless experience whether you’re planning a business trip, a family vacation, or an adventurous getaway.
          </p>
          <p>
           Our mission is to make travel smarter, faster, and more enjoyable, so you can focus on exploring the world with confidence and ease.
          </p>
          <Link to="/app" className="cta">
                    Start booking now!
                </Link>
        </div>
      </section>
    </main>
  );
}
