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


const directions = (origin, destination, esto) => {
  const DirectionsService = new google.maps.DirectionsService();
  DirectionsService.route(
    {
      origin: new google.maps.LatLng(origin.lat, origin.lng),
      destination: new google.maps.LatLng(destination.lat, destination.lng),
      travelMode: google.maps.TravelMode.DRIVING
    },
    (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        esto.setState({
          directions: result
        });
      } else {
        console.error(`error fetching directions ${JSON.stringify(result)}`);
      }
    }
  )
 }
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

      directions(origin, destination, this);
     
    },
    componentDidUpdate() {
      const origin = {
        lat: this.props.originLatitude,
        lng: this.props.originLongitude,
      };

      const destination = {
        lat: this.props.destinationLatitude,
        lng: this.props.destintationLongitude,
      };

      directions(origin, destination, this);
    }
  })
)(props => (
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: 19.37652599999999847, lng: -99.2554329999999965 }}>
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));
export default MapWithADirectionsRenderer;