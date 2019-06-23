import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '50%'
};
  
class MapContainer extends React.Component  {
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={14}
              style={mapStyles}
              initialCenter={{
               lat: -1.2884,
               lng: 36.8233
              }}
            />
          );
    }  
};

//process.env.REACT_APP_API_KEY
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBAARteyaLy-vBlO0qucQSx9j60lQLjmMo'
  })(MapContainer);