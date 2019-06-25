/*global google*/
import React from "react";
import { compose, withProps, lifecycle, withStateHandlers } from "recompose";
//import FaAnchor from "react-icons/lib/fa/anchor";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker ,
  InfoWindow,
  DirectionsRenderer,
  
} from "react-google-maps";
import MarkerWithLabel from 'react-google-maps/lib/components/addons/MarkerWithLabel';

const handleLabels = (event) => {
  console.log(event)
  
}

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: true,
    }),
    onToggleClose: ({ isOpen }) => () => ({
      isOpen: false,
    }),

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

      this.props.directions(origin, destination, this);
     
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

      this.props.directions(origin, destination, this);
    }
  })
)(props => (
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: 19.37652599999999847, lng: -99.2554329999999965 }}>
    {props.isStations ? props.stations.map((marker, index) => {
      let lat = Number(marker.latitude);
      let lng =  Number(marker.longitude);
      return(
        <MarkerWithLabel
          onMouseOver={() => {props.onToggleOpen()}}
          onMouseOut={() => {props.onToggleClose()}}
          key={marker.id}
          labelVisible={ props.isOpen ? true : false} 
          position={{ lat, lng}}
          icon={{
            path: google.maps.SymbolPath.CIRCLE,
            scale: 5
          }} 
          labelAnchor={new google.maps.Point(0, 0)}
          labelStyle={{backgroundColor: "#ffff", fontSize: "12px", padding: "16px", opacity: 0.75}}
        >
      <div>{marker.name}</div>
    </MarkerWithLabel>
      );
    }
    
) : null} 
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));
export default MapWithADirectionsRenderer;