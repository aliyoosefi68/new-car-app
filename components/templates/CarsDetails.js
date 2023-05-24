//styles
import styles from "./CarsDetails.module.css";

//icons
import Calender from "../icons/Calender";
import Company from "../icons/Company";
import Model from "../icons/Model";
import Road from "../icons/Road";
import Location from "../icons/Location";
import Money from "../icons/Money";

const CarsDetails = (props) => {
  const {
    name,
    id,
    model,
    image,
    location,
    year,
    distance,
    price,
    description,
  } = props;
  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} />
      <h3 className={styles.header}>
        {name} {model}
      </h3>
      <div className={styles.details}>
        <div>
          <Company />
          <p>Company </p>
          <span>{name}</span>
        </div>
        <div>
          <Model />
          <p>Model </p>
          <span>{model}</span>
        </div>
        <div>
          <Calender />
          <p>First registration </p>
          <span>{year}</span>
        </div>
        <div>
          <Road />
          <p>Km driven </p>
          <span>{distance}km</span>
        </div>
      </div>

      <div className={styles.details}>
        <div>
          <Location />
          <p>location</p>
          <span>{location}</span>
        </div>
      </div>

      <div className={styles.details}>
        <p className={styles.descriptionTitle}>Extra Information</p>
        <p className={styles.descriptionText}>{description}</p>
      </div>
      <div className={styles.details}>
        <div className={styles.price}>
          <Money />
          <p>Price</p>
          <span>$ {price}</span>
        </div>
      </div>
      <button className={styles.button}>Buy</button>
    </div>
  );
};

export default CarsDetails;
