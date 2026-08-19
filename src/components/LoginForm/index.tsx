import { Link } from "@tanstack/react-router";
import authBackground from "../../assets/images/auth-background.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

export const LoginForm = () => {
  return (
    <section className="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased">
      {/* <!-- SUPPRESSED TOPNAVBAR - Transactional Page Intent --> */}
      <main className="grow relative flex items-center justify-center py-20 px-4 md:px-margin-desktop min-h-screen">
        {/* <!-- Background Image --> */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            alt=""
            className="w-full h-full object-cover object-center opacity-90 scale-105 transform origin-center transition-transform duration-[20s] ease-out hover:scale-100"
            src={authBackground}
          />
          <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
        </div>
        {/* <!-- Login Container --> */}
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
            <form className="space-y-6">
              <div>
                <label className="block font-label-sm text-label-sm uppercase tracking-widest text-on-surface mb-2">
                  Email
                </label>
                <input
                  className="w-full border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 font-body-lg text-body-lg text-on-surface transition-colors bg-transparent placeholder:text-on-surface-variant/50"
                  type="email"
                  placeholder="exemplo@email.com"
                />
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
                />
              </div>
              <div className="pt-4">
                <button
                  className="w-full bg-primary-container text-on-primary py-4 px-8 font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                  type="submit"
                >
                  <span>Entrar</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    <FaArrowRightLong />
                  </span>
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
      {/* <!-- SUPPRESSED FOOTER - Transactional Page Intent --> */}
    </section>
  );
};
