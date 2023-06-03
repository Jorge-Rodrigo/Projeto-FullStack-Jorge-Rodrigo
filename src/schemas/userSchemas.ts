import validator from "validator";
import { z } from "zod";

const userSchema = z
  .object({
    fullName: z
      .string()
      .max(150, "Nome deve conter menos de 150 Caracters")
      .min(4, "Nome deve conter no minimo 4 Caracteres"),
    email: z.string().email("Email invalido").max(45),
    password: z
      .string()
      .min(8, "Senha deve conter no minimo 8 Caracteres")
      .max(120, "Senha deve conter menos de 120 Caracteres"),
    passwordConfirm: z
      .string()
      .min(8, "Senha deve conter no minimo 8 Caracteres")
      .max(120, "Senha deve conter menos de 120 Caracteres"),
    phoneNumber: z
      .string()
      .refine(validator.isMobilePhone, "Coloque um numero valido"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Senha precisam ser iguais",
    path: ["passwordConfirm"],
  });

const userReturn = z.object({
  id: z.number(),
  fullName: z.string().max(150).min(4),
  email: z.string().email().max(45),
  createdAt: z.string(),
  updatedAt: z.string(),
  phoneNumber: z.string(),
  deletedAt: z.string().nullable(),
});

const userLogin = z.object({
  email: z.string().email("Email invalido"),
  password: z
    .string()
    .min(8, "Senha deve conter no minimo 8 Caracteres")
    .max(120, "Senha deve conter menos de 120 Caracteres"),
});

export { userSchema, userReturn, userLogin };
