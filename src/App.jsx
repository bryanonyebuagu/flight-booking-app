import { Routes, Route, Navigate } from "react-router-dom";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import Form from "./components/Form";
import FlightSearch from "./components/FlightSearch";

import { CitiesProvider } from "./components/contexts/CitiesContext";

import SelectPayment from "./pages/SelectPayment";
import BtcPayment from "./pages/BtcPayment";
import PaymentSuccess from "./pages/PaymentSuccess";

function App() {
  return (
    <CitiesProvider>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />

        {/* FLIGHT SEARCH */}
        <Route path="book-flight" element={<FlightSearch />} />

        {/* PAYMENT ROUTES */}
        <Route path="payment" element={<SelectPayment />} />
        <Route path="payment/btc" element={<BtcPayment />} />
        <Route path="payment/success" element={<PaymentSuccess />} />

        {/* APP DASHBOARD */}
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate to="cities" replace />} />
          <Route path="cities" element={<CityList />} />
          <Route path="countries" element={<CountryList />} />
          <Route path="form" element={<Form />} />
        </Route>

        {/* ERROR */}
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </CitiesProvider>
  );
}

export default App;