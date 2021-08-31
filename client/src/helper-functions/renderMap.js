import { googleMapsApiKey } from './config.js';
import React from 'react';

// HOW TO USE:
// options should be setup with the following object for proper configuration:
  // options = {
  //   width: width of frame as a string, optional
  //   height: height of frame as a string, optional
  //   lat: latitude location as a string, required
  //   lng: longitude location as a string, required,
  //   zoom: zoom amount between 0 (that's pretty much the whole world) and 21 (individual buildings) as a string, optional
  // }

const renderMap = (options) => {
  const width = options.width || '450';
  const height = options.height || '250';
  const lat = options.lat;
  const lng = options.lng;
  const zoom = options.zoom || '12';
  const src = `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${lat},${lng}&zoom=${zoom}`

  return (
    <iframe
      width={width}
      height={height}
      src={src} allowFullScreen>
    </iframe>
  )
}

export default renderMap;