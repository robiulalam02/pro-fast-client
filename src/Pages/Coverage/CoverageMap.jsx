import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapController } from './Coverage';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const CoverageMap = ({ serviceLocations, selectedLocation }) => {
    return (
        <div className="h-[500px] rounded-lg overflow-hidden shadow-lg border">
            <MapContainer
                center={[23.8103, 90.4125]}
                zoomControl={false}
                zoom={9}
                scrollWheelZoom={true}
                style={{ height: '100%', width: '100%', zIndex: '1' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {selectedLocation && <MapController location={selectedLocation} />}

                {serviceLocations.map((loc, index) => (
                    <Marker key={index} position={[loc.latitude, loc.longitude]}>
                        <Popup>
                            <p>Service Available in {loc.city}:</p>
                            <strong>{loc.covered_area.join(',')}</strong>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default CoverageMap;