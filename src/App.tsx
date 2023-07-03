import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/profile/ProfilePage";
import Layout from "./components/layout/Layout";
import AboutUs from "./pages/about-us/AboutUs";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="tentangkami" element={<AboutUs />} />
        <Route path="kontak" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;

