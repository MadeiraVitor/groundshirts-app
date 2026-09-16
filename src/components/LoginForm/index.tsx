import { Link, useNavigate } from "@tanstack/react-router";
import authBackground from "../../assets/images/auth-background.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext/AuthContext";

export const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { signIn } = useAuth();

  const navigate = useNavigate();

  const signInFormSchema = z.object({
    email: z.email("E-mail inválido"),
    password: z.string().min(6, "A senha deve conter no mínimo 6 caracteres"),
  });

  type SignInFormData = z.infer<typeof signInFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    setIsSubmitting(true);

    try {
      await signIn(data);
      navigate({ to: "/" });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Erro desconhecido ao fazer login");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased">
      <main className="grow relative flex items-center justify-center py-20 px-4 md:px-margin-desktop min-h-screen">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            alt=""
            className="w-full h-full object-cover object-center opacity-90 scale-105 transform origin-center transition-transform duration-[20s] ease-out hover:scale-100"
            src={authBackground}
          />
          <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 w-full max-w-md mx-auto">
          <div className="glass-panel p-8 md:p-12 shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
            <header className="text-center mb-10">
              <Link to="/">
                <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-black tracking-tighter text-on-surface mb-2 uppercase">
                  GROUNDSHIRTS
                </h1>
              </Link>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Entre na sua conta
              </p>
            </header>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block font-label-sm text-label-sm uppercase tracking-widest text-on-surface mb-2">
                  Email
                </label>
                <input
                  className="w-full border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 font-body-lg text-body-lg text-on-surface transition-colors bg-transparent placeholder:text-on-surface-variant/50"
                  type="email"
                  placeholder="exemplo@email.com"
                  {...register("email")}
                />

                {errors.email && (
                  <span className="text-error text-[12px] mt-1 block">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block font-label-sm text-label-sm uppercase tracking-widest text-on-surface">
                    Senha
                  </label>
                  <a
                    className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4"
                    href="#"
                  >
                    Esqueceu a senha?
                  </a>
                </div>
                <input
                  className="w-full border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 font-body-lg text-body-lg text-on-surface transition-colors bg-transparent placeholder:text-on-surface-variant/50"
                  type="password"
                  placeholder="••••••••"
                  {...register("password")}
                />

                {errors.password && (
                  <span className="text-error text-[12px] mt-1 block">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="pt-4">
                {error && (
                  <span className="text-error text-[12px] mb-2 block">
                    {error}
                  </span>
                )}

                <button
                  className="w-full bg-primary-container text-on-primary py-4 px-8 font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Entrando..."
                  ) : (
                    <>
                      <span>Entrar</span>
                      <span className="text-[18px] group-hover:translate-x-1 transition-transform">
                        <FaArrowRightLong />
                      </span>{" "}
                    </>
                  )}
                </button>
              </div>
            </form>
            <div className="mt-7 pt-5 text-center border-t border-outline-variant/30">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Novo na GROUNDSHIRTS?
                <Link
                  className="text-primary hover:underline decoration-1 underline-offset-4 ml-1"
                  to="/signup"
                >
                  Crie uma conta
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
