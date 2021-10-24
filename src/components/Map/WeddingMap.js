import React, { useState, useCallback } from "react"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"
import styled from "styled-components"

const containerStyle = {
  width: "100%",
  height: "250px",
}

const center = {
  lat: 24.924294,
  lng: -80.627836,
}

let key = process.env.GATSBY_GOOGLE_MAPS_KEY;

const WeddingMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${key}`
  })

  const [map, setMap] = useState(null)

  // const onLoad = useCallback(function callback(map) {
  //     const bounds = new window.google.maps.LatLngBounds();
  //     map.fitBounds(bounds);
  //     setMap(map)
  // }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      // onLoad={onLoad}
      onUnmount={onUnmount}
    />
  ) : (
    <></>
  )
}

export default WeddingMap
