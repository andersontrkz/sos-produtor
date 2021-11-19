import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux';

import MapMarker from './MapMarker';
import ClientMapMarker from './ClientMapMarker';
import { getGeolocation } from '../../../utils/geolocation';

const Map = ({ producers }) => {
  const [geolocation, setGeolocation] = useState(false);

  const { mapCenter } = useSelector((state) => state.shop);

  useEffect(() => {
    getGeolocation(setGeolocation);
  }, []);

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek' }}
      center={mapCenter}
      defaultZoom={15}
    >
      {producers.map((producer) => (
        <MapMarker producer={producer} lat={producer.location.lat} lng={producer.location.lng} />
      ))}
      <ClientMapMarker lat={geolocation.lat} lng={geolocation.lng} />
    </GoogleMapReact>
  );
};

Map.propTypes = {
  producers: PropTypes.string.isRequired,
};

export default Map;
