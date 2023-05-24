import { useRouter } from "next/router";
import carsData from "@/data/carsData";
import CarsList from "@/components/templates/CarsList";

const categoryName = () => {
  const router = useRouter();
  const category = router.query.categoryName;
  const myCars = carsData.filter((car) => car.category === category);

  return (
    <div>
      <CarsList data={myCars} />
    </div>
  );
};

export default categoryName;
