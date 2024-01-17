import { useQuery } from "@tanstack/react-query";
import { number, string, z } from "zod";
import { queryClient } from "../../App";
import PricingItem from "../features/PricingItem";
import SectionHeading from "../features/SectionHeading";
import { getPricing } from "../utils/api";

export const loader = () => {
  return queryClient.fetchQuery({
    queryKey: ["pricing"],
    queryFn: getPricing,
  });
};

const PricingSchema = z.object({
  id: number().optional(),
  serviceType: string().min(4, {
    message: "Atleast 4 characters are required!",
  }),
  price: number().gte(0, { message: "Number must not be negative" }),
  listItem1: string().min(4, {
    message: "Atleast 4 characters are required!",
  }),
  listItem2: string().min(4, {
    message: "Atleast 4 characters are required!",
  }),
  listItem3: string().min(4, {
    message: "Atleast 4 characters are required!",
  }),
});

export type PricingProps = z.infer<typeof PricingSchema>;

const Pricing = () => {
  const { data: pricing } = useQuery({
    queryKey: ["pricing"],
    queryFn: getPricing,
  });

  return (
    <section aria-labelledby="Princing Table">
      <div className="container mx-auto">
        <SectionHeading
          bgText="Pricing"
          heading="Pricing Table"
          superHeading="Our latest offer"
          description="Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etia rmrhoncustema ecenas tempus, tellus eget..."
        />

        <div className="mt-16 flex items-center justify-center gap-12">
          {pricing?.map((price: PricingProps) => (
            <PricingItem
              key={price.id}
              price={price.price}
              listItem1={price.listItem1}
              listItem2={price.listItem2}
              listItem3={price.listItem3}
              serviceType={price.serviceType}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
