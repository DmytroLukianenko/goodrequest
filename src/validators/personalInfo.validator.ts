import { z } from 'zod';

export const personalInfoSchema = z.object({
  firstName: z.string().min(2, 'Meno musí obsahovať aspoň 2 znaky').max(20, 'Meno môže obsahovať maximálne 20 znakov').optional().or(z.literal('')),
  lastName: z.string().min(2, 'Priezvisko musí obsahovať aspoň 2 znaky').max(30, 'Priezvisko môže obsahovať maximálne 30 znakov'),
  email: z.string().email('Neplatný formát e-mailovej adresy'),
  phone: z.string().min(1, 'Telefónne číslo je povinné'),
});

export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;
