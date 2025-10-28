import { z } from 'zod';

export const shelterSelectionSchema = z
  .object({
    shelterSelectionType: z.enum(['one', 'all']),
    selectedShelterId: z.string().nullable(),
    amount: z.number().min(1, 'Suma musí byť minimálne 1€'),
  })
  .refine(
    (data) => {
      if (data.shelterSelectionType === 'one') {
        return data.selectedShelterId !== null && data.selectedShelterId !== '';
      }
      return true;
    },
    {
      message: 'Toto pole je povinné',
      path: ['selectedShelterId'],
    }
  );

export type ShelterSelectionFormData = z.infer<typeof shelterSelectionSchema>;
