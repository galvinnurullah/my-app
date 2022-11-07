import React, {Component} from "react";
import '../css/styles.css'
import foto from '../foto/galvin.png'

class Header extends React.Component {
    render(){
        return (
            <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <span className="profil">
                <img src={foto} alt="Foto Galvin" />
                </span>
                <br></br>
                <br></br>
                <h1 className="masthead-heading text-uppercase mb-0">Galvin Eka Nurullah</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-arrow"></div>
                    <div className="divider-custom-icon"><i className="fas fa-computer"></i></div>
                    <div className="divider-custom-arrow"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">-- Mahasiswa S1 Pendidikan Ilmu Komputer --</p>
            </div>
        </header>

        );
    }
}
   
export default Header;
