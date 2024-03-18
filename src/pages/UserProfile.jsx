import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../service/config.service";
import { Link } from "react-router-dom";
import btnAtras from "../assets/btn-atras.png";
import EditarFotoUser from "../components/EditarFotoUser";

function UserProfile() {
    const [profile, setProfile] = useState(null);
    const [profileFile, setProfileFile] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        getProfile();
    }, []);

    const getProfile = async () => {
        try {
            const response = await service.get("/user");
            console.log(response.data);
            setProfile(response.data);
            setProfileFile(response.data.image);
        } catch (error) {
            navigate("/error500");
        }
    };

    if (profile === null) {
        return <h3>...buscando</h3>;
    }

    const handleBack = () => navigate(-1);

    return (
        <div>
            <button onClick={handleBack} className="btn-atras">
                <img src={btnAtras} alt="atras" width="25px" />
            </button>
            <div>
                <img src={profile.image} alt="foto de perfil" width={"150px"} />
                <h3>
                    Edita tu foto de perfil:{" "}
                    <EditarFotoUser setProfileFile={setProfileFile} />{" "}
                </h3>
                <h2>Username: {profile.username}</h2>
                <h3>Email: {profile.email}</h3>
            </div>
            <Link to={"/user-rutas"}>
                <button>Tus rutas</button>
            </Link>
            <Link to={"/user-rutas-fav"}>
                <button>Tus rutas favoritas</button>
            </Link>
        </div>
    );
}

export default UserProfile;
