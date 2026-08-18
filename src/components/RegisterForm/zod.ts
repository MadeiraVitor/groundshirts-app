import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const registerUserFormSchema = z
  .object({
    name: z.string().nonempty("Campo obrigatório!"),
    email: z.email("E-mail inválido!"),
    password: z
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres!")
      .nonempty("Campo obrigatório!"),
    confirmPassword: z.string().nonempty("Campo obrigatório!"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem!",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerUserFormSchema>;

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerUserFormSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    criteriaMode: "all",
  });

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    reset,
    setError,
  };
};
