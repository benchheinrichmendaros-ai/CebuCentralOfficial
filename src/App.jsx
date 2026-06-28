import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Transport from './pages/Transport';
import Weather from './pages/Weather';
import Emergency from './pages/Emergency';
import BeforeYouGo from './pages/BeforeYouGo';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/before-you-go" element={<BeforeYouGo />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
