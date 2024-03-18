import React, { useState } from "react";
import service from "../service/config.service";
import { useNavigate } from "react-router-dom";

function FormEditarUser(props) {
    const [email, setEmail] = useState(props.profile.email);
    const [username, setUsername] = useState(props.profile.username);
    const [password, setPassword] = useState(props.profile.password);
    const navigate = useNavigate();

    const handleEmail = (event) => setEmail(event.target.value);
    const handleUsername = (event) => setUsername(event.target.value);
    const handlePassword = (event) => setPassword(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const actualizarUsername = {
            username
        };
        const actualizarEmail = {
            email
        };
        const actualizarPassword = {
            password
        };

        try {
            const responseUsername = await service.patch("/user/username", actualizarUsername);
            const responseEmail = await service.patch("/user/email", actualizarEmail)
            const responsePassword = await service.patch("/user/password", actualizarPassword)

            
        } catch (error) {
            navigate("/error505");
        }
    };

    return;
}

export default FormEditarUser;
