import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = () => {
    return ( 
        <GoogleMap
            defaultZoom={ 10 }
            defaultCenter={{ lat: 38.9846, lng: 1.5341 }}
        />
     );
}
 
export default withScriptjs(
    withGoogleMap(
        Map
    )
);