import React, {Component} from "react";
import '../css/styles.css'

class Footer extends React.Component {
    render(){
        return (
            <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Alamat Saya</h4>
                        <p className="lead mb-0">
                            Jalan Cicalengka Raya No. 32
                            <br />
                            Kelurahan Antapani Kidul
                            <br />
                            Kecamatan Antapani
                            <br />
                            Kota Bandung
                            <br/>
                            40291
                        </p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Akun Media Sosial</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://en-gb.facebook.com/galvin.nurullah.1"><i className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://line.me/ti/p/galvineka"><i className="fab fa-fw fa-line"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/nurullah_ge19/"><i className="fab fa-fw fa-instagram"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://api.whatsapp.com/send/?phone=6289667629503&text&type=phone_number&app_absent=0"><i className="fab fa-fw fa-whatsapp"></i></a>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">Belajar Debian</h4>
                        <p className="lead mb-0">
                            Debian adalah sistem operasi yang disediakan secara gratis untuk penggunanya. Karena sifatnya yang open source, kamu pun bisa ikut mengembangkan sistem operasi ini. Debian menggunakan kernel Linux sebagai basis sistem operasinya. <br></br>
                            <a href="https://youtu.be/4Dz0msE-z9k">Instalasi Debian</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        );
    }
}
   
export default Footer;
