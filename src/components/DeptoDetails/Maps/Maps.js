// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {Component} from 'react'

export class MapContainer extends Component {
    render() {
      return (
        <iframe src={this.props.iframeLink} width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen={true} aria-hidden="false" tabindex="0"></iframe>
      );
    }
  }
   
// export default GoogleApiWrapper({
// apiKey: ('')
// })(MapContainer)