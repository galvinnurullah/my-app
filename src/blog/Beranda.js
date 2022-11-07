import Header from './Header';
import Galeri from './Galeri';
import Tentang from './Tentang';
import Kontak from './Kontak';

function Beranda() {
  return (
    <div className="Component">
        <Header/>
        <Galeri/> 
        <Tentang/> 
        <Kontak/>
    </div>
  );
}

export default Beranda;