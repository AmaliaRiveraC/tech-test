/*global google*/
import React from "react";
import { compose, withProps, lifecycle } from "recompose";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "react-google-maps";

/*const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 19.388881132451534, lng: -99.13277249999999 }}
  >
    <Marker
      position={{ lat: 19.388881132451534, lng: -99.13277249999999 }}
    />
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));*/
const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,

  lifecycle({
    componentDidMount() {
      const origin = {
        lat: this.props.originLatitude,
        lng: this.props.originLongitude,
      };

      const destination = {
        lat: this.props.destinationLatitude,
        lng: this.props.destintationLongitude,
      };

      const DirectionsService = new google.maps.DirectionsService();
      DirectionsService.route(
        {
          origin: new google.maps.LatLng(origin.lat, origin.lng),
          destination: new google.maps.LatLng(destination.lat, destination.lng),
          travelMode: google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            console.log(result)
            this.setState({
              directions: result
            });
          } else {
            console.error(`error fetching directions ${JSON.stringify(result)}`);
          }
        }
      )
     
    },
 
  })
)(props => (
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {console.log(props)}
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

//export default MapWithAMarker;
export default MapWithADirectionsRenderer;