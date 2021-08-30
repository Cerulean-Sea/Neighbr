import renderMap from './renderMap';

// HOW TO USE:
// This function gets the current position of the user. There are two parameters, both optional:
//   - returnMapView: boolean
//     - false (default): will return an object wil coordinates of the user's location, with both latitude and longitude properties
//     - true: will return an iframe of a Google Maps view of the location, with default options
//   - mapOptions: object
//     - secondary parameter if 'returnMapView' is marked as true. Options or setting zoom and frame size of returned iframe element
//     - for more info, see options parameter in the 'renderMap' helper function

export default async function getCurrentLocation(returnMapView = false, mapOptions = {}) {

  const getPosition = () => {
    return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
    );
  }

  let location;

  try {
    const position = await getPosition();
    if (returnMapView) {
      mapOptions.lat = position.coords.latitude;
      mapOptions.lng = position.coords.longitude
      location = await renderMap(mapOptions);
    } else {
      location = position.coords;
    }
    return location;
  } catch (err) {
    console.error(err.message);
  }

}

