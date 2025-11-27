import styles from "./map.module.css";
import {
    MapContainer,
    TileLayer,
    useMap,
   
} from "react-leaflet";
import { useState } from "react";

import { useUrlPosition } from "./hooks/useUrlPosition";

function Map() {

    const [mapPosition] = useState([40, 0]);
   
 useUrlPosition();

    
   

   

    return (
        <div className={styles.mapContainer}>
            <MapContainer
                center={mapPosition}
                zoom={6}
                scrollWheelZoom={true}
                className={styles.map}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
               

                <ChangeCenter position={mapPosition} />
               
            </MapContainer>
        </div>
    );
}

function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position);
    return null;
}



export default Map;
