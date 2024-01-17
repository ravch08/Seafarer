import { queryClient } from "../../App";
import { getCrew, getPricing, getTestimonials, getTours } from "./api";

export async function toursLoader() {
  return queryClient.fetchQuery({
    queryKey: ["tours"],
    queryFn: getTours,
  });
}

export const crewLoader = () => {
  return queryClient.fetchQuery({
    queryKey: ["teams"],
    queryFn: getCrew,
  });
};

export function testimonialLoader() {
  return queryClient.fetchQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });
}

export const pricingLoader = () => {
  return queryClient.fetchQuery({
    queryKey: ["pricing"],
    queryFn: getPricing,
  });
};
