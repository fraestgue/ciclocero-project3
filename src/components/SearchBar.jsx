import React, { useEffect, useState } from "react";
import service from "../service/config.service";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchRuta, setSearchRuta] = useState(null);
    const [spinner, setSpinner] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (searchQuery === "") {
            setSearchRuta(null);
            setSpinner(false);
            return;
        }

        const delay = setTimeout(async () => {
            try {
                const response = await service.get(
                    `/rutas/query?queryValue=${searchQuery}`
                );

                setSearchRuta(response.data);
                setSpinner(false);
            } catch (error) {
                navigate("/error500");
            }
        }, 1500);
        return () => clearInterval(delay);
    }, [searchQuery]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        setSpinner(true);
    };

    const handleClear = () => {
        setSearchQuery("");
        setSearchRuta(null);
    };

    return (
        <div>
            <div className="spinner2">
                <input
                    className="barra"
                    autoFocus
                    type="text"
                    autoComplete="off"
                    placeholder="busca rutas"
                    value={searchQuery}
                    onChange={handleSearch}
                    autoCapitalize="words"
                />
                {spinner === true && <Spinner />}
            </div>
            <div></div>

            {searchRuta === null ? null : (
                <div>
                    {searchRuta.map((eachRuta) => {
                        return (
                            <div key={eachRuta._id} onClick={handleClear}>
                                <Link to={`/rutas/${eachRuta._id}`}>
                                    <img
                                        src={eachRuta.image}
                                        alt="ruta"
                                        width={"120px"}
                                    />
                                    <h3 style={{ color: "#fbc344" }}>
                                        {eachRuta.name}
                                    </h3>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchBar;
