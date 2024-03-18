import React, { useState } from "react";
import service from "../service/config.service";
import { useNavigate } from "react-router-dom";

function EditarFotoUser(props) {
    // add to component where you are creating an item

    // below state will hold the image URL from cloudinary. This will come from the backend.
    // const [imageUrl, setImageUrl] = useState(null);
    const [isUploading, setIsUploading] = useState(false); // for a loading animation effect

    const navigate = useNavigate();

    // below function should be the only function invoked when the file type input changes => onChange={handleFileUpload}
    const handleFileUpload = async (event) => {
        // console.log("The file to be uploaded is: ", e.target.files[0]);

        if (!event.target.files[0]) {
            // to prevent accidentally clicking the choose file button and not selecting a file
            return;
        }

        setIsUploading(true); // to start the loading animation

        const uploadData = new FormData(); // images and other files need to be sent to the backend in a FormData
        uploadData.append("image", event.target.files[0]);
        //                   |
        //     this name needs to match the name used in the middleware in the backend => uploader.single("image")

        try {
            const response = await service.patch("/upload", uploadData);
            console.log(response.data);
            // !IMPORTANT: Adapt the request structure to the one in your proyect (services, .env, auth, etc...)

            // (response.data.imageUrl);
            props.setProfileFile(response.data.imageUrl);
            //                          |
            //     this is how the backend sends the image to the frontend => res.json({ imageUrl: req.file.path });

            setIsUploading(false); // to stop the loading animation
        } catch (error) {
            navigate("/error");
        }
    };
    const handleImage = async () => {
        console.log(props.profileFile);
        const actualizarImagenUser = {
            image: props.profileFile
        };
        try {
            const response = await service.patch(
                "/user/image",
                actualizarImagenUser
            );
            console.log(response);
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
                {/* // ... in the JSX returned of the same component as above. */}
                <div>
                    <label>Image: </label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleFileUpload}
                        disabled={isUploading}
                    />
                    {/* below disabled prevents the user from attempting another upload while one is already happening */}
                </div>

                {/* to render a loading message or spinner while uploading the picture */}
                {isUploading ? <h3>... uploading image</h3> : null}
                {/* below line will render a preview of the image from cloudinary */}
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
