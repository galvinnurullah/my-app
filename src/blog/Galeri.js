import React, {Component} from "react";
import '../css/styles.css'
import lomba from '../foto/1.jpg'
import arise from '../foto/2.JPG'
import ukdm from '../foto/3.HEIC.jpg'
import ngaji from '../foto/4.JPG'
import delegasi from '../foto/6.jpg'
import kajian from '../foto/7.jpeg'

class Galeri extends React.Component {
    render(){
        return (
            <section className="page-section portfolio" id="beranda">
            <div className="container">
                <h2 className="page-section-heading text-center text-capitalizeeachword  text-secondary mb-0">Galeri</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-home"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={lomba} alt="Lomba Anak Islami" />
                        </div>
                    </div>
                    <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Lomba Anak Islami</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={lomba} alt="Lomba Anak Islami" />
                                        <p className="mb-4">Lomba anak islami merupakan sebuah acara yang diselenggarakan dengan tujuan agar anak-anak memiliki semangat dan motivasi untuk terus belajar dan memiliki keterampilan di bidang keagamaan tertentu, seperti misalnya di bidang tilawatil qur'an.</p>
                                        <h2><a href="/galeri/gambar/1">Info Gambar</a></h2>
                                        <button className="btn btn-primary" data-bs-dismiss="modal">
                                            <i className="fas fa-xmark fa-fw"></i>
                                            Tutup
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={arise} alt="Lomba Bakiak"/>
                        </div>
                    </div>
                    <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
                     <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Solidaritas Kemerdekaan</h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <img className="img-fluid rounded mb-5" src={arise} alt="Lomba Bakiak" />
                                            <p className="mb-4">Solidaritas kemerdakaan dapat ditumbuhkan melalui sebuah permainan tradisional yang memupuk semangat kebersamaan dan kerjasama yang baik, seperti misalnya lomba bakiak. Melalui lomba tradisional, kita bisa lebih menghargai akan kekayaan budaya yang ada di Indonesia, dan dapat mempererat tali persaudaraan sesama anak bangsa.</p>
                                            <h2><a href="/galeri/gambar/2">Info Gambar</a></h2>
                                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                                <i className="fas fa-xmark fa-fw"></i>
                                                Tutup
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={ukdm} alt="Keluarga UKDM"  />
                        </div>
                    </div>
                    <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                                <div className="modal-body text-center pb-5">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8">
                                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Lembaga Dakwah Kampus</h2>
                                                <div className="divider-custom">
                                                    <div className="divider-custom-line"></div>
                                                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                                    <div className="divider-custom-line"></div>
                                                </div>
                                                <img className="img-fluid rounded mb-5" src={ukdm} alt="Keluarga UKDM" />
                                                <p className="mb-4">Lembaga dakwah kampus merupakan sebuah organisasi yang berdiri dengan memiliki visi menyebarkan nilai-nilai Islam di lingkungan mahasiswa. Harapannya adalah agar terlahir sebuah generasi bangsa yang memiliki landasan keimanan dan ketakwaan yang kuat, serta dihiasi dengan ilmu pengetahuan yang mumpuni sesuai dengan bidang masing-masing. Dengan begitu, nantinya setiap lulusan dituntut untuk mampu menebarkan manfaat bagi sesama.</p>
                                                <h2><a href="/galeri/gambar/3">Info Gambar</a></h2>
                                                <button className="btn btn-primary" data-bs-dismiss="modal">
                                                    <i className="fas fa-xmark fa-fw"></i>
                                                    Tutup
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={ngaji} alt="Mengajar Mengaji" />
                        </div>
                    </div>
                    <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" aria-labelledby="portfolioModal4" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                                <div className="modal-body text-center pb-5">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8">
                                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Mengajarkan Alquran</h2>
                                                <div className="divider-custom">
                                                    <div className="divider-custom-line"></div>
                                                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                                    <div className="divider-custom-line"></div>
                                                </div>
                                                <img className="img-fluid rounded mb-5" src={ngaji} alt="Mengajar Mengaji" />
                                                <p className="mb-4">Mengajarkan Alquran kepada orang lain merupakan sebuah amal jariyah yang dapat mengalir terus menerus pahalanya bagi setiap yang melaksanakan. Karena sebaik-baik orang adalah yang berusaha untuk belajar dan mengajarkan Alquran. Dengan mengajarkan Alquran, kita dapat menciptakan lingkungan yang islami.</p>
                                                <h2><a href="/galeri/gambar/4">Info Gambar</a></h2>
                                                <button className="btn btn-primary" data-bs-dismiss="modal">
                                                    <i className="fas fa-xmark fa-fw"></i>
                                                    Tutup
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={kajian} alt="Kajian" />
                        </div>
                    </div>
                    <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" aria-labelledby="portfolioModal5" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                                <div className="modal-body text-center pb-5">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8">
                                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Kajian Keislaman</h2>
                                                <div className="divider-custom">
                                                    <div className="divider-custom-line"></div>
                                                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                                    <div className="divider-custom-line"></div>
                                                </div>
                                                <img className="img-fluid rounded mb-5" src={kajian} alt="Kajian" />
                                                <p className="mb-4">Kajian keislaman bersama Ustadz Muzammil Hasballah, sang Qari' yang memiliki suara merdu saat membaca Al-Qur'an. Membahas seputar peran anak muda dan peradaban Islam di masa kejayaan, dan peran berbagai ilmuwan muslim dalam mengembangkan karya dan teknologi.</p>
                                                <h2><a href="/galeri/gambar/5">Info Gambar</a></h2>
                                                <button className="btn btn-primary" data-bs-dismiss="modal">
                                                    <i className="fas fa-xmark fa-fw"></i>
                                                    Tutup
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={delegasi} alt="Delegasi" />
                        </div>
                    </div>
                </div>
                <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" aria-labelledby="portfolioModal6" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
        
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Saintis Islami</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={delegasi} alt="Saintis Islami" />
                                        <p className="mb-4">Seorang saintis islami mampu membaca ayat-ayat kauniyah yang telah diciptakan oleh Allah swt. Saintis islami juga berpedoman terhadap Alquran dalam memahami sains. Sehingga nantinya tidak akan bertolak belakang antara sains dan agama, bahkan akan berjalan secara beriringan.</p>
                                        <h2><a href="/galeri/gambar/6">Info Gambar</a></h2>
                                        <button className="btn btn-primary" data-bs-dismiss="modal">
                                            <i className="fas fa-xmark fa-fw"></i>
                                            Tutup
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={delegasi} alt="Delegasi" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}
   
export default Galeri;
