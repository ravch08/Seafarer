import { useQuery } from "@tanstack/react-query";
import { number, string, z } from "zod";

import { queryClient } from "../../App";
import { getCrew } from "../utils/api";
import { CrewItem, SectionHeading } from "../utils/helper";

export const loader = () => {
  return queryClient.fetchQuery({
    queryKey: ["teams"],
    queryFn: getCrew,
  });
};

const CrewSchema = z.object({
  id: number().optional(),
  imgSrc: string(),
  name: string().min(4, { message: "Atleast 4 characters are required!" }),
  designation: string().min(4, {
    message: "Atleast 4 characters are required!",
  }),
});

export type CrewProps = z.infer<typeof CrewSchema>;

const OurCrew = () => {
  const { data: teams, status } = useQuery({
    queryKey: ["teams"],
    queryFn: getCrew,
  });

  return (
    <section aria-labelledby="Our Crew">
      <div className="container mx-auto">
        <SectionHeading
          bgText="Crew"
          heading="MEET OUR CREW"
          superHeading="OUR PROFESSIONALS"
          description="Thvme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam rhonc usaecenastem pus, tellus eget..."
        />

        <div className="mt-12 flex items-center justify-center gap-6">
          {status === "pending" ? <h2>Loading...</h2> : null}
          {status === "success"
            ? teams.map((item: CrewProps) => (
                <CrewItem
                  key={item.id}
                  imgSrc={item.imgSrc}
                  name={item.name}
                  designation={item.designation}
                />
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

export default OurCrew;
