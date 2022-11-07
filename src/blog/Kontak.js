import React, {Component} from "react";
import '../css/styles.css';

class Kontak extends React.Component {
    render(){
        return(
            <section className="page-section" id="kontak">
            <div className="container"></div>
                <h2 className="page-section-heading text-center text-capitalizeeachword text-secondary mb-0">Kontak</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-phone"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div class="row justify-content-center">
                <div class="col-lg-8 col-xl-7">
                <form name="kontak" method="post" action="" id="contactForm" autocomplete="off">
                    <div class="form-floating mb-3">
                        <input className="form-control" id="nama" type="text" placeholder="Isikan nama lengkap..." autofocus required oninvalid="this.setCustomValidity('Nama Harus Diisi')" oninput="this.setCustomValidity('')"/>
                        <label for="nama">Nama</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input className="form-control" id="email" type="email" placeholder="nama@example.com" autofocus required oninvalid="this.setCustomValidity('Email Harus Diisi')"  oninput="this.setCustomValidity('')"/>
                        <label for="email">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input className="form-control" id="website" type="url" placeholder="www.example.com" autofocus required oninvalid="this.setCustomValidity('Website Harus Diisi')"  oninput="this.setCustomValidity('')"/>
                        <label for="website">Website</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" id="alamat" type="text" placeholder="Isikan alamat anda..." autofocus required oninvalid="this.setCustomValidity('Alamat Harus Diisi')"  oninput="this.setCustomValidity('')"></textarea>
                        <label for="alamat">Alamat</label>
                    </div>
                    <button class="btn btn-primary btn-xl active" id="submitButton" type="submit">Kirim</button>
                    <button class="btn btn-primary btn-xl active" id="resetButton" type="reset">Reset</button>
                </form>
                </div>
                </div>
        </section>
        );
    }
}

export default Kontak;