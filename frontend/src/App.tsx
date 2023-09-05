import { Routes, Route } from "react-router-dom";
import { Auth, Donate, Dashboard, Donations, Home, NotFound } from "./pages";
import { RootLayout } from "./components/Layouts";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/donations-dashboard" element={<Dashboard />} />
        <Route path="/donations-all" element={<Donations />} />
      </Route>
      <Route path="/donate" element={<Donate />} />
    </Routes>
  );
}

export default App;
