import carsData from "@/data/carsData";
import CarsPage from "@/components/templates/CarsPage";
import Categories from "@/components/modules/Categories";
import SearchBar from "@/components/modules/SearchBar";

export default function Home() {
  const cars = carsData.slice(0, 3);
  return (
    <>
      <SearchBar />
      <Categories />
      <CarsPage data={cars} />
    </>
  );
}
