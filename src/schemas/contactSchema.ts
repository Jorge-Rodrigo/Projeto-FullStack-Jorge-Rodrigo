import { z } from "zod";
import { userReturn } from "./userSchemas";
import validator from "validator";

const contactReturn = userReturn.omit({ deletedAt: true });
const contactSchema = z.object({
  fullName: z
    .string()
    .max(150, "Nome deve conter menos de 150 Caracters")
    .min(4, "Nome deve conter no minimo 4 Caracteres"),
  email: z.string().email("Email invalido").max(45),
  phoneNumber: z
    .string()
    .refine(validator.isMobilePhone, "Coloque um numero valido"),
});

const updateContactSchema = contactSchema.partial();

export { contactReturn, contactSchema, updateContactSchema };
