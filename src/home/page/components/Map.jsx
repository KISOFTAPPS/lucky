import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDOqHQp9gOoa0eeYggd1IEQ-wTlkKBkjfE",
    });

    if (!isLoaded) return <>Loading...</>;
    return (
        <GoogleMap
            zoom={10}
            center={{ lat: 44, lng: -80 }}
            mapContainerClassName="map"
        ></GoogleMap>
    );
};
