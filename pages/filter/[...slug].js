import { useRouter } from "next/router";
import React from "react";
import carsData from "@/data/carsData";
import CarsList from "@/components/templates/CarsList";

const FilterCars = () => {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const myCars = carsData.filter((car) => car.price > min && car.price < max);
  console.log(myCars);

  // if (!myCars.length) return <h3>NotFound</h3>;

  return (
    <div>
      <CarsList data={myCars} />
    </div>
  );
};

export default FilterCars;
