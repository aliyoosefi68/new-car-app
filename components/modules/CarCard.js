import React from "react";
import styles from "./CarCard.module.css";

import Location from "../icons/Location";
import Link from "next/link";

const CarCard = ({ data }) => {
  const { name, id, model, image, location, year, distance, price } = data;
  return (
    <Link href={`/cars/${id}`}>
      <div className={styles.container}>
        <img src={image} alt={name} className={styles.image} />
        <h4 className={styles.title}>{`${name} ${model}`}</h4>
        <p className={styles.detail}>{`${year} . ${distance}km`}</p>
        <div className={styles.footer}>
          <p>$ {price}</p>
          <div className={styles.location}>
            <p>{location}</p>
            <Location />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
