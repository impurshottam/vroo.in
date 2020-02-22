import { CardMedia } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React, { Component, Fragment } from "react";

export function CardMediaSegment(props) {
  const { classes, loading, onLoad, image } = props;
  return (
    <CardMedia className={classes.media} title="Paella dish">
      {loading ? (
        <Fragment>
          <Skeleton
            className={classes.cardMediaSkeleton}
            animation="wave"
            width="100%"
            variant="rect"
          />
          <img
            style={{ display: "none", height: 0 }}
            onLoad={() => {
              setTimeout(() => {
                onLoad();
              }, 1000);
            }}
            src={image || "https://source.unsplash.com/random"}
          />
        </Fragment>
      ) : (
        <Fragment>
          <div
            style={{
              backgroundSize: "cover",
              height: 0,
              paddingTop: "56.25%",
              backgroundImage: `url(${image ||
                "https://source.unsplash.com/random"})`
            }}
          ></div>
          {/* <img
              className={classes.cardMediaImage}
              src="https://source.unsplash.com/random"
            /> */}
        </Fragment>
      )}
    </CardMedia>
  );
}
