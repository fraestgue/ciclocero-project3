import React, { useState } from "react";
import service from "../service/config.service";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

function EditarFotoUser(props) {
    const [isUploading, setIsUploading] = useState(false);

    const navigate = useNavigate();

    const handleFileUpload = async (event) => {
        if (!event.target.files[0]) {
            return;
        }

        setIsUploading(true);

        const uploadData = new FormData();
        uploadData.append("image", event.target.files[0]);

        try {
            const response = await service.post("/upload", uploadData);

            props.setProfileFile(response.data.imageUrl);

            setIsUploading(false);
        } catch (error) {
            navigate("/error");
        }
    };
    const handleImage = async () => {
        const actualizarImagenUser = {
            image: props.profileFile
        };
        try {
            const response = await service.patch(
                "/user/image",
                actualizarImagenUser
            );

            props.setProfile(response.data);
            props.setProfileFile(null);
            props.handleToggleUpdateImg(false);
        } catch (error) {
            navigate("/error500");
        }
    };
    return (
        <div>
            {" "}
            <div>
                <div>
                    <label>Image: </label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleFileUpload}
                        disabled={isUploading}
                    />
                </div>

                {isUploading ? <Spinner /> : null}

                {props.profileFile ? (
                    <div>
                        <img src={props.profileFile} alt="img" width={200} />
                        <button onClick={handleImage}>Guarda tu imagen</button>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default EditarFotoUser;
