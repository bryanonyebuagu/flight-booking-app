import { useNavigate } from "react-router-dom";
import styles from "./SelectPayment.module.css";

export default function SelectPayment() {
  const navigate = useNavigate();

  return (
    <div className={styles.payWrapper}>

      <div className={styles.payBox}>
        <h2>Select payment method</h2>
        <p className={styles.sub}>Choose how you want to complete your booking</p>

        <div className={styles.payGrid}>

          <div className={`${styles.payCard} ${styles.active}`}
               onClick={() => navigate("/payment/btc")}>
            <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="Bitcoin" />
            <span>Bitcoin (BTC)</span>
          </div>

          <div className={`${styles.payCard} ${styles.locked}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
            <span>PayPal</span>
            <small>Unavailable</small>
          </div>

          <div className={`${styles.payCard} ${styles.locked}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Venmo_logo.png" alt="Venmo" />
            <span>Venmo</span>
            <small>Unavailable</small>
          </div>

          <div className={`${styles.payCard} ${styles.locked}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Cash_App_logo.svg" alt="CashApp" />
            <span>Cash App</span>
            <small>Unavailable</small>
          </div>

        </div>
      </div>

    </div>
  );
}