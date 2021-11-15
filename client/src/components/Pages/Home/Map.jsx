import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux';

import MapMarker from './MapMarker';

const Map = ({ producers }) => {
  const { mapCenter } = useSelector((state) => state.shop);

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek' }}
      center={mapCenter}
      defaultZoom={15}
    >
      {producers.map((producer) => (
        <MapMarker producer={producer} lat={producer.location.lat} lng={producer.location.lng} />
      ))}
    </GoogleMapReact>
  );
};

Map.propTypes = {
  producers: PropTypes.string.isRequired,
};

export default Map;
