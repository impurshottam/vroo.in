import React, { Component, Fragment } from "react";
import ShareIcon from "@material-ui/icons/Share";
import { Chip, Container, Typography } from "@material-ui/core";


export function NoTours(props) {
    const { classes, loading } = props;
    return (
      <Container className={classes.noCard} maxWidth="sm">
        <div className={classes.girl}>
          <img
            style={{
              width: "150.388px",
              position: "absolute",
              top: "300px"
            }}
            src="/images/vroo-girl.png"
          />
          <img
            style={{
              width: "200.388px"
            }}
            src="/images/basement.png"
          />
        </div>
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
          Welcome to VROO.
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          paragraph
        >
          India's First 360 Virtual Reality Tour Online Publishing Platform.
        </Typography>
      </Container>
    );
  }