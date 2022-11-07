import React, {Component} from "react";
import '../css/styles.css'
import galvin2 from '../foto/doa.jpeg'

class Tentang extends React.Component {
    render(){
        return (
        <section className="page-section bg-primary text-white mb-0" id="tentang">
            <div className="container"></div>
                <h2 className="page-section-heading text-center text-capitalizeeachword text-white">Tentang Saya</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-question"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <span className="image-1">
                <center><img src={galvin2} alt="Foto Galvin" width="500" height="500"/></center><br></br>
                </span>
                <div className="row">
                    <div className="col-lg-4 ms-auto"><p className="justify">Saya adalah seorang mahasiswa semester 3 prodi Pendidikan Ilmu Komputer, Fakultas Pendidikan Matematika dan Ilmu Pengetahuan Alam, Universitas Pendidikan. Saya lahir di sebuah kota kecil yakni Majalengka, pada tanggal 19 Desember 2002. Minat dan skill adalah di dunia jaringan komputer, saya bisa mendesain arsitektur jaringan, mengelola administrator jaringan menggunakan SOJ, dan juga membangun jaringan VoIP menggunakan Trixbox.</p></div>
                    <div className="col-lg-4 me-auto"><p className="justify">Selain berkuliah, saya juga aktif mengikuti berbagai organisasi di kampus. Saya juga merupakan salah satu Awardee Beasiswa Pendidikan Indonesia Kemendikbudristek Tahun 2022. Selain itu, saya juga sudah memulai membangun bisnis sejak kuliah. Kunjungi link berikut untuk mengetahui secara singkat tentang saya!</p></div>
                </div>
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href="https://www.youtube.com/watch?v=MJAey_bDAz0">
                        <i className="fas fa-link"></i>
                        LINK YOUTUBE!
                    </a>
                </div>
        </section>
        );
    }
}
   
export default Tentang;
