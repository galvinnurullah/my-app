import { useParams } from "react-router-dom";
const DetailGambar = () => {
    const { id } = useParams();
    return (
        <main className="flex-shrink-0">
            <div className="container">
            <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-school"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <h1 className="mt-5" style={{textAlign : "center", color : "black"}}> Detail Gambar :</h1>
                <h3 style={{textAlign : "center", color : "black" }}>Urutan Gambar ke - {id}</h3>
                <h5 style={{textAlign : "center", color : "blue"}}> dari total 6 gambar </h5>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-plane"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
            </div>
        </main>
    );
}

export default DetailGambar;