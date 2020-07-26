import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './home.css';


export class Maps extends React.Component {
    render() {
      const mapStyles = {
        width: "100%",
        height: "100%",
        margin: "0 0 0 0",
      };
      return (
        <div className="googleMapsDiv">
          <Map
            google={this.props.google}
            zoom={15}
            styles={mapStyles}
            initialCenter={{ lat: 9.761927, lng: 79.95244 }}
            className="googleMapsDiv"
          />
        </div>
      );
    }
  }

const LoadingContainer = (props) => (
    <div>Fancy loading container!</div>
  )

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBF4At8RBODbaOoxulvunwoV_QoOQYoBVg',
  LoadingContainer: LoadingContainer
})(Maps);