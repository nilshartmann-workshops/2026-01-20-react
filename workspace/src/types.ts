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
  location: z.emoji(),
  wateringInterval: z.number().min(1),
  lastWatered: z.string().optional(),
});

export type Plant = z.infer<typeof PlantSchema>




