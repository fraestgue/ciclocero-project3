import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../service/config.service";

function EditarPassword(props) {
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handlePassword = (event) => setPassword(event.target.value);

    const handlePasswordSubmit = async (event) => {
        event.preventDefault();
        const uploadPassword = {
            password
        };

        try {
            const response = await service.patch(
                "/user/password",
                uploadPassword
            );

            props.setProfile(response.data);
            props.handleToggleUpdatePassword(false);
            setPassword("");
        } catch (error) {
            navigate("/error500");
        }
    };

    return (
        <div>
            <form onSubmit={handlePasswordSubmit}>
                <label>Password: </label>
                <input
                    type="password"
                    name="password"
                    onChange={handlePassword}
                    value={password}
                    placeholder="introduce tu nueva contraseña"
                />
                <button>Guarda tus cambios</button>
            </form>
        </div>
    );
}

export default EditarPassword;
