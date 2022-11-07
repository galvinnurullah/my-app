import './App.css';
import Navbar from './blog/Navbar';
import Footer from './blog/Footer';
import Copyright from './blog/Copyright';
import Galeri from './blog/Galeri';
import Tentang from './blog/Tentang';
import Kontak from './blog/Kontak';
import Beranda from './blog/Beranda';
import DetailGambar from './blog/DetailGambar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="Component">
    <Navbar/>
    <Router>
        <Routes>
          <Route exact path='/' element={<Beranda/>}/> <Route/>
          <Route exact path='/galeri' element={<Galeri/>}/> <Route/>
          <Route exact path='/tentang' element={<Tentang/>}/> <Route/>
          <Route exact path='/kontak' element={<Kontak/>}/> <Route/>
          <Route exact path='/galeri/gambar/:id' element={<DetailGambar/>}/> <Route/>
        </Routes>
      </Router>
    <Footer/>
    <Copyright/>
</div>
  );
}

export default App;
