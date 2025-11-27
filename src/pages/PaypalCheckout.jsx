// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// export default function PayPalCheckout() {
//   return (
//     <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>
//       <PayPalButtons
//         createOrder={async () => {
//           const res = await fetch("http://localhost:4000/create-order", {
//             method: "POST",
//           });
//           const data = await res.json();
//           return data.id; // PayPal order ID returned from backend
//         }}
//         onApprove={async (data) => {
//           const res = await fetch("http://localhost:4000/capture-order", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ orderID: data.orderID })
//           });

//           const result = await res.json();

//           if (result.status === "COMPLETED") {
//             alert("Payment Successful! Ticket can be issued ✅");
//           } else {
//             alert("Payment Failed ❌");
//           }
//         }}
//       />
//     </PayPalScriptProvider>
//   );
// }