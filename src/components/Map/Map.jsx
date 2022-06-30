import React from "react";
import GoogleMapReact from "google-map-react";

import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./MapStyles";

const Map = (props) => {
  const { setCoordinates, setBounds, coordinates, places, setChildClicked } =
    props;

  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:500px)");

  // const coordinates = {lat:0, lng:0};
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCfEdTbNpzhFj1d4UL5Cvbcys2NlOFudKY" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          //  console.log(bounds);
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
      >
        {places?.map((place, index) => {
          console.log(place);
          return (
            <div
              className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={index}
            >
              {!isDesktop ? (
                <LocationOnOutlinedIcon />
              ) : (
                <Paper elavation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle">
                    {place.name}
                  </Typography>
                  <img
                    className={classes.pointer}
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                    alt={place.name}
                  />

                  <Rating size="small" value={place.rating} readOnly />
                </Paper>
              )}
            </div>
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
