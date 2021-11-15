import React from 'react';
import GoogleMapReact from 'google-map-react';

import MapMarker from './MapMarker';

const producers = [{
  id: '1', name: 'Juca', price: '$$$$', rate: '4.7', range: '2,9 Km', image: 'https://www.pccmarkets.com/wp-content/uploads/2018/05/steve-suzi-and-workers-1600.jpg',
}];

const Map = () => (
  <GoogleMapReact
    bootstrapURLKeys={{ key: 'AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek' }}
    center={{ lat: -23.561684, lng: -46.625378 }}
    defaultZoom={15}
  >
    {producers.map((producer) => <MapMarker producer={producer} />)}
  </GoogleMapReact>
);

export default Map;
