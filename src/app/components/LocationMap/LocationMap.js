'use client';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import PropTypes from 'prop-types';

// Create a custom icon
const locationIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [32, 32],
});

const LocationMap = ({ position, label }) => {
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        // Check if window object exists (client-side)
        if (typeof window !== 'undefined') {
            setMapLoaded(true);
        }
    }, []);

    if (!mapLoaded) {
        return null; // Render nothing on the server side or before map is loaded
    }

    return (
        <div className="w-full h-96">
            <MapContainer center={position} zoom={13} className="w-full h-1/2">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

                />
                <Marker position={position} icon={locationIcon}>
                    <Popup>{label}</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

LocationMap.propTypes = {
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
    label: PropTypes.string.isRequired,
};

export default LocationMap;
