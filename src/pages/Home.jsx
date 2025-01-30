import { useNavigate } from "react-router-dom";
import Header from "../Header.jsx";
import { FiHome } from "react-icons/fi";
import { FaHardHat, FaBuilding } from "react-icons/fa";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            marginTop: "60px",
            backgroundColor: "#ECE2D0",
            marginBottom: "50px"
        }}>
            <Header />
            <main style={{ flex: 1, padding: "20px", textAlign: "center" }}>


                <h1 className="fade-in" style={{ color: "black" }}>Welcome to the Bâti Québec Inc website!</h1>
                <p className="fade-in" style={{ color: "black", marginBottom: "40px" }}>
                    We are a small privately owned company providing all phases of construction for our home owner clients, from Design to Final inspection. From our clean cut employees to our subcontractors and suppliers, we all understand that we are guests in your home. We will treat you and your family with respect from start to finish. We believe we are the best value. Our goal is to provide you with a fantastic experience, whether that be a remodeling a small bathroom or building an entire new home. We stand behind our work.
                </p>

                { }
                <h2 className="fade-in" style={{ textAlign: "center", color: "black", marginBottom: "5px" }}>SERVICES</h2>

                <section className="fade-in" style={{ backgroundColor: "#ECE2D0", color: "black", padding: "40px 20px", textAlign: "left", marginTop: "10px" }}>

                    <div style={{ display: "flex", justifyContent: "center", gap: "110px", flexWrap: "wrap", marginTop: "5px" }}>
                        { }
                        <div style={{ maxWidth: "300px", textAlign: "center" }}>
                            <FaHardHat size={50} style={{ color: "black" }} />
                            <h3 style={{ fontWeight: "bold", marginTop: "10px" }}>OWNER OCCUPIED PROJECTS</h3>
                            <p>We specialize in owner-occupied projects, ensuring minimal disruption to your daily life while maintaining the highest quality standards. </p>
                        </div>

                        { }
                        <div style={{ maxWidth: "300px", textAlign: "center" }}>
                            <FiHome size={50} style={{ color: "black" }} />
                            <h3 style={{ fontWeight: "bold", marginTop: "10px" }}>CONSTRUCTION</h3>
                            <p>From foundation to finishing touches, we bring your dream home to life with expert craftsmanship and attention to detail.</p>
                        </div>

                        { }
                        <div style={{ maxWidth: "300px", textAlign: "center" }}>
                            <FaBuilding size={50} style={{ color: "black" }} />
                            <h3 style={{ fontWeight: "bold", marginTop: "10px" }}>RENOVATION</h3>
                            <p>Whether upgrading a single room or a complete home renovation, we provide seamless, high-quality remodeling services tailored to your needs.</p>
                        </div>
                        <div style={{ maxWidth: "400px", textAlign: "center", marginTop: "-70px", marginBottom: "0px" }}>
                            <h3 className="fade-in" style={{ fontWeight: "bold", textAlign: "center", marginTop: "10px" }}>VOUS AVEZ DES PROJETS EN TÊTE?</h3>
                            <button className="fade-in" onClick={() => navigate("/rdv")}
                                style={{ marginTop: "5px", color: "black", backgroundColor: "#ECE2D0", marginBottom: "20px" }}>
                                Prenez rendez-vous avec nous
                            </button>
                        </div>


                    </div>
                </section>


            </main>


        </div>
    );
};



export default Home;
