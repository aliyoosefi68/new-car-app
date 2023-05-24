import { useRouter } from "next/router";
import styles from "./CarsList.module.css";
import Back from "../icons/Back";
import CarCard from "../modules/CarCard";

const CarsList = ({ data }) => {
  const router = useRouter();

  const backHandler = () => {
    router.back();
  };
  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={backHandler}>
        <Back />
        <p>back</p>
      </div>
      <div className={styles.cards}>
        {data.map((item) => (
          <CarCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CarsList;
