import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./BtcPayment.module.css";
import btcQrImage from "../assets/btc-qr.jpg";

const BTC_ADDRESS = "bc1qcvytgd5m5hctuspd33mefd72usg25aq5jxd8vj";
const BTC_CURRENT_PRICE = 91426; // fixed BTC price
const PAYMENT_TIME_MINUTES = 15;
const NETWORK_FEE = 1; // $1 network fee

// Map flight class to price
const CLASS_PRICES = {
  Economy: 999,
  Business: 1499,
  "First Class": 2999,
};

export default function BtcPayment() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedClass = location.state?.cabin || "Economy"; // get class from previous page

  const baseUsdAmount = CLASS_PRICES[selectedClass];
  const [usdAmount, setUsdAmount] = useState(baseUsdAmount);
  const [btcAmount, setBtcAmount] = useState(((usdAmount + NETWORK_FEE) / BTC_CURRENT_PRICE).toFixed(8));
  const [timeLeft, setTimeLeft] = useState(PAYMENT_TIME_MINUTES * 60);
  const [copied, setCopied] = useState("");

  // Update BTC amount whenever USD amount changes
  useEffect(() => {
    const calculated = ((usdAmount + NETWORK_FEE) / BTC_CURRENT_PRICE).toFixed(8);
    setBtcAmount(calculated);
  }, [usdAmount]);

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;
    return min + ":" + sec.toString().padStart(2, "0");
  };

  const copyText = text => {
    navigator.clipboard.writeText(text);
    setCopied("Copied!");
    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <h2>Bitcoin Payment</h2>

        <div className={styles.timer}>
          Time remaining: <strong>{formatTime()}</strong>
        </div>

        <div className={styles.row}>
          <span>Flight Class:</span>
          <strong>{selectedClass}</strong>
        </div>

        {/* Amounts */}
        <div className={styles.row}>
          <span>Amount to Pay:</span>
          <strong>${usdAmount.toLocaleString()}</strong>
        </div>

        <div className={styles.row}>
          <span>Network Fee:</span>
          <strong>${NETWORK_FEE}</strong>
        </div>

        <div className={styles.row}>
          <span>Total to Send:</span>
          <strong>${(usdAmount + NETWORK_FEE).toLocaleString()}</strong>
        </div>

        <div className={styles.row}>
          <span>Current BTC Price:</span>
          <strong>${BTC_CURRENT_PRICE.toLocaleString()}</strong>
        </div>

        <div className={styles.row}>
          <span>Send this BTC:</span>
          <strong>{btcAmount} BTC</strong>
        </div>

        {/* BTC QR Code */}
        <div className={styles.qrBox}>
          <img src={btcQrImage} alt="BTC QR code" className={styles.qrImage} />
          <p>Scan to pay</p>
        </div>

        {/* BTC Address */}
        <div className={styles.addressBox}>
          <p>BTC Address</p>
          <div
            className={styles.address + " " + styles.clickable}
            onClick={() => copyText(BTC_ADDRESS)}
          >
            {BTC_ADDRESS}
          </div>
        </div>

        <div className={styles.network}>
          ⚠ Network: <strong>Bitcoin (BTC)</strong><br />
          Only send BTC on the Bitcoin network. Do NOT send via ERC-20, BSC, TRC-20, or other networks.
        </div>

        {copied && <div className={styles.toast}>{copied}</div>}

        <div className={styles.buttons}>
          <button
            className={styles.cancel}
            onClick={() => navigate("/payment")}
          >
            Cancel Payment
          </button>

          <button
            className={styles.confirm}
            onClick={() => navigate("/payment/success")}
          >
            I Have Sent Payment
          </button>
        </div>
      </div>
    </div>
  );
}