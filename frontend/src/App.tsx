import { Routes, Route } from "react-router-dom";
import { Auth, Donate, Dashboard, Donations, Home } from "./pages";
import { RootLayout } from "./components/Layouts";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="*">"404 Not Found"</Route>
        <Route path="/donations-dashboard" element={<Dashboard />} />
        <Route path="/donations-all" element={<Donations />} />
      </Route>
      <Route path="/donate" element={<Donate />} />
    </Routes>
  );
}

export default App;
