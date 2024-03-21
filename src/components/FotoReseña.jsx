import React, { useState } from "react";
import service from "../service/config.service";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

export default function FotoReseña(props) {
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

            props.setImage(response.data.imageUrl);

            setIsUploading(false);
        } catch (error) {
            navigate("/error");
        }
    };
    return (
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
            {/* below line will render a preview of the image from cloudinary */}
            {props.image ? (
                <div>
                    <img src={props.image} alt="img" width={200} />
                </div>
            ) : null}
        </div>
    );
}
