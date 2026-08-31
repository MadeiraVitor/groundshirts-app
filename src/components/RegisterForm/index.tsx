import { useRegisterForm } from "./register-form.schema";
import { FaArrowRightLong } from "react-icons/fa6";
import authBackground from "../../assets/images/auth-background.jpg";
import { Link } from "@tanstack/react-router";

export const RegisterForm = () => {
  const { register, errors, isSubmitting } = useRegisterForm();

  return (
    <section className="min-h-screen relative flex items-center justify-center p-4">
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <img
          className="w-full h-full bg-cover bg-center scale-105"
          src={authBackground}
          alt="Background"
        />
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
      </div>
    
      <main className="relative z-10 w-full max-w-115 bg-surface-container-lowest/85 backdrop-blur-2xl border border-outline-variant/30 rounded-xl shadow-lg p-8 md:p-12 flex flex-col gap-8">
        <header className="text-center flex flex-col gap-2">
          <Link to="/">
            <h1 className="font-headline-xl text-headline-xl font-black tracking-tighter text-on-surface">
              GROUNDSHIRTS
            </h1>
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Junte-se a nossa comunidade.
          </p>
        </header>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest pl-1">
              Nome Completo
            </label>
            <input
              className="w-full bg-surface-container-low/50 border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-3 font-body-md text-on-surface transition-colors placeholder:text-on-surface-variant/50"
              type="text"
              {...register("name")}
              placeholder="Digite seu nome completo"
            />

            {errors.name && (
              <p className="text-xs text-error">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest pl-1">
              Email
            </label>
            <input
              className="w-full bg-surface-container-low/50 border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-3 font-body-md text-on-surface transition-colors placeholder:text-on-surface-variant/50"
              type="email"
              {...register("email")}
              placeholder="exemplo@email.com"
            />

            {errors.email && (
              <p className="text-xs text-error">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest pl-1">
              Senha
            </label>
            <input
              className="w-full bg-surface-container-low/50 border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-3 font-body-md text-on-surface transition-colors placeholder:text-on-surface-variant/50"
              type="password"
              {...register("password")}
              placeholder="••••••••"
            />

            {errors.password && (
              <p className="text-xs text-error">{errors.password.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest pl-1">
              Confirmar Senha
            </label>
            <input
              className="w-full bg-surface-container-low/50 border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-3 font-body-md text-on-surface transition-colors placeholder:text-on-surface-variant/50"
              type="password"
              {...register("confirmPassword")}
              placeholder="••••••••"
            />

            {errors.confirmPassword && (
              <p className="text-xs text-error">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            disabled={isSubmitting}
            className="mt-4 w-full bg-primary-container text-on-primary-container font-label-sm text-label-sm uppercase tracking-widest py-4 px-8 hover:bg-primary transition-colors duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:cursor-not-allowed"
            type="submit"
          >
            {isSubmitting ? (
              <span>Enviando...</span>
            ) : (
              <>
                <span>Criar conta</span>
                <span className="text-[18px] group-hover:translate-x-1 transition-transform duration-300">
                  <FaArrowRightLong />
                </span>
              </>
            )}
          </button>
        </form>
        <div className="pt-5 text-center border-t border-outline-variant/30">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Já tem uma conta?
            <Link
              className="text-primary hover:underline decoration-1 underline-offset-4 ml-1"
              to="/signin"
            >
              Entrar
            </Link>
          </p>
        </div>
      </main>
    </section>
  );
};
