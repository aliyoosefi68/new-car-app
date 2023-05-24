//template
import CarsDetails from "@/components/templates/CarsDetails";

import { useRouter } from "next/router";
import carsData from "@/data/carsData";

const CarDetails = () => {
  const router = useRouter();
  const { CarId } = router.query;
  const myCar = carsData[CarId - 1];

  return (
    <div>
      <CarsDetails {...myCar} />
    </div>
  );
};

export default CarDetails;
