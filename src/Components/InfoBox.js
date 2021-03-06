import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "../CSS/InfoBox.css";

function InfoBox({ title, cases, total, active, isRed, ...props }) {

  return (

    <Card onClick={props.onClick} className={`infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"}`}>

      <CardContent className="text-center">

        <Typography color="textSecondary" gutterBottom><strong>{title}</strong></Typography>

        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>{cases}</h2>

        <Typography className="infoBox__total" color="textSecondary">{total} ( Total {title} )</Typography>

      </CardContent>
      
    </Card>
  );
}

export default InfoBox;
