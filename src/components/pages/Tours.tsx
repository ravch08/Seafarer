import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { number, string, z } from "zod";
import { queryClient } from "../../App";
import { getTours } from "../utils/api";
import { PageBanner, TourItem, aboutBanner } from "../utils/helper";

export async function loader() {
  return queryClient.fetchQuery({
    queryKey: ["tours"],
    queryFn: getTours,
  });
}

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
  const { data, status } = useQuery({
    queryKey: ["tours"],
    queryFn: getTours,
  });

  return (
    <main>
      <PageBanner
        page="Tours List"
        imgSrc={aboutBanner}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur rem necessitatibus aut!"
      />

      <section
        aria-labelledby="Filters"
        className="border-b border-gray-100 px-0 py-4"
      >
        <div className="container mx-auto flex items-center gap-12">
          <NavLink to="#!" className="filter-links" end>
            Name (A - Z)
          </NavLink>
          <NavLink to="#!" className="filter-links" end>
            Type
          </NavLink>
          <NavLink to="#!" className="filter-links" end>
            Price High to Low
          </NavLink>
          <NavLink to="#!" className="filter-links" end>
            Price Low to High
          </NavLink>
        </div>
      </section>

      <section aria-labelledby="tours">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-8">
          {status === "success"
            ? data?.map((tour: TourProps) => (
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
