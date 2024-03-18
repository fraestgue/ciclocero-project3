import React, { useEffect, useState } from "react";
import service from "../service/config.service";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchRuta, setSearchRuta] = useState(null);
    const [spinner, setSpinner] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (searchQuery === "") {
            setSearchRuta(null);
            setSpinner(false);
        }

        const delay = setTimeout(async () => {
            try {
                const response = service.get(`/rutas?query=${searchQuery}`);
                console.log(response.data);
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
            <div className="searchbar">
                <input
                    className="barra"
                    autoFocus
                    type="text"
                    autoComplete="off"
                    placeholder="busca rutas"
                    value={searchQuery}
                    onChange={handleSearch}
                />
                {spinner === true && <h3>...buscando</h3>}
            </div>
            <div></div>

            {/* {searchRuta === null ? null : (
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
                                    <h3>{eachRutas.name}</h3>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            )} */}
        </div>
    );
}

export default SearchBar;
