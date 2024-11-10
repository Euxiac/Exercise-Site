import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import BitcoinRatesCombined from "../components/BitcoinRatesCombined";
import BitcoinRatesHooked from "../components/BitcoinRatesHooked";
import BitcoinRatesHookedReduced from "../components/BitcoinRatesHookedReduced";
import LoginForm from "../components/LoginForm";

export default function AppRoutes(props) {

    return (
        <Routes>
            <Route index element={<Homepage {...props} />} />
            <Route path="login" element={<LoginForm {...props} />} />
            <Route path="bitcoin" element={<><BitcoinRatesCombined /> <hr /> <BitcoinRatesHooked /> <hr /> <BitcoinRatesHookedReduced /> </>} />
        </Routes>
    )
}