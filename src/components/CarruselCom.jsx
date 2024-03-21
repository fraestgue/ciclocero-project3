import React, { Component, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import service from "../service/config.service";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

function CarruselCom() {
    const [mainRutas, setMainRutas] = useState(null);
    const navigate = useNavigate();

    const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

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

    let rutasCarruselArr = [];
    if (mainRutas !== null) {
        rutasCarruselArr = mainRutas.slice(0, 5);
    }

    console.log(rutasCarruselArr);

    if (mainRutas === null) {
        return <Spinner />;
    }

    return (
        <div>
            <Carousel>
                <div>
                    {rutasCarruselArr.map((eachRuta) => {
                        return (
                            <Link
                                to={`/rutas/${eachRuta._id}`}
                                key={eachRuta._id}
                            >
                                <img
                                    src={eachRuta.image}
                                    alt="ruta"
                                    width={"400px"}
                                    height={"250px"}
                                />
                                <p className="legend">{eachRuta.name}</p>
                            </Link>
                        );
                    })}
                </div>
            </Carousel>
        </div>
    );
}

export default CarruselCom;
