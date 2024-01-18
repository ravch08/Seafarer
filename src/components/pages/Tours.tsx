import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { number, string, z } from "zod";

import { getTours } from "../utils/api";
import { PageBanner, TourItem, aboutBanner } from "../utils/helper";

const TourSchema = z.object({
  id: number().optional(),
  imgSrc: string().url(),
  guests: number().gt(0, { message: "Must have atleast 1 guest" }),
  cabins: number().gt(0, { message: "Must have atleast 1 cabin" }),
  distance: number().gt(0, { message: "Must have atleast 1 km" }),
  type: string().min(5, { message: "Atleast have 5 characters." }),
  name: string().min(5, { message: "Atleast have 5 characters." }),
  price: number().gt(0, { message: "Price must be a positive number." }),
  description: string().min(5, { message: "Atleast have 5 characters." }),
});

export type TourProps = z.infer<typeof TourSchema>;

const Tours = () => {
  const [params, setParams] = useSearchParams();

  const { data, status } = useQuery({
    queryKey: ["tours"],
    queryFn: getTours,
  });

  const lowToHighData = data
    ?.slice()
    .sort((a: TourProps, b: TourProps) => a.price - b.price);

  const highToLowData = data
    ?.slice()
    .sort((a: TourProps, b: TourProps) => b.price - a.price);

  const sortedAZData = data
    .slice()
    .sort((a: TourProps, b: TourProps) => a.name.localeCompare(b.name));

  let filteredData;
  const filterType = params.get("type");

  switch (filterType) {
    case "high-low":
      filteredData = highToLowData;
      break;
    case "low-high":
      filteredData = lowToHighData;
      break;
    case "ascending":
      filteredData = sortedAZData;
      break;
    case "all":
      filteredData = data;
      break;
    case "yatch":
      filteredData = data.filter(
        (item: TourProps) => item.type.toLowerCase() === "yatch",
      );
      break;
    case "cruiser":
      filteredData = data.filter(
        (item: TourProps) => item.type.toLowerCase() === "cruiser",
      );
      break;
    default:
      filteredData = data;
      break;
  }

  return (
    <main>
      <PageBanner
        page="Tours List"
        imgSrc={aboutBanner}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur rem necessitatibus aut!"
      />

      <section
        aria-labelledby="Filters"
        className="border-b border-gray-100 p-0"
      >
        <div className="container mx-auto flex items-center gap-2">
          <button
            className={
              filterType === null ? "filter-links active" : "filter-links"
            }
            onClick={() => setParams({})}
          >
            ALL
          </button>
          <button
            className={
              filterType === "yatch" ? "filter-links active" : "filter-links"
            }
            onClick={() => setParams({ type: "yatch" })}
          >
            YATCH
          </button>
          <button
            className={
              filterType === "cruiser" ? "filter-links active" : "filter-links"
            }
            onClick={() => setParams({ type: "cruiser" })}
          >
            CRUISER
          </button>
          <button
            className={
              filterType === "ascending"
                ? "filter-links active"
                : "filter-links"
            }
            onClick={() => setParams({ type: "ascending" })}
          >
            Name (A - Z)
          </button>
          <button
            className={
              filterType === "high-low" ? "filter-links active" : "filter-links"
            }
            onClick={() => setParams({ type: "high-low" })}
          >
            Price High to Low
          </button>
          <button
            className={
              filterType === "low-high" ? "filter-links active" : "filter-links"
            }
            onClick={() => setParams({ type: "low-high" })}
          >
            Price Low to High
          </button>
        </div>
      </section>

      <section aria-labelledby="tours">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-8">
          {status === "success"
            ? filteredData?.map((tour: TourProps) => (
                <TourItem
                  key={tour.id}
                  type={tour.type}
                  name={tour.name}
                  price={tour.price}
                  guests={tour.guests}
                  cabins={tour.cabins}
                  imgSrc={tour.imgSrc}
                  distance={tour.distance}
                  description={tour.description}
                />
              ))
            : null}
        </div>
      </section>
    </main>
  );
};

export default Tours;
