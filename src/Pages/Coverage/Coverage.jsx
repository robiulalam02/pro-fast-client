import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import CoverageMap from './CoverageMap';
import { FiSearch } from 'react-icons/fi';
import { useLoaderData } from 'react-router';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});



export const MapController = ({ location }) => {
    const map = useMap();
    if (location) {
        map.flyTo([location.latitude, location.longitude], 11, { animate: true, duration: 1 })
    }

    return null;
}

const Coverage = () => {
    const locationsData = useLoaderData();
    const [serviceLocations, setServiceLocations] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [selectedLocation, setSelectedLocation] = useState(null);
    console.log(searchText);

    useEffect(() => {
        setServiceLocations(locationsData);
    }, [locationsData])

    const handleSearchLocation = () => {
        // console.log(searchText);
        const match = serviceLocations?.find(loc => loc.district.toLowerCase().includes(searchText.toLowerCase()))


        if (match) {
            setSelectedLocation(match);
        } else {
            alert('location not found')
        }
    }

    return (
        <div className='bg-base-100 rounded-3xl p-20 mb-10 flex flex-col gap-10'>

            <h1 className='text-4xl font-extrabold mb-10 text-primary'>We Are Now Available in 64 District</h1>

            <div className="flex items-center w-full max-w-xl mx-auto bg-white rounded-full shadow-md h-12 pl-3">
                {/* Search Icon */}
                <FiSearch className="text-primary text-xl mr-2" />

                {/* Input Field */}
                <input
                    type="text"
                    placeholder="Search location..."
                    className="flex-grow outline-none bg-transparent text-sm px-2"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                />

                {/* Search Button */}
                <button onClick={handleSearchLocation} className="bg-secondary hover:bg-secondary/90 text-md font-semibold px-10 h-full rounded-full transition">
                    Search
                </button>
            </div>

            <CoverageMap serviceLocations={serviceLocations} mapController={MapController} selectedLocation={selectedLocation} />
        </div>
    );
};

export default Coverage;