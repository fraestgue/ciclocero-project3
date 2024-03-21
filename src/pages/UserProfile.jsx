import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../service/config.service";
import { Link } from "react-router-dom";
import btnAtras from "../assets/btn-atras.png";

import FormEditarUser from "../components/FormEditarUser";
import { Spinner } from "react-bootstrap";

function UserProfile() {
    const [profile, setProfile] = useState(null);
    const [profileFile, setProfileFile] = useState();

    const [isEditarUserShowing, setEditarUserShowing] = useState(false);

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

    const handleEditar = () => setEditarUserShowing(!isEditarUserShowing);

    if (profile === null) {
        return <Spinner />;
    }

    const handleBack = () => navigate(-1);

    return (
        <div>
            <button onClick={handleBack} className="btn-atras">
                <img src={btnAtras} alt="atras" width="25px" />
            </button>
            <div>
                <img src={profile.image} alt="foto de perfil" width={"150px"} />

                <h2>Username: {profile.username}</h2>
                <h3>Email: {profile.email}</h3>

                <h3>
                    <button onClick={handleEditar}>Edita tu perfil</button>
                </h3>
                {isEditarUserShowing === true ? (
                    <FormEditarUser
                        profile={profile}
                        setProfile={setProfile}
                        profileFile={profileFile}
                        setProfileFile={setProfileFile}
                    />
                ) : null}
            </div>
            <Link to={"/user-rutas"}>
                <button>Tus rutas</button>
            </Link>
            {/* <Link to={"/user-rutas-fav"}>
                <button>Tus rutas favoritas</button>
            </Link> */}
        </div>
    );
}

export default UserProfile;
