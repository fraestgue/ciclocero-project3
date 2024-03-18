import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../service/config.service";

function EditarUsername(props) {
    const [username, setUsername] = useState(props.profile.username);

    const navigate = useNavigate();

    const handleUsername = (event) => setUsername(event.target.value);

    const handleUsernameSubmit = async (event) => {
        event.preventDefault();
        const uploadUsername = {
            username
        };

        try {
            const response = await service.patch(
                "/user/username",
                uploadUsername
            );
            console.log(response);
            setProfile(response.data);
            props.handleToggleUpdateUsername(false);
        } catch (error) {
            navigate("/error500");
        }
    };

    return (
        <div>
            <form onSubmit={handleUsernameSubmit}>
                <label>Username: </label>
                <input
                    type="text"
                    name="username"
                    onChange={handleUsername}
                    value={username}
                />
                <button>Guarda tus cambios</button>
            </form>
        </div>
    );
}

export default EditarUsername;
