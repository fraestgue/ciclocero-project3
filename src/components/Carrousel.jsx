import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../service/config.service";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function Carrousel() {
    const [mainRutas, setMainRutas] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getRutas();
    }, []);

    const getRutas = async () => {
        try {
            const response = await service.get("/rutas");
            console.log(response);
            const shuffleRutasArray = shuffleArray(response.data);
            setMainRutas(shuffleRutasArray);
        } catch (error) {
            console.log(error);
            navigate("/error500");
        }
    };

    const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = (Math.floor(Math.random() * (i + 1))[
                (newArray[i], newArray[j])
            ] = [newArray[j], newArray[i]]);
        }
        return newArray;
    };

    let rutasCarruselArr = [];
    if (mainRutas !== null) {
        rutasCarruselArr = mainRutas.slice(0, 5);
    }

    return (
        <div>
            {rutasCarruselArr === null ? null : (
                <Carousel>
                    {rutasCarruselArr.map((eachRuta) => {
                        return (
                            <Carousel.Item key={eachRuta._id} interval={2000}>
                                <Link to={`/rutas/${eachRuta._id}`}>
                                    <img
                                        src={eachRuta.image}
                                        alt="ruta"
                                        width={"400px"}
                                        height={"250px"}
                                    />
                                </Link>
                                <Carousel.Caption>
                                    <p
                                        style={{
                                            textShadow: "1px 1px 5px black"
                                        }}
                                    >
                                        {eachRuta.name}
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            )}
        </div>
    );
}

export default Carrousel;
