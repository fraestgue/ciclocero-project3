import React from "react";
import styles from "./styles.module.css";
import Map from "./Map";

function MapContainer() {
    return (
        <div className={styles.mapContainer}>
            <Map />
        </div>
    );
}

export default MapContainer;
