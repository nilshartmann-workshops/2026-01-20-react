import { z } from "zod";

// export type Plant = {
//   id: string;
//   name: string;
//   location: string;
//   wateringInterval: number;
//   lastWatered?: string;
// }

// zod
export const PlantSchema = z.object( {
  id: z.string(),
  name: z.string(),
  location: z.string(),
  wateringInterval: z.number(),
  lastWatered: z.string().optional(),
});

export type Plant = z.infer<typeof PlantSchema>




