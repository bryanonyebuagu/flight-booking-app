// Uses the same styles as Product
import styles from "./Product.module.css";
import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
          <h2>
            Smart fares.
            <br />
            Transparent prices.
          </h2>
          <p>
            Clear prices, no hidden fees.
Affordable fares for every journey.
Travel smarter with WorldWise
          </p>
           <Link to="/app" className="cta">
                    Start booking now!
                </Link>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
