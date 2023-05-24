//styles
import CarCard from "../modules/CarCard";
import styles from "./CarsPage.module.css";

//data

const CarsPage = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <CarCard data={...car} key={car.id}/>
      ))}
    </div>
  );
};

export default CarsPage;
