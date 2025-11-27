// src/pages/PaymentSuccess.jsx

import styles from "./PaymentSuccess.module.css";

export default function PaymentSuccess() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>✅ PAYMENT SUBMITTED</h1>

        <p className={styles.mainText}>
          Your payment has been received successfully.
        </p>

        <p className={styles.note}>
          We will notify you immediately once your payment is confirmed.
        </p>

        <div className={styles.infoBox}>
          <p>
            📩 <strong>Your ticket ID and departure details</strong> will be
            sent to your email address shortly.
          </p>
          <p>
            ⏱ Please allow a few minutes for confirmation to reflect.
          </p>
        </div>

        <p className={styles.footer}>
          Thank you for booking with us. Safe travels ✈
        </p>
      </div>
    </div>
  );
}