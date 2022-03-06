import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles";

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClick }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");
  

  return (
    <h1>
      <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCvLtmnlBU_jVYSdpz4KNlGXfsoM5xmH4g" }}
          // defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          // options={""}
          onChange={(e) => {
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={
            (child) => {
              setChildClick(child)
            }
          }
        >
          {places?.map((place, i) => (
            <div
              className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {!isDesktop ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large" />
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    className={classes.Typography}
                    variant="subtitle2"
                    gutterBottom
                  >
                    {place.name}
                  </Typography>
                  <img
                    class={classes.pointer}
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTviWehRWQ5IrWTgtXHLDaJInQ-w01GGPY0Mr-RK4AEzWcanroNPWohWe5J3-mV88OBc0&usqp=CAU"
                    }
                    alt={place.name}
                  />
                  <Rating size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
            </div>
          ))}
        </GoogleMapReact>
      </div>
    </h1>
  );
};

export default Map;
