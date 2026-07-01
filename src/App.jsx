import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Transport from './pages/Transport';
import Weather from './pages/Weather';
import Emergency from './pages/Emergency';
import BeforeYouGo from './pages/BeforeYouGo';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Transport sub-pages
import Ferry from './pages/transport/Ferry';
import Flights from './pages/transport/Flights';
import Taxi from './pages/transport/Taxi';
import BusPage from './pages/transport/Bus';
import Jeepney from './pages/transport/Jeepney';
import Habal from './pages/transport/Habal';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/transport"     element={<Transport />} />
          <Route path="/transport/ferry"   element={<Ferry />} />
          <Route path="/transport/flights" element={<Flights />} />
          <Route path="/transport/taxi"    element={<Taxi />} />
          <Route path="/transport/bus"     element={<BusPage />} />
          <Route path="/transport/jeepney" element={<Jeepney />} />
          <Route path="/transport/habal"   element={<Habal />} />
          <Route path="/weather"       element={<Weather />} />
          <Route path="/emergency"     element={<Emergency />} />
          <Route path="/before-you-go" element={<BeforeYouGo />} />
          <Route path="/about"          element={<About />} />
<Route path="/contact"        element={<Contact />} />
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

