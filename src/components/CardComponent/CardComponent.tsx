import React, { FC } from "react";
import Badge from "@mui/material/Badge";
import { img_300 } from "../../config/config";
import { Idata } from "../Trending/Trending";
import "./Card.css";

interface ICardComponent {
  data: Idata;
}
const CardComponent: FC<ICardComponent> = ({ data }) => {
  return (
    <Badge
      badgeContent={`${Math.ceil(Math.random() * 10)}.${Math.ceil(
        Math.random() * 10
      )}`}
      color={"primary"}
    >
      <div className="card">
        <img
          className="poster"
          src={`${img_300}?random=${Math.ceil(Math.random() * 1000)}`}
          alt={data.title}
        />
        <div className="card-details">
          <p className="title">{data.id}</p>
          <p className="title">{data.title}</p>
          <p className="subTitle">TV Series</p>
        </div>
      </div>
    </Badge>
  );
};

export default CardComponent;
