import { Routes, Route } from "react-router-dom";
import { Auth, Donate, DonationStats, Home } from "./pages";
import { RootLayout } from "./components/Layouts";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="*">"404 Not Found"</Route>"
      </Route>
      <Route path="/donate" element={<Donate />} />
      <Route path="/donation-stats" element={<DonationStats />} />
    </Routes>
  );
}

export default App;
