import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../service/config.service";

function EditarEmail(props) {
    const [email, setEmail] = useState(props.profile.email);

    const navigate = useNavigate();

    const handleEmail = (event) => setEmail(event.target.value);

    const handleEmailSubmit = async (event) => {
        event.preventDefault();
        const uploadEmail = {
            
            email
        };
        console.log(uploadEmail)

        try {
            const response = await service.patch("/user/email", uploadEmail);
            console.log(response);
            setProfile(response.data);
            props.handleToggleUpdateEmail(false);
        } catch (error) {
            navigate("/error500");
        }
    };

    return (
        <div>
            <form onSubmit={handleEmailSubmit}>
                <label>Email: </label>
                <input
                    type="text"
                    name="email"
                    onChange={handleEmail}
                    value={email}
                />
                <button>Guarda tus cambios</button>
            </form>
        </div>
    );
}

export default EditarEmail;
